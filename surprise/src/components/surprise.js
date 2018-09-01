import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'button'
        }
    }

    handleClick() {
        this.setState({
            display: 'image'
        });
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        // Show the button to start with
        if (this.state.display === 'button') {
            return(
                <SurpriseButton onClick={(e) => this.handleClick()}/>
            );    
        }
        else if (this.state.display === 'image') {
            return(
                <SurpriseImage />
            );
        }
    }
}
