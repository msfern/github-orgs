import React from 'react';

import RepositoryCard from '../RepositoryCard/index';
import './style.scss';

function RepositoryList(props) {
  return (
    <div className="repository-list">
      {props.repositories.map(item => (
        <RepositoryCard 
          key={item.name} 
          name={item.name} 
          description={item.description} 
          issues={item.open_issues_count} 
          stars={item.stargazers_count} 
          update={item.updated_at} 
          language={item.language} 
          forks={item.forks} 
          link={item.html_url} 
        />
      ))}
    </div>
  )
}

export default RepositoryList;
