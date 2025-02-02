import React from "react";
import './Contact.css'
export default function Contact() {
  return (
    <div> 

      <form className="form" >

        <h2 className="formHeading">
          CONTACT US
        </h2>

        <p className="formContent" type="Name:">
          <input className="inputContent" placeholder="Your Name"></input>
        </p>

        <p className="formContent" type="Email:">
          <input
            className="inputContent"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>

        <p className="formContent" type="Message:">
          <input
            className="inputContent"
            placeholder="What would you like to tell us.."
          ></input>
        </p>

        <button className="sendMessageButton" >
          Send Message
        </button>

        <div className="contactInfo">
          <span className="email" ></span>
          frontend@womenwhocode.com
        </div>
      </form>
    </div>
  );
}
