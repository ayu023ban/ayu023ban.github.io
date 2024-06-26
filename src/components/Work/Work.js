import React from "react";
import classes from "./Work.module.css";
import Card from "../UI/Card/Card.js";
import Button from "./../UI/Button/Button.js";
import { DataContext } from "../../hoc/DataContext.js";

class Work extends React.Component {
  workRef = null;
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.workRef = React.createRef();
    this.state = { showMore: false };
  }

  scrollToMyRef = () => {
    window.scroll({
      top: this.workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  showMoreHandler = () => {
    this.setState((prevState) => {
      return { showMore: !prevState.showMore };
    });
  };

  render() {
    const projects = this.context.projects;
    const { max_project_to_show } = this.context.config;
    let cards = projects.map((p) => <Card key={p.name} project={p} />);

    if (!this.state.showMore) {
      cards = cards.slice(0, max_project_to_show);
    }

    const buttonText = this.state.showMore ? "Show Less" : "Show More";

    return (
      <div className={classes.Work} ref={this.workRef}>
        <h2 className={classes.Heading}>Some Projects I have Worked On</h2>
        {cards}
        <Button clicked={this.showMoreHandler} className={classes.ShowMore}>
          {buttonText}
        </Button>
      </div>
    );
  }
}

export default Work;
