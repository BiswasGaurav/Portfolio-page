import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="492666d6-f6fa-45b1-9c24-dd02a0bbf590"/>
            <label>Your Name</label>
            <input type="text" name='name'></input>
            <label>Your Email</label>
            <input type="email" name='email' ></input>
            <label>Subject</label>
            <input type="text" name='subject'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your Message here' name='message'></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form