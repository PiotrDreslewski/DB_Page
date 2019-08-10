import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";

class ContactPage extends Component{
    render(){
        return(
            <section className={'mainWidth contact'}>
                <div className={'contactTitle'}><h1>Masz pytanie? Chcesz podjąć współpracę?</h1></div>
                <div className={'contactTitleSecond'}><h2>Szybki kontakt, zostaw wiadomość...</h2></div>
                <form className={'contactForm'}>
                    <label>Name and Surname
                        <input type='text' name='name'/>
                    </label>
                    <label> E-mail
                        <input type='email' name='email'/>
                    </label>
                    <label>Message title
                        <input type='text' name='title'/>
                    </label>
                    <label> Message
                        <textarea name='message'/>
                    </label>
                </form>
            </section>
        )
    }
}

export default ContactPage;