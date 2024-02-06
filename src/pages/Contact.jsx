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
            if (!validateEmail(email)) {
                document.getElementById("validEmail").setAttribute('class', 'd-block');
            } document.getElementById("validEmail").setAttribute('class', 'd-none');
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
        <div class="container justify-content-center">
            <div class="col-12 justify-content-center" style={{width: '50%'}}>
                <h1 class="m-3">Contact</h1>
                <form className="form-control-sm px-5" onSubmit={handleFormSubmit}>
                    <input class="col-12"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    />
                    <input class="col-12 mt-2"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    />
                    <div id="validEmail" class="d-none">Please enter a valid email!</div>
                    <textarea class="col-12 mt-2" style={{height: '150px'}}
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                    />
                    <button class=" mt-2" type="submit" id="myBtn" disabled>Submit</button>
                </form>
            </div>    
        </div>
    )
}