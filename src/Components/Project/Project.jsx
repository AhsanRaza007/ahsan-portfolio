import React from 'react';
import "./Project.css";
// import projectImg from './projects.svg'
import AbsoluteComponent from '../AbsoluteComponent/AbsoluteComponent';
import { projects } from "../Data";

const Card = (props) => {
    return (
        <div className="card p-0 mx-0 my-3">
            <img src={props.imgSrc} alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="tech-stack">
                    <p className="m-0"><strong>Tech Stack</strong></p>
                    {
                        props.techStack.map((icon, key) => {
                            return <i className={icon} key={key}></i>
                        })
                    }
                </div>
            </div>

            <div className="card-footer d-flex justify-content-evenly">
                {props.github ? <a href={props.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm card-link"><i className="si si-github"></i><small>source</small></a> : null}
                {props.live ? <a href={props.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm card-link"><i className="fas fa-link"></i><small>Live Demo</small></a> : null}
            </div>

        </div>
    )
}


const Project = () => {
    return (
        <AbsoluteComponent>
            <div className="project container my-4 text-center">
                <div className="hero-text">
                    <h1 className="display-6">{projects.summary}</h1>
                </div>

                <div className="projects-container">
                    <div className="d-flex m-0 flex-wrap justify-content-evenly">
                        {
                            projects.projectsList.map((project, key) => {
                                return <Card
                                    imgSrc={project.imageurl}
                                    title={project.title}
                                    github={project.githubLink}
                                    live={project.liveLink}
                                    techStack={project.techStack}
                                    description={project.description}
                                    key={key} />
                            })
                        }
                    </div>
                </div>

            </div>
        </AbsoluteComponent>
    );
};

export default Project;