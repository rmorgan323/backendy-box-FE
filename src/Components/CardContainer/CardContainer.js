import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import moment from 'moment';
import { compose } from 'recompose';
import { withNullIdeas, withZeroIdeas } from '../HOCs';

const CardContainer = (props) => {
  return (
    props.ideas.map(idea => {
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
      );
    })
  );
};

const mapStateToProps = store => ({
  ideas: store.idea
});

const withConditionalRenderings = compose(withNullIdeas, withZeroIdeas);
const EnhancedCardContainer = connect(mapStateToProps, null)(withConditionalRenderings(CardContainer));

export default EnhancedCardContainer;
