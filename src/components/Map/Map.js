import React, { useEffect } from 'react';
import { compose } from 'redux';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import { getIsLoggedIn } from '../../modules/Auth';
import connect from 'react-redux/es/connect/connect';
import MapForm from './MapForm';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    top: 0,
    left: '20px',
    position: 'absolute',
    maxWidth: '30%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    zIndex: 1
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
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

const Map = props => {
  const { isLoggedIn, classes } = props;
  const mapContainer = React.createRef();

  const Div = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${window.innerHeight - 64}px;
  `;

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidG9ib2Noa2EiLCJhIjoiY2p2azJoNDQ4MGtxOTN5cW1yNmxmc3BleSJ9.mNLvfhUFoh2eIU7-e-C4cA';
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.2656504, 59.8029126],
      zoom: 15
    });

    return () => {
      map.remove();
    };
  });

  return (
    <Div ref={mapContainer}>
      {isLoggedIn ? (
        <MapForm />
      ) : (
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
            <Grid item xs={12}>
              <Typography
                className={classes.grow}
                variant="h4"
                component="h1"
                color="inherit"
              >
                Заполните платежные данные
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.grow} variant="body2" gutterBottom>
                Укажите информацию о банковской карте, чтобы сделать заказ.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                component={Link}
                variant="outlined"
                color="primary"
                className={classes.button}
                to="/profile"
              >
                Перейти в профиль
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Div>
  );
};

const mapStateToProps = state => ({ isLoggedIn: getIsLoggedIn(state) });

export default compose(
  withRouter,
  connect(mapStateToProps),
  withStyles(styles)
)(Map);
