import React, {Component} from 'react';
import {Button, Checkbox, Radio, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
//import {Redirect} from 'react-router-dom'
import LeaveCalendar from './Calendar'

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
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
        return false;
    }

    render() {
        return (
            <div className="container">
                <form>

                    <FormGroup controlId="checkbox">
                        <Checkbox inline defaultChecked>Checkbox 1</Checkbox>
                        <Checkbox inline>Checkbox 2</Checkbox>
                        <Checkbox inline>Checkbox 3</Checkbox>
                    </FormGroup>

                    <FormGroup controlId="radio">
                        <Radio name="radioGroup" inline>
                            RadioGroup 1
                        </Radio>{' '}
                        <Radio name="radioGroup" inline>
                            RadioGroup 2
                        </Radio>{' '}
                        <Radio name="radioGroup" inline>
                            RadioGroup 3
                        </Radio>
                    </FormGroup>

                    <FormGroup controlId="select">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">-- select --</option>
                            <option value="other">Reason 1</option>
                            <option value="other">Reason 2</option>
                            <option value="other">Reason 3</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="textarea">
                        <ControlLabel>Describe</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="reason for on-leave"/>
                    </FormGroup>

                    <FormGroup controlId="text" bsSize="large">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="name"
                            onChange={this.handleChange}
                        ></FormControl>
                    </FormGroup>

                    <FormGroup controlId="from_date">
                        <ControlLabel>From</ControlLabel>
                        <LeaveCalendar/>
                    </FormGroup>

                    <FormGroup controlId="to_date">
                        <ControlLabel>To</ControlLabel>
                        <LeaveCalendar/>
                    </FormGroup>

                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        type="submit"
                        onClick={this.submitForm}>
                        Submit
                    </Button>

                </form>
            </div>
        );
    }
}

export default RequestForm;