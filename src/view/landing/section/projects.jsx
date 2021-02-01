import React from 'react';
import projectConfig from '../../../config/projects.json';
import { FormattedMessage } from 'react-intl';
import { Row } from 'antd';
import ProjectCard from '../components/projectCard.jsx';
import ProjectTextCard from '../components/projectTextCard.jsx';
import han from '../../../util/han.simple';

function ProjectList(config) {
  const projects = [];
  const userLang = navigator.language || '';
  const language = userLang.toLowerCase().substr(0, 2);
  const projectRow = [];
  for (let i = 0; i < config.length; i++) {
    let project = config[i];
    if (language === 'zh') {
      project.desc[language] = han(project.desc[language]);
    }
    projectRow.push(<ProjectCard index={i} logo={project.logo} key={project.name} name={project.name} desc={project.desc[language]} link={project.link} />);
  }
  projects.push(
    <Row key="projects" gutter={[32, 32]}>
      {projectRow}
    </Row>
  );
  return projects;
}

function ProjectTextCardList(config) {
  const projects = [];
  const projectRow = [];
  for (let i = 0; i < config.length; i++) {
    let project = config[i];
    projectRow.push(
      <ProjectTextCard
        index={i}
        key={project.name}
        name={project.name}
        link={project.link}
        />
    );
  }
  projects.push(
    <Row key="projects" gutter={[32, 32]}>
      {projectRow}
    </Row>
  );
  return projects;
}

class Projects extends React.PureComponent {
  render() {
    return (
      <div className="landing-section projects" id="projects">
        <div className="projects-title">
          <h1>
            <FormattedMessage id="projects.title" />
          </h1>
        </div>
        <div className="projects-body">
          <div className="projects-body-subtitle">
            <h2>
              <FormattedMessage id="projects.title.online" />
            </h2>
          </div>
          <div className="project-body-list">
            {ProjectList(projectConfig.online)}
          </div>
          <div className="projects-body-subtitle">
            <h2>
              <FormattedMessage id="projects.title.app" />
            </h2>
          </div>
          <div className="project-body-list">
            {ProjectList(projectConfig.app)}
          </div>
          <div className="projects-body-subtitle">
            <h2>
              <FormattedMessage id="projects.title.opensource" />
            </h2>
          </div>
          <div className="project-body-list">
            {ProjectList(projectConfig.opensource)}
          </div>
          <div className="projects-body-subtitle">
            <h2>
              <FormattedMessage id="projects.title.mini" />
            </h2>
          </div>
          <div className="project-body-list">
            {ProjectTextCardList(projectConfig.mini)}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
