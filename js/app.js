import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./home.js"
import AboutMePage from "./about.js"
import PortfolioPage from "./portfolio.js"
import HowIWorkPage from "./work.js"
import ContactPage from "./contact.js"
import {HashRouter, Link, Switch, Route, NavLink} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <>
                <nav className={'mainWidth'}>
                    <div>
                        <Link to="/home" className={"menuLink"}><img src={"./img/logo.png"}/></Link>
                    </div>
                    <div>
                        <ul className={'menu'}>
                            <li><NavLink to="/home" className={"menuLink"} activeClassName={'active'}>Home</NavLink>
                            </li>
                            <li><NavLink to="/how_i_work" className={"menuLink"} activeClassName={'active'}>Jak Pracuję</NavLink>
                            </li>
                            <li><NavLink to="/portfolio" className={"menuLink"} activeClassName={'active'}>Portfolio</NavLink>
                            </li>
                            <li><NavLink to="/about_me" className={"menuLink"} activeClassName={'active'}>O mnie</NavLink>
                            </li>
                            <li><NavLink to="/contact" className={"menuLink"} activeClassName={'active'}>Kontakt</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/how_i_work' component={HowIWorkPage} />
                    <Route path='/portfolio' component={PortfolioPage} />
                    <Route path='/about_me' component={AboutMePage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
                <footer className={"mainWidth"}>
                    <div className={"footerWidth"}><span className={"footerText"}>© Copyright 2019 | Minika Studio | Wszelkie prawa zastrzeżone</span>
                    </div>
                </footer>
                </>
        </HashRouter>


    );
}

//"homepage": "https://github.com/CodersLab-core/FE_REACT_React#readme",

ReactDOM.render(<App />, document.getElementById("app"));
