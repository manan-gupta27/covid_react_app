import React, { Component } from 'react';
import symptomscough from '../resources/images/symptoms-cough.png';
import symptomsfever from '../resources/images/symptoms-fever.png';
import symptomsShortnessOfBreath from '../resources/images/symptoms-shortnessOfBreath.png';
import alertIcon from '../resources/images/alerticon.JPG';

export default class OverviewComponent extends Component{

    render(){
        return(
            <div id="content">
                <div>
                    <h3>Coronavirus Disease (COVID-19) Pandemic</h3>                        
                    <p>A coronavirus disease (COVID), coronavirus respiratory syndrome, coronavirus pneumonia, coronavirus flu, or any other variant, is a disease caused by members of the coronavirus (CoV) family. It may refer to:</p>
                    <ul>
                        <li>Severe acute respiratory syndrome (SARS) – a disease caused by SARS-CoV, first occurred in a 2002–2004 outbreak</li>
                        <li>Middle East respiratory syndrome (MERS) – a disease caused by MERS-CoV, first occurred in a 2012–2014 outbreak, and since then, recurring</li>
                        <li>Coronavirus disease 2019 (COVID-19) – a disease caused by SARS-CoV-2, first occurred in a 2019 outbreak; currently considered an active pandemic</li>
                    </ul>
                </div>  

                <div className="line"></div>
                <div className="symptoms">
                    <h3>Symptoms of Coronavirus</h3>
                    <div className="alertNotification">
                        <img src={alertIcon} />
                    </div>
                    <p>Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.</p>
                    <p>These symptoms may appear <strong>2-14 days after exposure</strong> (based on the incubation period of MERS-CoV viruses).</p>
                    <ul>
                        <li>Fever</li>
                        <li>Cough</li>
                        <li>Shortness of breath</li>
                    </ul>
                    <div className="symptomsImagesContainer clearfix">                               
                        <img src={symptomscough} />
                        <img src={symptomsfever} />
                        <img src={symptomsShortnessOfBreath} />
                    </div>
                    <div className="card">
                        <div className="cardHeader">
                            <h4>When to Seek Medical Attention</h4>
                        </div>
                        <div className="cardBody">
                            <p>If you develop <strong>emergency warning signs</strong> for COVID-19 get <strong>medical attention immediately</strong>. Emergency warning signs include*:</p>
                            <ul>
                                <li>Trouble breathing</li>
                                <li>Persistent pain or pressure in the chest</li>
                                <li>New confusion or inability to arouse</li>
                                <li>Bluish lips or face</li>
                            </ul>
                            <p>*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.</p>
                        </div>
                    </div>
                </div>
            
                <div className="line"></div>
                <div className="spread">
                    <div className="card">
                        <div className="cardHeader">
                            <h4>How it spreads ??</h4>
                        </div>
                        <div className="cardBody">
                            <p>The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water.</p>          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}