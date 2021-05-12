import React, { Component } from 'react';
import OverviewComponent from './OverviewComponent';
import PreventionComponent from './PreventionComponent';
import NewsArticlesComponent from './NewsArticlesComponent';
import StatsComponent from './StatsComponent';
import HelpdeskComponent from './HelpdeskComponent';
import '../sidebar.css';

export default class SideNavBarComponent extends Component{

    constructor(){
        super();
        this.state = {
            activeTab : 0
        }
    }

    renderContents = () => {
        let activeTab = this.state.activeTab;
        if (activeTab === 0) {            
            return (
                <OverviewComponent />
            );
        }
        else if(activeTab === 1){
            return (
                <PreventionComponent />
            );
        }
        else if(activeTab === 2){
            return (
                <NewsArticlesComponent />
            );
        }
        else if(activeTab === 3){
            return (
                <StatsComponent />
            );
        }
        else if(activeTab === 4){
            return (
                <HelpdeskComponent />
            );
        }        
    }

    changeActiveTab = event => {
        let cityName = event.target.value;
        let activeTab = this.state.activeTab;

        switch(cityName){
            case "Overview": 
                activeTab = 0;
                break;
            case "Prevention": 
                activeTab = 1;
                break;
            case "NewsArticles":
                activeTab = 2;
                break;
            case "Statistics":
                activeTab = 3;
                break;
            case "Helpdesk":
                activeTab = 4;
                break;
        }

        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        event.currentTarget.className += " active";
        this.setState({activeTab: activeTab});
    }

    render(){
        return(
            <div className="informationComponent">
                <div className="wrapper">                    
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h5>COVID-19 ALERT !</h5>
                        </div>

                        <ul className="list-unstyled components">
                            <li>
                                <button value="Overview" className="tablinks active" onClick={this.changeActiveTab}>Overview</button>
                            </li>
                            <li>
                                <button value="Prevention" class="tablinks" onClick={this.changeActiveTab}>Prevention</button>
                            </li>
                            <li>
                                <button value="NewsArticles" class="tablinks" onClick={this.changeActiveTab}>News / Articles</button>
                            </li>                            
                            <li>
                                <button value="Statistics" class="tablinks" onClick={this.changeActiveTab}>Statistics</button>
                            </li>
                            <li>
                                <button value="Helpdesk" class="tablinks" onClick={this.changeActiveTab}>Helpdesk</button>
                            </li>
                        </ul>
                    </nav>

                    { this.renderContents() }

                </div>   
            </div>
        );
    }
}