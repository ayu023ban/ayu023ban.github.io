import React from 'react';
import Aux from './../../../hoc/Auxiliary.js';
import NavigationItems from './../NavigationItems/NavigationItems.js';
import classes from './SideDrawer.module.css';
import Button from '../../UI/Button/Button.js';
import BackDrop from '../../UI/BackDrop/BackDrop.js';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  const resumeHandler = () => {
    window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank");
  };

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems clicked={props.scrolledTo} />
          <Button clicked={resumeHandler} >RESUME</Button>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
