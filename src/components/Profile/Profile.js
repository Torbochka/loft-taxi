import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PaymentForm from './PaymentForm';

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
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '100vh'
  }
});

const Profile = props => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={10}>
        <Paper className={classes.paper} elevation={2}>
          <Typography
            className={classes.grow}
            variant="h4"
            component="h1"
            align="center"
          >
            Профиль
          </Typography>
          <PaymentForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
