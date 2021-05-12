import React from 'react';
import coronavirusbanner from '../resources/images/coronavirus.jpg';

export const Header = (props) => (
    <div className="jumbotron clearfix">
        <h2>Corona Rescue Buddy</h2>
        <img src={coronavirusbanner} />
    </div>        
);