import React, {Component} from 'react';

  
class Feedback extends Component {
    render(){
        return(
            <div className='feedback'>
                <form method="POST">
                    <div className='name-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3"></textarea>
                
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default Feedback