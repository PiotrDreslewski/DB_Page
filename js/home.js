import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
        this.slides = this.slides.bind(this);
    }
    slides(e){
        if (this.state.value < 3 && e.currentTarget.className === 'sliderRight' ) {
            this.setState({value: this.state.value+1});
        } else if(this.state.value >= 3 && e.currentTarget.className === 'sliderRight' ) {
            this.setState({value: 1});
        } else if(this.state.value <= 1 && e.currentTarget.className === 'sliderLeft' ){
            this.setState({value: 3});
        }else if(this.state.value > 1 && e.currentTarget.className === 'sliderLeft' ){
            this.setState({value: this.state.value-1});
        }
    }
    render (){
        if(this.state.value === 1) {
            return (
                <HashRouter>
                    <>
                        <section className={'mainWidth site'}>
                            <div>
                                <div className={'container'}>
                                    <span className={'title zoom'}>Website & Digital projects</span><br/>
                                    <h1 className={'mainTitle bottom'}>Web design</h1>
                                </div>
                                <div>
                                    <p className={'contact'}>Zapraszam do kontaktu:</p><br/>
                                    <div className={'mailArrow'}>
                                        <a href={'mailto:info@minikastudio.com'} className={'mail'}>
                                            <div className={'arrow'}>
                                                <i className={"arrowLine"}></i>
                                                <i className={"arrowRight"}></i>
                                            </div>
                                            <p>info@minikastudio.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'imgContainer'}>
                                <img className={'imgMain imageLeft'} src={"./img/krem_visplantis.png"}/>
                                <img className={'imgSecond imageRight'} src={"./img/leafs.png"}/>
                                <div className={"sliderNav"}>
                                    <div className={"sliderLeft"} onClick={this.slides}></div>
                                    <div className={"sliderRight"} onClick={this.slides}></div>
                                </div>
                            </div>
                        </section>
                    </>
                </HashRouter>
            )
        }else if(this.state.value === 2) {
            return (
                <HashRouter>
                    <>
                        <section className={'mainWidth site'}>
                            <div>
                                <div className={'container'}>
                                    <span className={'title zoom1'}>Packaging and products projects</span><br/>
                                    <h1 className={'mainTitle bottom1'}>Product Design</h1>
                                </div>
                                <div>
                                    <p className={'contact'}>Zapraszam do kontaktu:</p><br/>
                                    <div className={'mailArrow'}>
                                        <a href={'mailto:info@minikastudio.com'} className={'mail'}>
                                            <div className={'arrow'}>
                                                <i className={"arrowLine"}></i>
                                                <i className={"arrowRight"}></i>
                                            </div>
                                            <p>info@minikastudio.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'imgContainer'}>
                                <img className={'imgMain imageLeft1'} src={"./img/krem_visplantis1.png"}/>
                                <img className={'imgSecond imageRight1'} src={"./img/leafs.png"}/>
                                <div className={"sliderNav"}>
                                    <div className={"sliderLeft"} onClick={this.slides}></div>
                                    <div className={"sliderRight"} onClick={this.slides}></div>
                                </div>
                            </div>
                        </section>
                    </>
                </HashRouter>
            )
        }else if(this.state.value === 3) {
            return (
                <HashRouter>
                    <>
                        <section className={'mainWidth site'}>
                            <div>
                                <div className={'container'}>
                                    <span className={'title zoom2'}>Print and awesome projects</span><br/>
                                    <h1 className={'mainTitle bottom2'}>Print Design</h1>
                                </div>
                                <div>
                                    <p className={'contact'}>Zapraszam do kontaktu:</p><br/>
                                    <div className={'mailArrow'}>
                                        <a href={'mailto:info@minikastudio.com'} className={'mail'}>
                                            <div className={'arrow'}>
                                                <i className={"arrowLine"}></i>
                                                <i className={"arrowRight"}></i>
                                            </div>
                                            <p>info@minikastudio.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'imgContainer'}>
                                <img className={'imgMain imageLeft2'} src={"./img/krem_visplantis2.png"}/>
                                <img className={'imgSecond imageRight2'} src={"./img/leafs.png"}/>
                                <div className={"sliderNav"}>
                                    <div className={"sliderLeft"} onClick={this.slides}></div>
                                    <div className={"sliderRight"} onClick={this.slides}></div>
                                </div>
                            </div>
                        </section>
                    </>
                </HashRouter>
            )
        }
    }


}

// Exporting component HomePage
export default HomePage;