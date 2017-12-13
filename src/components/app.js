import React from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import ContactCard from "./contact_card";


const App = () => {
    return(
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <div className="col-4">
                    <ContactForm />
                </div>
                <ContactList />
            </div>
        </div>
    )
};

export default App;