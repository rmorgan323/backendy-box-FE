import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import moment from 'moment';

const CardContainer = (props) => {

  let cardsDisplay;

  if (props.ideas.length) {
    cardsDisplay = props.ideas.map(idea => {
      return (
        <Card 
          author={idea.author}
          title={idea.title}
          body={idea.body}
          quality={idea.quality}
          date={moment(idea.created_at).format('lll')}
          id={idea.id}
          key={idea.id}
        />
      )
    })
  }

  return (
    <div className="card-container-component">
      {cardsDisplay}
    </div>
  )
}

const mapStateToProps = store => ({
  ideas: store.idea
});

export default connect(mapStateToProps, null)(CardContainer);