import React, { Component } from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import SideNavBarComponent from './SideNavBarComponent';

export default class ParentComponent extends Component{
    render(){
        return(
            <div className="parent">
                <Header />
                    <SideNavBarComponent />
                <Footer />
            </div>
        );
    }
}