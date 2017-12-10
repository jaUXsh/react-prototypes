import React from 'react';

let TableComp = (props) => {
    const tableRows = props.data.map( (arrItem, arrI) => {
            return  (
                    <tr key={arrI}>
                        <td>{arrItem.student}</td>
                        <td>{arrItem.course}</td>
                        <td>{arrItem.grade}</td>
                    </tr>
            )
        });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
};

export default TableComp;