import React, { useContext } from "react";
import classes from "./SocialLinks.module.css";
import { DataContext } from "../../hoc/DataContext.js";
const SocialLinks = () => {
  const data = useContext(DataContext);
  const social_links = data.profile.social_links;
  return (
    <div className={classes.SocialLinks}>
      <ul>
        {Object.keys(social_links)
          .filter((elem) => social_links[elem])
          .map((elem, index) => (
            <li key={index}>
              <a
                href={social_links[elem].link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <em className={social_links[elem].logo}></em>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
