import {useState, useEffect} from 'react';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else {
            setMessage(inputValue);
          }

          if (name && validateEmail(email) && message) {
            document.getElementById("myBtn").disabled = false
        } else {
            document.getElementById("myBtn").disabled = true
        }    
    };
    
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('')
    }

    return (
        <div>
            <h1>Contact</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                />
                  <div>Please enter a valid email!</div>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Message"
                />
                <button type="submit" id="myBtn" disabled>Submit</button>
            </form>
        </div>
    )
}