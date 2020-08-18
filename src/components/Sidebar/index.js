import React from 'react';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import './style.scss';

function Sidebar(props) {
  return (
    <section className="sidebar">
      <img src={props.avatarUrl} alt="Company Logo" className="company-avatar" />
      <p className="company-name">{props.name}</p>
      {
        props.description && (
          <p className="company-description">{props.description}</p>
        )
      }
      <p className="company-location"><FaMapMarkerAlt />{props.location}</p>
      <p className="company-link"><FaLink /><a href={props.link}>{props.link}</a></p>
    </section>
  )
}

export default Sidebar;
