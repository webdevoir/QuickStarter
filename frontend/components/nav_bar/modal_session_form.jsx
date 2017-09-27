import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
    overflow: "hidden",
    perspective: 1300,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  content: {
    position: "relative",
    margin: "15% auto",
    width: "28%",

    border: "1px solid rgba(0, 0, 0, .2)",
    background: "white",
    overflow: "auto",
    borderRadius: "10px",
    outline: "none",
    boxShadow: "0 5px 10px rgba(0, 0, 0, .3)"
  }
};

const demo = {
  email: "LookAround@email.com",
  password: "secure"
};

class ModalSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      formType: "LogIn",
      loggedIn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModalState = this.toggleModalState.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logDemo = this.logDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {

      this.setState({errors: [nextProps.errors] });
  }


  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }


  handleSubmit(action) {
    return e => {
      e.preventDefault();
      return action(this.state);

    };
  }

//this function isnt even being called ever
//jk im not even sure anymore

  logOut(e) {

    this.props.logout();
    this.setState({
        username: "",
        email: "",
        password: "",
        modalState: false,
        formType: "none",
        errors: [],
        loggedIn: false
  }
    );
  }



  toggleModalState(formType = null) {
    // if(formType ==='login') {
    //
    // }
    this.props.clearErrors();
    this.setState({
      username: "",
      password: "",
      email: "",
      formType,
      loggedIn: false
    }, () => this.props.toggleModal());
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  logDemo(e) {
    e.preventDefault();
    this.props.login(demo);
    this.setState({loggedIn: true });

  }

  rightButtons() {
    if (this.props.currentUser) {
      return (
        <div className="nav-button-section-logout">
          <i className="fa fa-search" aria-hidden="true"></i>
          <button onClick={()=> this.logOut()} >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (

        <div className="nav-button-section">
          <i className="fa fa-search" aria-hidden="true"></i>
          <button onClick={() => this.toggleModalState("LogIn")}>LogIn</button>
          <button onClick={() => this.toggleModalState("Sign Up")}>
            Sign Up
          </button>
          <button onClick={this.logDemo}>Demo</button>
        </div >

      );
    }
  }



  render() {

    let userText = "Come get your Quick Start today!";
    let sessionAction = this.props.signup;
    let userNameBox = (
      <div>
        <input

          placeholder="Username"
          value={this.state.username}
          onChange={this.update("username")}
          type="text"
        />
      </div>
    );

    if (this.state.formType === "LogIn") {
      userText = "Welcome Back";
      sessionAction = this.props.login;
      userNameBox = "";
    }


    const loginInfo = (
      <div className="modal-inputs">
          <form onSubmit={this.handleSubmit(sessionAction)}>
            <h2>Welcome Back!</h2>
            {this.renderErrors()}
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              type="text"
            />
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              type="password"

            />
            <input type="submit" value={this.state.formType} />
          </form>
        </div>
    );


const signUpInfo = (
    <div className="modal-inputs">
        <form onSubmit={this.handleSubmit(sessionAction)}>
          <h2>Come get your QuickStart today!</h2>
          {this.renderErrors()}
          <div>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={this.update("username")}
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
            type="text"
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            type="password"

          />
          <input type="submit" value={this.state.formType} />
        </form>
      </div>
  );
let form;
if (this.state.formType === "LogIn") {
  form = loginInfo;
} else if (this.state.formType === "Sign Up"){
  form= signUpInfo;
}



    return (
      <div  className="modal-form-container">
        {this.rightButtons()}

        <ReactModal

          isOpen={this.props.modalState}
          contentLabel="Modal"
          style={style}
          onRequestClose={this.toggleModalState}
        >
          <button onClick={() => this.toggleModalState(null)}>Close</button>
          {form}
        </ReactModal>
      </div>
    );
  }
}

export default withRouter(ModalSessionForm);
