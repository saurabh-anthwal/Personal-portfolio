import React from "react";
import "./Contact.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT ME</h1>
      <p>
        Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
      </p>

      <div className="contact-icon">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </p>
        <div className="social-icon">
          <h3>Social Profiles</h3>
          <AiFillTwitterCircle className="s-icon" />
          <BsFacebook className="s-icon" />
          <RiInstagramLine className="s-icon" />
          <GrLinkedin className="s-icon" />
        </div>
      </div>

        <div className="my-details">
            <p><BsTelephoneInbound/><strong>Phone:</strong> <span>+91-74095872847</span></p>
            <p><MdOutlineMarkEmailUnread/>
                <strong>Email:</strong> <a className="text-danger">saurabhanthwal897@gmail.com</a></p>
            <p><HiOutlineLocationMarker/>
                <strong>Address:</strong> <span>vill kemri po-dudhali block-doiwala Dehradun-248001</span></p>
        </div>

      <div className="contact-form">
        <div className="contact-user">
          <input type="text" className="form-control" placeholder="full name"/>
          <br />
          <br />
          <input type="phone" className="form-control"  placeholder="phone number.."/>
          <br />
          <br />
          <input type="password" className="form-control"  placeholder="password"/>
          <br />
          <br />
        </div>
        <div className="comment-form">
            <textarea className="form-control" placeholder="Leave a Comment Here.." name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
        <div className="send-bkutton">
            <button className="px-3 py-1">SEND MESSAGE</button>
        </div>
    </div>
  );
};

export default Contact;
