import React, { useState, useEffect, useRef } from "react";
import contactFormBg from "../../assets/contact-form-bg.jpg";
import {
  contactInfo,
  contactFormSubtitle,
  contactFormTitle,
} from "../../lib/Constants";
import { AiOutlineSend } from "react-icons/ai";

const ContactForm = () => {
  // State variables to track active input field and form data
  const [activeInput, setActiveInput] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  // Refs input elements for handling clicks outside the form
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleInputClick = (input) => {
    setActiveInput(input);
  };

  // Update the form data when input fields are changed
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Check if an input field is active (has focus or contains data)
  const isInputActive = (inputName) => {
    return activeInput === inputName || formData[inputName].length > 0;
  };

  // Effect to handle clicks outside the form to deactivate active input
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        activeInput &&
        activeInput !== event.target &&
        !nameInputRef.current.contains(event.target) &&
        !emailInputRef.current.contains(event.target) &&
        !messageInputRef.current.contains(event.target)
      ) {
        setActiveInput(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeInput]);

  return (
    <section id="contact" className="relative px-5 py-10 overflow-hidden lg:px-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="object-cover w-full h-full opacity-10"
          src={contactFormBg}
          alt="Dark background"
        />
      </div>
      <div className="container relative w-full py-3 mx-auto text-white lg:px-20 xl:py-0">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-light xl:text-5xl sm:text-4xl">
              {contactFormTitle}
            </h2>
            {["name", "email", "message"].map((inputName) => (
              <div className="relative sm:ml-10" key={inputName}>
                <label
                  className={`absolute top-0 left-0 opacity-60 ${
                    isInputActive(inputName)
                      ? "-translate-y-4 text-sm"
                      : "text-base"
                  }  transition-all duration-500 cursor-text`}
                  htmlFor={inputName}
                >
                  {inputName}
                </label>
                <input
                  ref={
                    inputName === "name"
                      ? nameInputRef
                      : inputName === "email"
                      ? emailInputRef
                      : messageInputRef
                  }
                  name={inputName}
                  id={inputName}
                  type="text"
                  className={`bg-transparent border-b-2 outline-none sm:w-96 w-full focus:ring-0 focus:bg-transparent ${
                    isInputActive(inputName) ? "" : "opacity-50"
                  } transition-all duration-500`}
                  onClick={() => handleInputClick(inputName)}
                  onChange={handleInputChange}
                  value={formData[inputName]}
                />
              </div>
            ))}
            <div className="sm:ml-10">
              <AiOutlineSend size={50} className="cursor-pointer" />
            </div>
          </div>
          <div className="hidden w-1 mx-16 bg-white lg:block h-96 opacity-20"></div>
          <div className="flex flex-col items-center pt-10 sm:items-start lg:pt-0">
            <h3 className=" text-md xl:text-2xl sm:text-xl">
              {contactFormSubtitle}
            </h3>
            <div className="w-48 h-1 mt-5 mb-10 bg-redBarClr"></div>
            <div className="flex flex-col gap-4 text-xs xl:text-lg sm:text-sm">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 ">
                  {info.icon}
                  <p className="w-48 sm:w-72">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
