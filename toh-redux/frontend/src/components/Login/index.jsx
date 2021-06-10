import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login } from '../../redux/actions/actionCreators';

function Login({ auth, actions }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <p>
        Welcome
        {' '}
        {auth?.user?.name}
        . Skylab mola.
      </p>
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello stranger. Please access with your credentials.</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );

  return (
    <>
      { auth.isLoggedIn === true
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
}

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
