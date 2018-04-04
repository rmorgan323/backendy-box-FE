import React from 'react';
import './Loading.css';
import loading from './loading.gif';

const Loading = () => {

  return (
    <div className="loading-component">
      <img src={loading} className="loading-gif" alt="loading" />
    </div>
  );
};

export default Loading;