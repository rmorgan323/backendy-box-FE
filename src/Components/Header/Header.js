import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import clearLocalStorage from '../../helpers/clearLocalStorage';

class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    await this.checkForKey();
    await this.props.loadUser();
  }

  checkForKey = () => {
    const key = JSON.parse(localStorage.getItem('backendybox-token-999'));
    if (window.location.search.length > 200) {
      const token = this.getToken();
      localStorage.setItem('backendybox-token-999', JSON.stringify(token));
    } else if (key) {
      return;
    } else {
      clearLocalStorage();
      window.location="https://backendy-box.e1.loginrocket.com/";
      return;
    }
  }

  getToken = () => {
    const removeFront = new RegExp(/\?token=/);
    const removeBack = new RegExp(/\&signup=true/);
    const parse = window.location.search.replace(removeFront, '');
    const parseEnd = parse.replace(removeBack, '')

    return parseEnd;
  }

  render() {
    return (
      <div className="header-component">
        header
      </div>
    ) 
  };
};

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => {
    dispatch(actions.loadUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);