import React from 'react';
import './About.css'
import proggImg from './prog.svg'
import { about } from "../Data";
import { Chrono } from "react-chrono";
import AbsoluteComponent from '../AbsoluteComponent/AbsoluteComponent';
const About = () => {

    const items = about.educationItems;
    return (
        <AbsoluteComponent>
            <div className="about container row mx-auto align-items-center">
                <div className="hero-text col-md-6">
                    <h1 className="display-4">Hi! I am {about.firstname}!👋</h1>
                    <p className="hero-text-detail lead">
                        {about.summary}
                    </p>
                    <div className="buttons">
                        <a href={about.resumeLink} rel="noreferrer" target="_blank" className="btn">See My Resume</a>
                        <a href={`mailto:${about.email}`} className="btn">Contact Me</a>
                    </div>
                </div>
                <div className="progImg col-md-6">
                    <img src={proggImg} className="img-fluid" alt="proggramming" />
                </div>
                <div className="education-timeline my-5 text-center">
                    <div className="hero-text">
                        <h1 className="display-4">Education</h1>
                        <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable hideControls theme={{ primary: "#9a4adb", secondary: "#E6E0F8", cardBgColor: "#fff", cardForeColor: "#000" }} />
                    </div>
                </div>
            </div>
        </AbsoluteComponent>

    );
};

export default About;