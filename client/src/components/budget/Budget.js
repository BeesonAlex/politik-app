import React, { Component } from 'react';
import NavBarContent from '../nav-bar/NavBarContent';
import BubbleChart from '../bubble-chart/BubbleChart';

export class Budget extends Component {


    render() {
        return (
            <>
                <NavBarContent />
                <div className="budget-wrapper">
                    <div className="party__party-details-wrapper">
                        <div className="party__portrait-title-wrapper">
                            <h1 className="party__party-details--title">Party Budget</h1>
                            <p className="budget__title-subheading">hi</p>
                        </div>
                        <div className="bubble-chart-wrapper">
                            <BubbleChart
                                // data={data}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Budget
