import React from 'react';
import webdevImg from './webdev.svg'
import "./Skills.css";
import {skills} from '../Data';
import AbsoluteComponent from '../AbsoluteComponent/AbsoluteComponent';

const Icon = (props) => {

    return (
        <span className="icon-div">
            <i className={props.icon}></i>
            <p className="icon-text">{props.name}</p>
        </span>
    )
}


const Skills = () => {

    return (
        <AbsoluteComponent>
        <div className="skills container row mx-auto my-5 align-items-center justify-content-center">
            <div className="progImg col-md-5">
                <img src={webdevImg} className="img-fluid" alt="proggramming"/>
            </div>
            <div className="hero-text col-md-7">
                <h1 className="display-6">Skills I have honed Overtime!</h1>
                <div className="icons my-2">
                    {
                        skills.skillIcons.map(({icon, name}, key)=>{
                            return <Icon name={name} icon={icon} key={key}></Icon>
                        })
                    }
                </div>
            </div>
            <div className="description-text">
                <h1 className="display-6 hero-text">What I do?</h1>
                <div className="whatIDoText">
                    {
                        skills.whatIDoText.map((text, key)=>{
                            return <p key={key}>{text}</p>
                        })
                    }
                </div>
            </div>
        </div>
        </AbsoluteComponent>
    );
};

export default Skills;