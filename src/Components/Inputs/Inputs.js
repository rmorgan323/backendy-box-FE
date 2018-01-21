import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import './Inputs.css';

class Inputs extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({[name]: value });
  }

  handleSubmit = ( event, title, body, name, id, quality ) => {
    event.preventDefault();
    this.props.addIdea(title, body, name, id, quality)
  }

  render() {
    return (
      <div className="inputs-component">
        <form className="input-form">
          <input 
            placeholder="Title"
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
            name="title"
          ></input>
          <input 
            placeholder="Body"
            value={this.state.body}
            onChange={(event) => this.handleChange(event)}
            name="body"
          ></input>
          <button
            onClick={(event) => this.handleSubmit(event, this.state.title, this.state.body, this.props.user.name, this.props.user.id, 3)}
          >SUBMIT</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  addIdea: (title, body, author, author_id, quality) => {
    dispatch(actions.addNewIdea(title, body, author, author_id, quality));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);