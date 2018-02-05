import React, {Component} from 'react';

export default class SearchBar extends Component {
    
    // create states for the control component
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        //Lets get weather data!!
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                {/* update state by using a change handler on the input */}
                <input 
                    placeholder="get a five day forcast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        );
    }
}