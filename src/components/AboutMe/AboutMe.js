import React from "react";
import { DataContext } from "../../hoc/DataContext.js";
import classes from "./AboutMe.module.css";

class AboutMe extends React.Component {
  aboutMeRef = null;
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.aboutMeRef = React.createRef();
  }

  scrollToMyRef = () => {
    window.scroll({
      top: this.aboutMeRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    const {
      technologies,
      first_name,
      position,
      location,
      description2,
      description3,
    } = this.context.profile;

    const technologiesList = technologies.map((el) => (
      <li key={el} className={classes.GridListItem}>
        {el}
      </li>
    ));

    return (
      <div className={classes.AboutMe} ref={this.aboutMeRef}>
        <h2 className={classes.Heading}>About Me</h2>
        <p className={classes.Description}>
          {`Hello, I am ${first_name}. A ${position} from ${location}.`}
        </p>
        <p className={classes.Description}>{description2}</p>
        <p className={classes.Description}>{description3}</p>
        <p>
          Some selected technologies and methodologies I worked with recently:
        </p>
        <ul className={classes.GridList}>{technologiesList}</ul>
      </div>
    );
  }
}

export default AboutMe;
