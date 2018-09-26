import React, {Component} from 'react';
import Calendar from 'react-calendar'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        if (value) {
            this.setState({
                [name]: value
            });

        }
    }

    submitForm = () => {
        this.setState(this.initialState);
        const {handleSubmit} = this.props;
        if (typeof handleSubmit === 'function') {
            console.log(this.props);
            handleSubmit(this.state);
        }
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}/>
                    <Calendar/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        );
    }
}

export default Form;