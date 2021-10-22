import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  return (
    <main className={classes.main}>
      <h1>Redux Counter </h1>
      {show && <div className={classes.counter}>{counter}</div>}
      <button className={classes.button} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>

      <div>
        <button className={classes.button} onClick={incrementHandler}>
          increment
        </button>
        <button className={classes.button} onClick={decrementHandler}>
          decrement
        </button>
      </div>
    </main>
  );
};

export default Counter;
