import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import connect from 'react-redux/es/connect/connect';
import { Field, reduxForm } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: 0,
    left: 20,
    maxWidth: '30%',
    zIndex: 1,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2))]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },

  formControl: {
    margin: theme.spacing.unit
    // minWidth: 120
  }
});

const renderSelectField = ({
  input,
  label,
  name,
  inputProps,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select native {...input} {...custom} {...inputProps}>
      {children}
    </Select>
  </FormControl>
);

const MapForm = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid
        container
        className={classes.root}
        spacing={4}
        alignContent="stretch"
        alignItems="stretch"
        direction="row"
        justify="flex-start"
        component="div"
      >
        <form className={classes.root} autoComplete="off">
          <Grid item xs={12}>
            <Typography
              className={classes.grow}
              variant="h4"
              component="h1"
              align="left"
            >
              Вызов такси
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Field
              classes={classes}
              name="from"
              component={renderSelectField}
              label="Выберите адресс отправления"
              inputProps={{
                name: 'from'
              }}
            >
              <option value="" />
              <option value={'ff0000'}>Red</option>
              <option value={'00ff00'}>Green</option>
              <option value={'0000ff'}>Blue</option>
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field
              classes={classes}
              name="to"
              component={renderSelectField}
              label="Выберите адресс прибытия"
              inputProps={{
                name: 'to'
              }}
            >
              <option value="" />
              <option value={'ff0000'}>Red</option>
              <option value={'00ff00'}>Green</option>
              <option value={'0000ff'}>Blue</option>
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary">
              Вызвать такси
            </Button>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({});

export default compose(
  withRouter,
  connect(mapStateToProps),
  reduxForm({
    form: 'mapForm'
  }),
  withStyles(styles)
)(MapForm);
