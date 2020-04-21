import React from "react";
import projectConfig from "../../../config/projects.json";
import { FormattedMessage } from "react-intl";
import { Row } from "antd";
import ProjectCard from "../components/projectCard.jsx";
import han from "../../../util/han.simple";

function ProjectList() {
    const projects = [];
    const userLang = navigator.language || "";
    const language = userLang.toLowerCase().substr(0, 2);
    const projectRow = [];
        for (let i = 0; i < projectConfig.length; i++) {
            let project = projectConfig[i];
            if (language === "zh") {
                project.desc[language] = han(project.desc[language]);
            }
            projectRow.push(<ProjectCard index={i} logo={project.logo} name={project.name} desc={project.desc[language]} link={project.link} />);
        }
        projects.push(<Row gutter={[32, 32]}>{projectRow}</Row>);
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
                    <div className="project-body-list">{ProjectList()}</div>
                </div>
            </div>
        );
    }
}

export default Projects;
