import React from 'react';
import Table from './table';

const students = [
    {
        student: "Warlock",
        course: "broken void melee",
        grade: "1000"
    },
    {
        student: "Hunter",
        course: "fast and sneke-y, with dash of slice",
        grade: "99"
    },
    {
        student: "Titan",
        course: "tankin' for puppies",
        grade: "LEEE-ROYYY JENKINS!"
    }
];

const App = () => (
    <div className = "container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
);

export default App;
