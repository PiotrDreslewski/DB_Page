import React, { Component } from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {id: 'all'};
        this.choosen = this.choosen.bind(this);
    }

    choosen(e) {
        this.setState({id: e.currentTarget.id});
        console.log(e.currentTarget.id)
    }

    render() {

        if (this.state.id === 'all') {
            return (
                <>
                    <div className={'mainWidth portfolioNav'}>
                        <ul className={'portfolioMenu'}>
                            <li id={'all'} className={'checked'} onClick={this.choosen}>Show all</li>
                            <li id={'prod'} onClick={this.choosen}>Product Design</li>
                            <li id={'web'} onClick={this.choosen}>Web Design</li>
                            <li id={'print'} onClick={this.choosen}>Print Design</li>
                        </ul>
                    </div>
                    <div className={'mainWidth gallery heightAll'}>
                        <article><div className={'image1 PortfolioImageOne'}></div></article>
                        <article><div className={'image2 PortfolioImageTwo'}></div></article>
                        <article><div className={'image3 PortfolioImageThree'}></div></article>
                        <article><div className={'image4 PortfolioImageFour'}></div></article>
                        <article><div className={'image5 PortfolioImageFive'}></div></article>
                        <article><div className={'image6 PortfolioImageSix'}></div></article>
                        <article><div className={'image7 PortfolioImageSeven'}></div></article>
                        <article><div className={'image8 PortfolioImageEight'}></div></article>
                        <article><div className={'image9 PortfolioImageNine'}></div></article>
                    </div>
                    <footer className={"mainWidth"}>
                        <div className={"footerWidth"}><span className={"footerText"}>© Copyright 2019 | Minika Studio | Wszelkie prawa zastrzeżone</span>
                        </div>
                    </footer>
                </>
            )
        } else if (this.state.id === 'prod') {
            return(
                <>
                    <div className={'mainWidth portfolioNav'}>
                        <ul className={'portfolioMenu'}>
                            <li id={'all'} onClick={this.choosen}>Show all</li>
                            <li id={'prod'} className={'checked'} onClick={this.choosen}>Product Design</li>
                            <li id={'web'} onClick={this.choosen}>Web Design</li>
                            <li id={'print'} onClick={this.choosen}>Print Design</li>
                        </ul>
                    </div>
                    <div className={'mainWidth gallery heightProd'}>
                        <article><div className={'image1 PortfolioProdImageOne'}></div></article>
                        <article><div className={'image2 hidden'}></div></article>
                        <article><div className={'image3 hidden'}></div></article>
                        <article><div className={'image4 hidden'}></div></article>
                        <article><div className={'image5 hidden'}></div></article>
                        <article><div className={'image6 hidden'}></div></article>
                        <article><div className={'image7 PortfolioProdImageTwo'}></div></article>
                        <article><div className={'image8 hidden'}></div></article>
                        <article><div className={'image9 PortfolioProdImageThree'}></div></article>
                    </div>
                    <footer className={"mainWidth"}>
                        <div className={"footerWidth"}><span className={"footerText"}>© Copyright 2019 | Minika Studio | Wszelkie prawa zastrzeżone</span>
                        </div>
                    </footer>
                </>
            )
        } else if (this.state.id === 'web') {
            return(
                <>
                    <div className={'mainWidth portfolioNav'}>
                        <ul className={'portfolioMenu'}>
                            <li id={'all'} onClick={this.choosen}>Show all</li>
                            <li id={'prod'} onClick={this.choosen}>Product Design</li>
                            <li id={'web'} className={'checked'} onClick={this.choosen}>Web Design</li>
                            <li id={'print'} onClick={this.choosen}>Print Design</li>
                        </ul>
                    </div>
                        <div className={'mainWidth gallery heightWeb'}>
                            <article><div className={'image1 hidden'}></div></article>
                            <article><div className={'image2 PortfolioWebImageOne'}></div></article>
                            <article><div className={'image3 hidden'}></div></article>
                            <article><div className={'image4 hidden'}></div></article>
                            <article><div className={'image5 hidden'}></div></article>
                            <article><div className={'image6 hidden'}></div></article>
                            <article><div className={'image7 hidden'}></div></article>
                            <article><div className={'image8 hidden'}></div></article>
                            <article><div className={'image9 hidden'}></div></article>
                        </div>
                    <footer className={"mainWidth"}>
                        <div className={"footerWidth"}><span className={"footerText"}>© Copyright 2019 | Minika Studio | Wszelkie prawa zastrzeżone</span>
                        </div>
                    </footer>
                </>
            )
        } else if (this.state.id === 'print') {
            return(
                <>
                    <div className={'mainWidth portfolioNav'}>
                        <ul className={'portfolioMenu'}>
                            <li id={'all'} onClick={this.choosen}>Show all</li>
                            <li id={'prod'} onClick={this.choosen}>Product Design</li>
                            <li id={'web'} onClick={this.choosen}>Web Design</li>
                            <li id={'print'} className={'checked'} onClick={this.choosen}>Print Design</li>
                        </ul>
                    </div>
                    <div className={'mainWidth gallery heightPrint'}>
                        <article><div className={'image1 hidden'}></div></article>
                        <article><div className={'image2 hidden'}></div></article>
                        <article><div className={'image3 PortfolioPrintImageOne'}></div></article>
                        <article><div className={'image4 PortfolioPrintImageTwo'}></div></article>
                        <article><div className={'image5 PortfolioPrintImageThree'}></div></article>
                        <article><div className={'image6 PortfolioPrintImageFour'}></div></article>
                        <article><div className={'image7 hidden'}></div></article>
                        <article><div className={'image8 PortfolioPrintImageFive'}></div></article>
                        <article><div className={'image9 hidden'}></div></article>
                    </div>
                    <footer className={"mainWidth"}>
                        <div className={"footerWidth"}><span className={"footerText"}>© Copyright 2019 | Minika Studio | Wszelkie prawa zastrzeżone</span>
                        </div>
                    </footer>
                </>
            )
        }
    }
}

export default PortfolioPage;