import React from 'react';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { Link, withRouter } from 'react-router-dom';
import { getIsLoggedIn, handleUnAuthorize } from '../../modules/Auth';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  }
});

const Header = props => {
  const { handleUnAuthorize, isLoggedIn, classes } = props;

  const handleClick = () => {
    handleUnAuthorize();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.grow} variant="h6" color="inherit">
            Loft Taxi
          </Typography>
          <Button component={Link} to="/map">
            Карта
          </Button>
          <Button component={Link} to="/profile">
            Профиль
          </Button>
          {isLoggedIn ? (
            <Button onClick={handleClick}>Выйти</Button>
          ) : (
            <Button component={Link} to="/login">
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: getIsLoggedIn(state) });
const mapDispatchToProps = { handleUnAuthorize };

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Header);
