import React, { Component } from 'react'
import axios from 'axios';
import NextCountryItem from './NextCountryItem';
import './CountrySelect.scss';

export class CountrySelect extends Component {

    state = {
        countryList: [],

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/data/countries`)
            .then(response => {
                this.setState({
                    countryList: response.data
                })
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state.countryList)
        return (
            <div className="country-select-wrapper">
                <div className="country-select__card">
                    <h1 className="country-select__title">Select Country</h1>
                    {this.state.countryList.map(country => {
                        return <NextCountryItem key={country.id} flag={country.flag} name={country.name} partySystem={country.partySystem} subRegions={country.subRegions} />
                    })}
                
                </div>
            </div>
        )
    }
}

export default CountrySelect
