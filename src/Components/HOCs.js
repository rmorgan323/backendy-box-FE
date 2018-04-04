import React from 'react';
import Loading from './Loading/Loading';

export const withNullIdeas = (Component) => { 
  return (props) => {
    return props.ideas === null ? <Loading /> : <Component {...props} />;
  }
};

export const withZeroIdeas = (Component) => {
  return (props) => {
    return !props.ideas.length ? <h5 className="no-idea">You are idea free.</h5> : <Component {...props} />
  }
};