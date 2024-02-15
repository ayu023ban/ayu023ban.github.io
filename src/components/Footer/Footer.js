import React, { useContext } from 'react'
import classes from './Footer.module.css'
import { DataContext } from '../../hoc/DataContext'
const Footer = () => {
  const data  = useContext(DataContext)
  const full_name = data.profile.full_name
  return (
    <div className={classes.Footer}>
      <a
        href={process.env.REACT_APP_GITHUB_REPO}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>{`Designed & Built by ${full_name}`}</div>
        <span>{`${process.env.REACT_APP_WEBSITE_URL} v${process.env.REACT_APP_WEBSITE_VERSION} @ GitHub`}</span>
      </a>
    </div>
  )
}

export default Footer
