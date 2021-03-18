import React from 'react'
import classes from './SocialLinks.module.css'
import { social_links } from '../../data/profile.json'
const socialLinks = () => {
  return (
    <div className={classes.SocialLinks}>
      <ul>
        {Object.keys(social_links)
          .filter(elem => social_links[elem])
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
  )
}

export default socialLinks
