import React, { Component } from 'react';

import Contact from './contact';

// The AddressBook component goes here.  It should be the default export.
class AddressBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{
                name: 'Alice Aardvark',
                photo: 'https://api.adorable.io/avatars/64/alice%40thinkful.com',
                address: '1600 Pennsylvania Ave'
            }, {
                name: 'Bob Bear',
                photo: 'https://api.adorable.io/avatars/64/bob%40thinkful.com',
                address: '725 5th Ave'
            }, {
                name: 'Carol Coyote',
                photo: 'https://api.adorable.io/avatars/64/carol%40thinkful.com',
                address: '4 Pennsylvania Plaza'
            }]
        }
    }
    render() {
        const displayContacts = this.state.contacts.map((contact, index) => (
                <Contact key={index} index={index} name={contact.name} photo={contact.photo} address={contact.address}/>
        ));
        console.log('DC', displayContacts);
        return(
            <div className="address-book">
                {displayContacts}
            </div>
        );
    }
}

export default AddressBook;