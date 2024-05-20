import React from "react";
import classes from "./Contact.module.css";
import BigText from "../UI/BigText/BigText.js";
import Button from "./../UI/Button/Button.js";
import mailtoHandler from "../../services/mailToHandler.js";
import { DataContext } from "../../hoc/DataContext.js";

class Contact extends React.Component {
  contactRef = null;
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  scrollToMyRef = () => {
    window.scroll({
      top: this.contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    const email = this.context.profile.email;
    return (
      <div className={classes.Contact} ref={this.contactRef}>
        <h2 className={classes.Heading}>Next Steps?</h2>
        <BigText>Get In Touch</BigText>
        <p className={classes.Description}>
          My inbox is always open for new connections, any tips on how to
          improve and for any new opportunities.
        </p>
        <p className={classes.Description}>Drop me a message or just say hi.</p>
        <Button clicked={() => mailtoHandler(email)} size={1.2}>
          Get In Touch
        </Button>
      </div>
    );
  }
}

export default Contact;
