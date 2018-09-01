import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayRate: 300,
            hourlyRate: 8
        }
    }

    handleDayRate(value) {
        this.setState({
            dayRate: value
        });
    }

    handleHourlyRate(value) {
        this.setState({
            hourlyRate: value
        });
    }

    render() {
        let rate = this.state.dayRate / this.state.hourlyRate;
        console.log(rate);
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} 
                value={this.state.dayRate}
                onChange={(e) => this.handleDayRate(e)}/>
                <NumberInput id="hours" label="Hours" min={1} max={12} 
                value={this.state.hourlyRate}
                onChange={(e) => this.handleHourlyRate(e)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

