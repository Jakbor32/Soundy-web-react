import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EmailService = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  // toast

  const notifyGoodContactForm = () => {
    toast("Email has been sent", {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#006400",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  const notifyBadContactForm = () => {
    toast("Email has not been sent", {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#8B0000",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  // EmailJS

  const sendEmail = (e) => {
    e.preventDefault();
    let templateParams = {
      name: nameInput,
      message: messageInput,
      email: emailInput,
    };
    emailjs
      .send(
        "service_g9g3o0j",
        "template_r741jkh",
        templateParams,
        "xm768EdEMyzz9n9xF"
      )
      .then(
        () => {
          setNameInput("");
          setEmailInput("");
          setMessageInput("");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          notifyGoodContactForm();
        },
        () => {
          notifyBadContactForm();
        }
      );
  };

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
    <form className="flex flex-col gap-10" onSubmit={sendEmail}>
      {["name", "email", "message"].map((inputName) => (
        <div className="relative sm:ml-10" key={inputName}>
          <label
            className={`absolute top-0 left-0 opacity-60 ${
              isInputActive(inputName) ? "-translate-y-4 text-sm" : "text-base"
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
            type={inputName === "email" ? "email" : "text"}
            className={`bg-transparent border-b-2 outline-none sm:w-96 w-full focus:ring-0 focus:bg-transparent ${
              isInputActive(inputName) ? "" : "opacity-50"
            } transition-all duration-500`}
            onClick={() => handleInputClick(inputName)}
            onChange={(event) => {
              const setterFunction = {
                name: setNameInput,
                email: setEmailInput,
                message: setMessageInput,
              }[inputName];

              setterFunction(event.target.value);
              handleInputChange(event);
            }}
            value={formData[inputName]}
            required
          />
        </div>
      ))}

      <div className="sm:ml-10">
        <button type="submit">
          <AiOutlineSend size={50} className="cursor-pointer" />
        </button>
        <Toaster />
      </div>
    </form>
  );
};

export { EmailService };
