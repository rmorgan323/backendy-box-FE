import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

const Card = ({ id, author, title, body, quality, date, deleteIdea, updateIdea }) => {

  const qualityArray = [null, 'IDIOTIC', 'SORTA DUMB', 'AVERAGE', 'PRETTY GOOD', 'YES.']

  return (
    <div className="card-component">
      <h4>{title}</h4>
      <button
        className="delete-button"
        onClick={(event) => deleteIdea(event, id)}
      >&#10005;</button>
      <div className="para-container">
        <p>{body}</p>
      </div>
      <div className="card-bottom">
        <div className="author-row">
          <h5>by {author}</h5>
        </div>
        <div className="bottom-row">
          <h5>Quality - <span className="quality-span">{qualityArray[quality]}</span></h5>
          <button 
            className="upvote-button"
            onClick={(event) => updateIdea(event, id, title, body, quality + 1)}
          ></button>
          <button 
            className="downvote-button"
            onClick={(event) => updateIdea(event, id, title, body, quality - 1)}
          ></button>
          <h6>{date}</h6>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteIdea: (event, id) => {
    event.preventDefault();
    dispatch(actions.deleteIdea(id));
  },
  updateIdea: (event, id, title, body, quality) => {
    event.preventDefault();
    if (quality > 0 && quality <= 5) {
      dispatch(actions.updateIdea(id, title, body, quality))
    }
  }
});

export default connect(null, mapDispatchToProps)(Card);