import React, { Component } from 'react';
import coronaHelpdesk from '../resources/images/coronaHelpdesk.jfif';

export default class HelpdeskComponent extends Component{
    
    render(){
        return(
            <div id="content">
                <img src={coronaHelpdesk} alt="Corona HelpDesk" />
            </div>                
        );
    }
}