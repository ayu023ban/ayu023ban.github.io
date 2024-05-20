import React from "react";
import classes from "./Introduction.module.css";
import BigText from "../UI/BigText/BigText.js";
import Button from "../UI/Button/Button.js";
import mailtoHandler from "../../services/mailToHandler.js";
import { DataContext } from "../../hoc/DataContext.js";

class Introduction extends React.Component {
  static contextType = DataContext;
  render() {
    const { full_name, description1, email } = this.context.profile;

    return (
      <div className={classes.Introduction}>
        <div className={classes.Heading}>Hi, my name is</div>
        <BigText>{full_name}</BigText>
        <BigText color="Dark">and this is my story.</BigText>
        <div className={classes.Description}>{description1}</div>
        <Button clicked={() => mailtoHandler(email)} size={1.2}>
          Get In Touch
        </Button>
      </div>
    );
  }
}

export default Introduction;
