import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import ModalContainer from './modal_container';
import SearchContainer from '../search/search_container';
import { toggleModal } from '../../actions/ui_actions';


class navBar extends React.Component {
  constructor(props){
    super(props);

    this.openCreate = this.openCreate.bind(this);
    this.openExplore = this.openExplore.bind(this);

  }

  openCreate() {
    if (this.props.currentUser === null) {
        this.props.toggleModal();}
    else {
      this.props.history.push("/projects/new");
    }
  }

  openExplore() {
    this.props.history.push("/explore");
  }

  render() {

    return(
      <nav className="navbar grid">
        <div className="navbar--section navbar--section-left">
            <button className="navbar--button button" onClick={()=> this.openExplore()}>Explore</button>
            <button className="navbar--button button" onClick={() => this.openCreate()}>Start a Project</button>
          </div>
          <Link className="flex navbar--image"to="/"><img src="http://res.cloudinary.com/quickstarter/image/upload/c_scale,q_100,w_214/v1506394239/quickstarter_logo_b6yrvz.png" /></Link>
          <div className="flex navbar--section navbar--section-right" >
            <button className="navbar--button button" onClick={() => console.log("this is search")}>Search</button>
            {/* <SearchContainer /> */}
            <ModalContainer />
          </div>
      </nav>
    );
  }
}

export default navBar;
