import React from 'react';
import classes from './loading.module.css';

export default function LoadingPage() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader} />
    </div>
  );
}
