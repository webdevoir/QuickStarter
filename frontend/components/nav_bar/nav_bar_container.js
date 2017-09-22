import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

import navBar from './nav_bar';

const mapStateToProps = ({ errorsReducer, sessionReducer }) => ({
  currentUser: sessionReducer.currentUser,
  loggedIn: Boolean(sessionReducer.currentUser),
  errors: errorsReducer.sessionErrReducer,
  modalState: false,
  formType: null
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navBar);