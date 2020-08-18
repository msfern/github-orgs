import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import Main from '../../components/Main/index';
import './style.scss';

function Organization() {
  const { organization = 'camunda' } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/orgs/${organization}`),
      fetch(`https://api.github.com/orgs/${organization}/repos`)
    ]).then(async responses => {
      const [organizationResponse, repositoryResponse] = responses;

      if(organizationResponse.status === 404) {
        setData({ error: 'Organization not found!' });
        return;
      }

      const org = await organizationResponse.json();
      const repos = await repositoryResponse.json();

      setData({
        org,
        repos
      });
    })
  }, [organization]);

  if(data?.error) {
    return <h1>Try again</h1>
  }

  if(!data?.org || !data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="container">
      <Sidebar 
        avatarUrl={data.org.avatar_url}
        name={data.org.name}
        description={data.org.description}
        location={data.org.location}
        link={data.org.blog}
      />
      <Header repositories={data.org.public_repos} />
      <Main repositories={data.repos} />
    </div>
  )
}

export default Organization;