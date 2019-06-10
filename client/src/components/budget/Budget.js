import React, { Component } from 'react';
import axios from 'axios';
import NavBarContent from '../nav-bar/NavBarContent';
import BubbleChart from '../bubble-chart/BubbleChart';
import './Budget.scss'

export class Budget extends Component {

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
                infrastructureTransportation: [],
            },
            budget: [],
        },
        budgetValues: [],
    }


    componentDidMount() {

        axios.get(`http://localhost:8080/data/${window.location.pathname}`)
            .then(response => {
                this.setState({
                    partyDetails: response.data,
                })
                this.setState({
                    budgetValues: this.state.partyDetails.budget.map(item => {
                    return item["v"];
                })
            })
        })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        console.log(this.state.partyDetails.budget)
        return (
            <>
                <NavBarContent />
                <div className="budget-wrapper">
                    <div className="budget__budget-details-wrapper">
                        <h1 className="party__party-details--title">Party Budget</h1>
                        <p className="budget__title-subheading">hi</p>
                        <div className="bubble-chart-wrapper">
                            <BubbleChart data={this.state.partyDetails.budget} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Budget
