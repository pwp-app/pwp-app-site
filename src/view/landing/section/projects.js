import React from 'react';
import projectConfig from '../../../config/projects.json';
import {FormattedMessage} from 'react-intl'
import {Row} from 'antd';
import ProjectCard from '../components/projectCard.js';

function ProjectList() {
    const projects = [];
    const userLang = navigator.language || '';
    const language = userLang.toLowerCase().substr(0, 2);
    for (let i = 0;i<projectConfig.length;i++){
        const projectRow = [];
        for (let project of projectConfig[i]){
            projectRow.push(
                <ProjectCard logo={project.logo} name={project.name} desc={project.desc[language]} link={project.link}/>
            );
        }
        projects.push(
            <Row gutter={[24,24]}>
                {projectRow}
            </Row>
        );
    }
    return (
        <div className="projects-body-list">{projects}</div>
    );
}

class Projects extends React.PureComponent {
    render() {
        return (
            <div className="landing-section projects" id="projects">
                <div className="projects-title">
                    <h1><FormattedMessage id="projects.title"/></h1>
                </div>
                <div className="projects-body">
                    <ProjectList/>
                </div>
            </div>
        )
    }
}

export default Projects;