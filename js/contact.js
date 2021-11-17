import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";


class ContactPage extends Component{
    render(){
        return(
            <section className={'mainWidth contact'}>
            <div className={'contactTitleContainer'}>
                <div className={'contactTitle'}>
                  <h1>Masz pytanie?</h1>
                  <div>
                    <p>Chcesz się o coś zapytać? A może</p>
                    <p>chcesz porozmawiać o swoim NOWYM</p>
                    <p>projekcie? Zapraszam do kontaktu!</p>
                  </div>
                </div>
            </div>
                <div className={'contactFormHolder'}>
                  <div className={'contactFormContainer'}>
                    <form className={'contactForm'}>

                      <div className={'NameContainer'}>
                            <input type='text' name='name' placeholder='Imie i Nazwisko' className={'name'}/>
                            <input type='email' name='email' placeholder='Email' className={'email'}/>
                      </div>
                            <input type='text' name='title' placeholder='Tytuł wiadomości' className={'title'}/>
                            <textarea name='message' placeholder='Treść wiadomości' className={'message'}/>
                            <input id='confirm' type='submit' value='Wyślij'/>
                    </form>
                  </div>
                </div>
            </section>
        )
    }
};

export default ContactPage;
