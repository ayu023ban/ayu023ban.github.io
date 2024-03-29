import React from "react";
import classes from "./Detail.module.css";

const Detail = (props) => {
  const job = props.job;
  const job_end = new Date(job.till);
  return (
    <div className={classes.Detail}>
      <div className={classes.Heading}>
        {job.jobTitle} @{" "}
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.CompanyName}
        >
          {job.company}
        </a>
      </div>
      <div className={classes.Time}>
        {job.from} - {job_end.getTime() > Date.now() ? "present" : job.till}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: job.description }}
        className={classes.Description}
      ></div>
    </div>
  );
};

export default Detail;
