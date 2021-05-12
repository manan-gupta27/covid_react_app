import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';

export default class StatsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            stats : [],
            isLoadingGrid: true,
            loaderText : "LOADING DATA...PLEASE WAIT"
        };
    }

    componentDidMount = () =>{  
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // request successful 
                    let response = xhr.responseText;
                    let json = JSON.parse(response).data.covid19Stats;
 
                    this.setState({
                        stats: json,
                        isLoadingGrid: false
                    });        
                }
            }
        });

        xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");
        xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "996df31660msha14ea0c67308aa6p141c82jsnf2908d82f244");
        xhr.send(data);
    }

    render(){        
        return(
            <LoadingOverlay
                active={this.state.isLoadingGrid}
                spinner
                text={this.state.loaderText} 
            >
                <div id="content">  
                    <div className="tableStats">
                        <table className="table table-hover table-dark">
                        <thead>
                            <th>City</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Confirmed cases</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </thead>
                        <tbody>
                            {
                                this.state.stats.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.city}</td>  
                                        <td>{item.province}</td>
                                        <td>{item.country}</td>
                                        <td>{item.confirmed}</td>
                                        <td>{item.deaths}</td>
                                        <td>{item.recovered}</td>   
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                    </div>
                </div> 
            </LoadingOverlay>               
        );
    }
}