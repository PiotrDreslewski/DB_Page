import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";

class AboutMePage extends Component{
    render(){
        return(
            <section className={'about mainWidth'}>
                <div className={'aboutImage'}>
                    <h1 className={'aboutTitle aboutZoom'}>About<br/> Me.</h1>
                    <p className={'aboutTextONe aboutZoom1'}>Find out a little more about me</p>
                </div>

                <div className={'aboutMe'}>
                    <h2 className={'aboutName'}>Dominika Baran</h2>
                    <p className={'aboutInfo'}>Through many years of hard work and dedication, I’ve achived alot of experience in this industry. Each role has been a dynamic endeavour, providing me with an opportunity to develop both personally and professionally. I’m always looking for new projects and partners to collaborate with, so get in touch if you’d like to connect.</p>
                </div>
                <div className={'aboutEdu'}>
                    <div className={'aboutEduMain'}>
                        <div className={'aboutEduIconTitle'}>
                            <div className={'aboutIcon'}></div>
                            <h2 className={'aboutEduTitle'}>Education</h2>
                        </div>
                        <div className={'aboutEduSchool'}>
                            <div className={'aboutEduSchoolTitle'}>
                                <p>Master Degree</p>
                                <p>Graphic Design studies</p>
                            </div>
                            <div className={'aboutEduSchoolName'}>
                                <p>at WIT Wyższa Szkoła Informatyki Stosowanej i Zarządzania pod auspicjami Polskiej Akademii Nauk</p>
                                <p>WIT Wyższa Szkoła Informatyki Stosowanej i Zarządzania pod auspicjami Polskiej Akademii Nauk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMePage;
