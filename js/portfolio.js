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
                        <article><div className={'image1 PortfolioImageOne'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                        <article><div className={'image2 PortfolioImageTwo'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante website</span><br/>Project of website design for Deante</p></div></div></article>
                        <article><div className={'image3 PortfolioImageThree'}><div className={'desc hiddenOne animateZoom'}><p><span>Deante catalogue</span><br/>Project of catalogue for Deante</p></div></div></article>
                        <article><div className={'image4 PortfolioImageFour'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante catalogue cover</span><br/>Project of cover for Deante catalogue</p></div></div></article>
                        <article><div className={'image5 PortfolioImageFive'}><div className={'desc hiddenOne animateZoom'}><p><span>Bathroom catalogue</span><br/>Project of bathroom catalogue for Deante</p></div></div></article>
                        <article><div className={'image6 PortfolioImageSix'}><div className={'desc hiddenOne animateZoom'}><p><span>Make Me BIO</span><br/>Project of Make Me BIO catalogue</p></div></div></article>
                        <article><div className={'image7 PortfolioImageSeven'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis Body Butter</span><br/>Project of body butter for Vis Plantis</p></div></div></article>
                        <article><div className={'image8 PortfolioImageEight'}><div className={'desc hiddenOne animateZoom'}><p><span>Make Me BIO Catalogue Cover</span><br/>Project of catalogue cover for Make Me BIO</p></div></div></article>
                        <article><div className={'image9 PortfolioImageNine'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                    </div>
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
                        <article><div className={'image1 PortfolioProdImageOne'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                        <article><div className={'image2 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante website</span><br/>Project of website design for Deante</p></div></div></article>
                        <article><div className={'image3 hidden'}><div className={'desc hiddenOne animateZoom animateZoom'}><p><span>Deante catalogue</span><br/>Project of catalogue for Deante</p></div></div></article>
                        <article><div className={'image4 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante catalogue cover</span><br/>Project of cover for Deante catalogue</p></div></div></article>
                        <article><div className={'image5 hidden'}><div className={'desc hiddenOne animateZoom animateZoom'}><p><span>Bathroom catalogue</span><br/>Project of bathroom catalogue for Deante</p></div></div></article>
                        <article><div className={'image6 hidden'}><div className={'desc hiddenOne animateZoom animateZoom'}><p><span>Make Me BIO</span><br/>Project of Make Me BIO catalogue</p></div></div></article>
                        <article><div className={'image7 PortfolioProdImageTwo'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis Body Butter</span><br/>Project of body butter for Vis Plantis</p></div></div></article>
                        <article><div className={'image8 hidden'}><div className={'desc hiddenOne animateZoom animateZoom'}><p><span>Make Me BIO Catalogue Cover</span><br/>Project of catalogue cover for Make Me BIO</p></div></div></article>
                        <article><div className={'image9 PortfolioProdImageThree'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                    </div>
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
                            <article><div className={'image1 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                            <article><div className={'image2 PortfolioWebImageOne'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante website</span><br/>Project of website design for Deante</p></div></div></article>
                            <article><div className={'image3 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Deante catalogue</span><br/>Project of catalogue for Deante</p></div></div></article>
                            <article><div className={'image4 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span><br/>Deante catalogue cover</span>Project of cover for Deante catalogue</p></div></div></article>
                            <article><div className={'image5 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Bathroom catalogue</span><br/>Project of bathroom catalogue for Deante</p></div></div></article>
                            <article><div className={'image6 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Make Me BIO</span><br/>Project of Make Me BIO catalogue</p></div></div></article>
                            <article><div className={'image7 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Vis Plantis Body Butter</span><br/>Project of body butter for Vis Plantis</p></div></div></article>
                            <article><div className={'image8 hidden'}><div className={'desc hiddenOne animateZoom'}><p><span>Make Me BIO Catalogue Cover</span><br/>Project of catalogue cover for Make Me BIO</p></div></div></article>
                            <article><div className={'image9 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span><br/>Vis Plantis packaging</span>Project of cream for Vis Plantis</p></div></div></article>
                        </div>
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
                        <article><div className={'image1 hidden'}><div className={'desc hiddenOne'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                        <article><div className={'image2 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante website</span><br/>Project of website design for Deante</p></div></div></article>
                        <article><div className={'image3 PortfolioPrintImageOne'}><div className={'desc desc hiddenOne animateZoom'}><p><span>Deante catalogue</span><br/>Project of catalogue for Deante</p></div></div></article>
                        <article><div className={'image4 PortfolioPrintImageTwo'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Deante catalogue cover</span><br/>Project of cover for Deante catalogue</p></div></div></article>
                        <article><div className={'image5 PortfolioPrintImageThree'}><div className={'desc desc hiddenOne animateZoom'}><p><span>Bathroom catalogue</span><br/>Project of bathroom catalogue for Deante</p></div></div></article>
                        <article><div className={'image6 PortfolioPrintImageFour'}><div className={'desc desc hiddenOne animateZoom'}><p><span>Make Me BIO</span><br/>Project of Make Me BIO catalogue</p></div></div></article>
                        <article><div className={'image7 hidden'}><div className={'desc desc hiddenOne'}><p><span>Vis Plantis Body Butter</span><br/>Project of body butter for Vis Plantis</p></div></div></article>
                        <article><div className={'image8 PortfolioPrintImageFive'}><div className={'desc desc hiddenOne animateZoom'}><p><span>Make Me BIO Catalogue Cover</span><br/>Project of catalogue cover for Make Me BIO</p></div></div></article>
                        <article><div className={'image9 hidden'}><div className={'desc hiddenOne animateZoom vertical'}><p><span>Vis Plantis packaging</span><br/>Project of cream for Vis Plantis</p></div></div></article>
                    </div>
                </>
            )
        }
    }
}

export default PortfolioPage;