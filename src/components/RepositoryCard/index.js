import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { GoRepoForked, GoIssueOpened } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';

import './style.scss';

function RepositoryCard(props) {
  return (
    <div className="repository-card">
      <div className="repository-header">
        <p className="title">{props.name}</p>
        <p className="last-update">{props.update}</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="repository-data">
        <p className="stars"><FaRegStar/>{props.stars}</p>
        <p className="forks"><GoRepoForked/>{props.forks}</p>
        <p className="issues"><GoIssueOpened/>{props.issues}</p>
      </div>
      <div className="repository-footer">
        <a href={props.link} target="_blank" className="see-more">See more <BsArrowRight/></a>  
      </div>
    </div>
  )
}

export default RepositoryCard;
