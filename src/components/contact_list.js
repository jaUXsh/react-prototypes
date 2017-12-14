import React, {Component} from 'react';
import ContactCard from './contact_card';


class ContactList extends Component {

    render() {

        const list = this.props.contacts.map( (item, index)=>{
            return <ContactCard key={index} contact={item}/>
        } );

        return (
            <div className="col-8">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}

export default ContactList;