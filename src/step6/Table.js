import React, {Component} from 'react';
import {Table} from 'react-bootstrap'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
}

const TableBody = ({cd, rc}) => {

    const rows = cd.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => rc(index)}>Delete</button>
                </td>
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
    render() {
        const {characterData, removeCharacter} = this.props;

        return (
            <div className="container">

                <Table striped bordered condensed hover>
                    <TableHeader/>
                    <TableBody
                        cd={characterData}
                        rc={removeCharacter}
                    />
                </Table>
            </div>
        );
    }
}

export default ListTable;