import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./home.js"
import AboutMePage from "./about.js"
import PortfolioPage from "./portfolio.js"
import HowIWorkPage from "./work.js"
import ContactPage from "./contact.js"
import {HashRouter, Link, Switch, Route} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <>
                <nav className={'mainWidth'}>
                    <div>
                        <Link to="/" className={"menuLink"}><img src={"./img/logo.png"}/></Link>
                    </div>
                    <div>
                        <ul className={'menu'}>
                            <li><Link to="/" className={"menuLink active"} >Home</Link></li>
                            <li><Link to="/how_i_work" className={"menuLink"} >Jak
                                Pracuję</Link></li>
                            <li><Link to="/portfolio" className={"menuLink"} >Portfolio</Link>
                            </li>
                            <li><Link to="/about_me" className={"menuLink"} >O mnie</Link>
                            </li>
                            <li><Link to="/contact" className={"menuLink"} >Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/how_i_work' component={HowIWorkPage} />
                    <Route path='/portfolio' component={PortfolioPage} />
                    <Route path='/about_me' component={AboutMePage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
                </>
        </HashRouter>


    );
}

ReactDOM.render(<App />, document.getElementById("app"));