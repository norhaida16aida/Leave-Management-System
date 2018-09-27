import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap'
import RequestModal from './RequestModal'

const TableHeader = ({isAdmin}) => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Description</th>
            <th>Status</th>
            {isAdmin && <th>Process</th>}
        </tr>
        </thead>
    );
}

const TableBody = (props) => {

    const {rs, rr, handleShow, isAdmin} = props;
    const rows = rs.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.fDate}</td>
                <td>{row.tDate}</td>
                <td>{row.reason}</td>
                <td>{row.status}</td>
                {isAdmin && (
                    <td>
                        <Button
                            bsStyle="danger"
                            onClick={() => rr(index)}>
                            Delete
                        </Button>
                        <Button
                            bsStyle="warning"
                            onClick={handleShow}>
                            Launch
                        </Button>
                    </td>
                )}
            </tr>
        );
    });

    return (
        <tbody>
        {rows}
        </tbody>
    );
}

class ListTable extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false
        };
    }

    handleShow = () => {
        this.setState({showModal: true});
    }

    handleHide = () => {
        this.setState({showModal: false});
    }

    render() {
        const {requests, removeRequest, isAdmin} = this.props;

        if (this.state.showModal) {
            return <RequestModal
                show={this.state.showModal}
                handleClose={this.handleHide}
            />
        }
        return (
            <div className="container">
                <Table striped bordered condensed hover>
                    <TableHeader isAdmin={isAdmin}/>
                    <TableBody
                        rs={requests}
                        rr={removeRequest}
                        handleShow={this.handleShow}
                        handleHide={this.handleHide}
                        isAdmin={isAdmin}
                    />
                </Table>
            </div>
        );
    }
}

export default ListTable;