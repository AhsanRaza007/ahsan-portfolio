import React from 'react';
import { work } from "../Data";
import { Chrono } from 'react-chrono'
import AbsoluteComponent from '../AbsoluteComponent/AbsoluteComponent';
const Work = () => {

    const items = work.items;
    return (
        <AbsoluteComponent>
        <div className="work">
            <Chrono items={items} mode="VERTICAL" hideControls theme={{primary: "#9a4adb", secondary: "#E6E0F8", cardBgColor: "#fff", cardForeColor: "#000" }}/>
        </div>
        </AbsoluteComponent>
    );
};

export default Work;