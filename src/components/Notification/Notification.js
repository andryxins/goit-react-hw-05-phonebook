import React from 'react';
import Styles from './Notification.module.css';
import { CSSTransition } from 'react-transition-group';
import notificationTransition from '../../Transitions/notificationTransition.module.css';

const Notification = ({ message, isActive }) => (
  <CSSTransition
    in={isActive}
    classNames={notificationTransition}
    className={Styles.container}
    timeout={250}
    mountOnEnter
    unmountOnExit
  >
    <div>{message}</div>
  </CSSTransition>
);

export default Notification;
