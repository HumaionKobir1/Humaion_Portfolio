// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_objfz99', 'template_18wea4j', form.current, 'LBDB16rmEvAiJew8t')
//       .then((result) => {
//           console.log(result.text);
//           console.log(result);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eq38bat",
        "template_vc13iwb",
        form.current,
        "aJ0FPhPyZ68Zgsg-P"
      )
      .then(
        (result) => {
          // console.log(result.text);
          if (result.text === 'OK') {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your mail has been sent successfully. Thanks ❤️",
              showConfirmButton: false,
              timer: 1500,
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-black p-6 ">
       <div data-aos="zoom-out-down" className="text-center mb-3 ">
          <h2 className="">
            <>"Get in touch"</>
          </h2>
          <h2 className="text-2xl green">Contact Me</h2>
        </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center mb-4">
          <AiOutlineUser className="text-white mr-2" />
          <input
            type="text"
            name="user_name"
            className="bg-black text-white p-2 border-b w-full border-white focus:outline-none focus:border-gray-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <AiOutlineMail className="text-white mr-2" />
          <input
            type="email"
            name="user_email"
            className="bg-black text-white p-2 border-b w-full border-white focus:outline-none focus:border-gray-500"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <MdMessage className="text-white mr-2" />
          <textarea
            className="bg-black text-white p-2 border-b w-full border-white focus:outline-none focus:border-gray-500"
            placeholder="Message"
            name="message"
            rows="4"
            required
          />
        </div>
        <button className="" type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
