import React,{useState,useEffect} from 'react'

import LoginNav from './LoginNav';

import './Login.css';
export default function Signup() {
  
  const messages = [
    'Share resources seamlessly with others.',
    'Find and access valuable resources quickly.',
    'Collaborate and contribute to a community of resource sharers.',
    'Enjoy a user-friendly interface designed for efficiency.',
    'Stay updated with the latest shared resources and news.',
  ];

  const [currentMessage, setCurrentMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 100;
  const displayDuration = 3000; 

  useEffect(() => {
    let typingTimeout;
    let displayTimeout;
    
    if (currentMessage.length < messages[currentIndex].length) {
      typingTimeout = setTimeout(() => {
        setCurrentMessage((prev) => prev + messages[currentIndex][currentMessage.length]);
      }, typingSpeed);
    } else {
      displayTimeout = setTimeout(() => {
        setCurrentMessage('');
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }, displayDuration);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(displayTimeout);
    };
  }, [currentMessage, currentIndex]);
  return (
    <>
      <LoginNav />
      <div>
        <div className="d-flex">
          <div className="message">
            <h2>Hello, this is a Resource Sharing Website</h2>
            <div className="message-typewriter" >
              {currentMessage}
            </div>
          </div>
          <div
            className="login"
            style={{
              border: '2px solid orange',
              padding:"10px",
              height: '500px',
              width: '450px',
              position: 'absolute',
              right: '100px',
              marginTop: '100px',
            }}
          >
            <form>
              
            <h4 style={{ textAlign: 'center' }}>
                  Kindly SignUp to  use CSG
                </h4>
              <div className="form-group">
                <label htmlFor="name" style={{ textAlign: 'center', display: 'block' }}>
                  Name
                </label>
                <input
                  type="text"
                  className="name"
                  id="name"
                  aria-describedby="name"
                  placeholder="Enter Name"
                  style={{ width: '90%' ,height:"30px"}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{ textAlign: 'center', display: 'block' }}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{ width: '90%' }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" style={{ textAlign: 'center', display: 'block' }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{ width: '90%' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" style={{ textAlign: 'center', display: 'block' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                  style={{ width: '90%' }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '40px', marginLeft: '100px', width: '50%' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
