import React from "react";
import classes from "./Introduction.module.css";
import BigText from "../UI/BigText/BigText";
import Button from "../UI/Button/Button";
import mailtoHandler from "../../services/mailToHandler";
import { DataContext } from "../../hoc/DataContext";

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
