import React, { Component } from 'react';

class ContactInfo extends Component {
    render(){
        console.log('ContactInfo Component Render')

        return(
            <div className='contact-info'>
                <h2>Contact Info Page</h2>
                <ul>
                    <li>Tony Antelman</li>
                    <li></li>
                    <li>anthonyantelman@gmail.com</li>
                    <li>(515) 210-8878</li>
                    <li>417 SE 9th St.</li>
                    <li>Ankeny, Iowa</li>
                    <li>50021</li>
                </ul>
            </div>
        )
    }
}

export default ContactInfo