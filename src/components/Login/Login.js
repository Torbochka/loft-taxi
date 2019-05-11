import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { handleLoginSubmit } from '../../modules/Login';

const styles = theme => ({
  paper: {
    padding: theme.spacing(3)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Неверный логин';
  }

  if (!values.password) {
    errors.password = 'Неправильный пароль';
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

const LoginForm = props => {
  const { handleSubmit, handleLoginSubmit, classes } = props;

  const onSubmit = () => {
    handleLoginSubmit();
  };

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      alignContent="stretch"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              alignContent="stretch"
              alignItems="stretch"
              direction="row"
              justify="flex-start"
              spacing={3}
            >
              <Grid item xs={12}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="center"
                  gutterBottom
                >
                  Войти
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="username"
                  label="Имя пользователя"
                  margin="none"
                  component={renderTextField}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  label="Пароль"
                  margin="none"
                  component={renderTextField}
                  type="password"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Войти
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = { handleLoginSubmit };

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));

export default reduxForm({
  form: 'LoginForm',
  validate
})(Form);
