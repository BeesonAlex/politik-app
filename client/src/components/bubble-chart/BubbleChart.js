import React, { Component } from 'react'

import "./BubbleChart.scss";
import "../../../node_modules/react-bubble-chart/src/style.css";

import ZoomableBubbleChart from "./ZoomableBubbleChart.jsx";
  
  export class BubbleChart extends Component {
      render() {
          return (
            <div className="App">
            <ZoomableBubbleChart data={this.props.data} />
          </div>
          )
      }
  }
  
  export default BubbleChart
  
  