import React from 'react'
import ablogo from './../../assets/images/ab-logo.png'
import classes from './Logo.module.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={ablogo} alt="My Resume" />
  </div>
)

export default logo
