import React, { Component } from "react";
import Detail from "./Detail/Detail.js";
import classes from "./MasterDetail.module.css";
import { DataContext } from "../../../hoc/DataContext.js";

class MasterDetail extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = { selectedJob: 0 };
  }

  selectJobHandler = (id) => {
    this.setState({ selectedJob: id });
  };

  render() {
    const jobs = this.context.jobs;
    const companyList = jobs.map((job) => {
      const listClass = job.id === this.state.selectedJob ? classes.Active : "";
      return (
        <li
          className={listClass}
          key={job.id}
          onClick={() => this.selectJobHandler(job.id)}
        >
          {job.company}
        </li>
      );
    });

    return (
      <div>
        <div className={classes.List}>
          <ul className={classes.SelectList}>{companyList}</ul>
        </div>
        {companyList.length > 0 && (
          <Detail job={jobs[this.state.selectedJob]} />
        )}
      </div>
    );
  }
}

export default MasterDetail;
