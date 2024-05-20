import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import Logo from "../../Logo/Logo.js";
import Button from "../../UI/Button/Button.js";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.js";
const toolbar = (props) => {
  const resumeHandler = () => {
    window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank");
  };

  const cssClasses = [classes.Toolbar];

  if (props.stacked) {
    cssClasses.push(classes.Stacked);
  }

  if (props.hidden) {
    cssClasses.push(classes.Hidden);
  }

  return (
    <header className={cssClasses.join(" ")}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <DrawerToggle clicked={props.openMenu} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems stacked={props.stacked} clicked={props.clicked} />
        <Button clicked={resumeHandler}>RESUME</Button>
      </nav>
    </header>
  );
};

export default toolbar;
