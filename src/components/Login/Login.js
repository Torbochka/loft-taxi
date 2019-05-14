import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getIsLoggedIn, handleLoginSubmit } from '../../modules/Auth';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(6))]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
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
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = props => {
  const { handleSubmit, handleLoginSubmit, isLoggedIn, classes } = props;

  const onSubmit = () => {
    handleLoginSubmit();
  };

  return isLoggedIn ? (
    <Redirect to="/map" />
  ) : (
    <Grid
      container
      className={classes.root}
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className={classes.paper} elevation={2}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h2" variant="h4" align="center">
                  Войти
                </Typography>
              </Grid>
              {[
                { name: 'username', label: 'Имя пользователя', type: 'text' },
                { name: 'password', label: 'Пароль', type: 'password' }
              ].map(({ name, label, type }) => (
                <Grid key={name} item xs={12}>
                  <Field
                    name={name}
                    label={label}
                    margin="none"
                    component={renderTextField}
                    type={type}
                    fullWidth
                    required
                  />
                </Grid>
              ))}
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
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: getIsLoggedIn(state) });
const mapDispatchToProps = { handleLoginSubmit };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'loginForm',
    validate
  }),
  withStyles(styles)
)(LoginForm);
