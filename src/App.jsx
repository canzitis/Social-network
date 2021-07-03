import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Preloader from "./components/common/preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initialize } from "./Redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initializet) {
      <Preloader />;
    }
    return (
      <div className="site">
        <div className="content">
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />

            <div className="app-wrapper-content">
              <Route path="/profile/:id?" render={() => <ProfileContainer />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToPrors = (state) => {
  return {
    initializet: state.app.initializet,
  };
};

export default connect(mapStateToPrors, { initialize })(App);
