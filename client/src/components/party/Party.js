import React, { Component } from 'react';
import NavBarContent from '../nav-bar/NavBarContent';
import Dropdown from '../buttons/DropDown';
import Button from '../buttons/Button';
import axios from 'axios';

export class Party extends Component {

    state = {
        partyDetails: {
            platform: {
                socialIssues: [],
                immigration: [],
                domesticPolicy: [],
                healthcare: [],
                environment: [],
                economy: [],
                electoralIssues: [],
                education: [],
                foreignPolicy: [],
                science: [],
                crime: [],
                nationalSecurity: [],
            },
        },
    }


    componentDidMount() {

        
        axios.get(`http://localhost:8080/data/${window.location.pathname}`)
        .then(response => {
            this.setState({
                partyDetails: response.data,
            })
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    
    render() {
        const { countryDetails } = this.props.location.properties;
        console.log(this.props.location.properties)
        console.log(this.state.partyDetails)
        return (
            <>
            <NavBarContent />
            <div className="party-wrapper">
                <div className="party__hero-section" style={{backgroundColor:this.state.partyDetails.primaryColour}}>
                    <div className="party__jurisdictiondropdown-wrapper">
                        <p className="party__jurisdiction">{countryDetails.jurisdiction}</p>
                        <Dropdown content="Parties" array={countryDetails.parties} />
                    </div>
                    <div className="party__hero-section__logo-frame">
                        <img className="party__hero-section__logo" src={this.state.partyDetails.smLogo} alt="party-logo" />
                    </div>
                </div>
                
            <div className="party__top-info-wrapper">
            <h1 className="party__name">{countryDetails.jurisdiction}</h1>
            <Button content="Budget" />
            </div>

            </div>
            </>
        )
    }
}

export default Party
