import React, { useEffect, useRef } from 'react';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { Link, withRouter } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import { getIsLoggedIn } from '../../modules/Auth';
import { getIsRoute, getRoute, handleClearSubmit } from '../../modules/Map';
import MapForm from './MapForm';
import { drawRoute } from './routeUtils';

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

const Map = props => {
  const { isLoggedIn, isRoute, handleClearSubmit, route, classes } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);

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
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.2656504, 59.8029126],
      zoom: 15
    });

    return () => {
      map.current.remove();
    };
  });

  useEffect(() => {
    map.current.on('style.load', () => {
      if (isRoute) {
        drawRoute(map.current, route);
      }
    });
  });

  const handleClick = () => {
    handleClearSubmit();
  };

  return (
    <Div ref={mapContainer}>
      {isLoggedIn ? (
        !isRoute ? (
          <MapForm />
        ) : (
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="left">
                  Заказ размещён
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes.grow}
                  variant="body2"
                  gutterBottom
                >
                  Ваше такси уже едет к вам. Прибудет приблизительно через 10
                  минут.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClick}
                >
                  Сделать новый заказ
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )
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

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
  isRoute: getIsRoute(state),
  route: getRoute(state)
});

const mapDispatchToProps = { handleClearSubmit };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Map);
