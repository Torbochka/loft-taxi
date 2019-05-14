import React, { useEffect } from 'react';
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
import {
  fetchAddressListRequest,
  handleRouteSubmit,
  getAddresses,
  getIsAddresses
} from '../../modules/Map';

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
    [theme.breakpoints.up(600 + theme.spacing(6))]: {
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
  }
});

const renderSelectField = ({
  input,
  label,
  selectName,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor={selectName}>{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: selectName
      }}
    >
      {children}
    </Select>
  </FormControl>
);

const MapForm = ({
  fetchAddressListRequest,
  handleSubmit,
  handleRouteSubmit,
  isAddresses,
  addresses,
  classes,
  invalid,
  submitting,
  pristine
}) => {
  useEffect(() => {
    fetchAddressListRequest();
  }, []);

  const onSubmit = () => {
    handleRouteSubmit();
  };

  return (
    <Paper className={classes.paper} elevation={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {[
              { label: 'Выберите адрес отправления', name: 'from' },
              { label: 'Выберите адрес прибытия', name: 'to' }
            ].map(({ label, name }) => (
              <Field
                key={label}
                label={label}
                selectName={name}
                name={name}
                component={renderSelectField}
              >
                <option value=" " />
                {isAddresses &&
                  addresses.map(el => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
              </Field>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={invalid || pristine}
              variant="outlined"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Вызывать такси
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

const mapStateToProps = state => ({
  addresses: getAddresses(state),
  isAddresses: getIsAddresses(state)
});
const mapDispatchToProps = { fetchAddressListRequest, handleRouteSubmit };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'mapForm'
  }),
  withStyles(styles)
)(MapForm);
