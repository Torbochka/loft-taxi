import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getProfile, handleProfileSubmit } from '../../modules/Profile';

const styles = theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
});

const normalizeCardNumber = value =>
  value
    ? value
        .replace(/\s/g, '')
        .match(/.{1,4}/g)
        .join(' ')
    : '';

const validate = values => {
  const { cardNumber, cvv } = { ...values };
  const errors = {};

  const requiredFields = ['cardName', 'cardNumber', 'expData', 'cvv'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Это обязательное поле';
    }
  });

  if (cardNumber && cardNumber.replace(/\s/g, '').length !== 16) {
    errors.cardNumber = 'В номере карты 16 цифр';
  }

  if (cardNumber && !/^\d+$/.test(cardNumber.replace(/\s/g, ''))) {
    errors.cardNumber = 'Может содержать только цифры';
  }

  if (cvv && cvv.length !== 3) {
    errors.cvv = 'CVV состоит из 3 цифр';
  }

  if (cvv && !/^\d+$/.test(cvv)) {
    errors.cvv = 'Может содержать только цифры';
  }

  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={!!(touched && error)}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const PaymentForm = props => {
  const { handleSubmit, handleProfileSubmit, submitSucceeded, classes } = props;

  const onSubmit = values => {
    handleProfileSubmit(values);
  };

  return submitSucceeded ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.grow} variant="body2" gutterBottom>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" component={Link} to="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classes.grow} variant="h6">
        Cпособ оплаты
      </Typography>
      <Grid
        container
        className={classes.root}
        spacing={3}
        alignContent="stretch"
        alignItems="stretch"
        component="div"
        direction="row"
        justify="flex-start"
      >
        <Grid item xs={12} md={6}>
          <Field
            name="cardName"
            label="Имя владельца"
            component={renderTextField}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            name="cardNumber"
            label="Номер карты"
            component={renderTextField}
            normalize={normalizeCardNumber}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            name="expData"
            label="Дата окончания действия"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            component={renderTextField}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            name="cvv"
            label="CVV"
            component={renderTextField}
            fullWidth
            required
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Сохранить
        </Button>
      </Grid>
    </form>
  );
};

PaymentForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  initialValues: getProfile(state)
});
const mapDispatchToProps = { handleProfileSubmit };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'paymentForm',
    validate
  }),
  withStyles(styles)
)(PaymentForm);
