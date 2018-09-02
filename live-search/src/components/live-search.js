import React, { Component } from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

class LiveSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange(value) {
        this.setState({
            input: value
        });
    }
    render() {
        // console.log(this.state);
        // console.log(this.props.characters);
        let filterChar = this.props.characters.filter((char) => {
            if (char.name.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
                console.log('found it');
                return char;
            }
        });
        console.log(filterChar);
        return (
            <div className="live-search">
                <SearchForm onChange={(e) => this.handleChange(e)}/>
                <CharacterCount count={filterChar.length} />
                <CharacterList characters={filterChar} />
            </div>
        );
    }
}

export default LiveSearch;
