"use client";
import React, { useState } from "react";
import { Label } from "./contact-form-label";
import { Input } from "./contact-form-input";
import { cn } from "@/utils/cn";
import { InputTextArea } from "./contact-form-textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactFormComponent() {
  const [firstnameInput, setFirstNameInput] = useState("");
  const [lastnameInput, setLastNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const successAlert = () =>
    toast.success("Your message sent successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const failedAlert = () =>
    toast.error("Failed to send message", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const sendingMessageAlert = () =>
    toast.info("Sending your message", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const warningAlert = () =>
    toast.warn("Invalid Input", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const stringContainsChar = ({ inputString }: any) => {
    for (let i = 0; i < inputString?.length; i++) {
      if (/[a-zA-Z]/i.test(inputString.charAt(i))) {
        return true;
      }
    }
    return false;
  };

  const submitContactForm = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();

    var message = messageInput.replace(/(\r\n|\n|\r|\n|\t)/gm, " "); //remove those line breaks for textarea

    if (firstnameInput === "" || firstnameInput.length < 3) {
      warningAlert();
    } else if (lastnameInput === "" || lastnameInput.length < 3) {
      warningAlert();
    } else if (phoneInput === "" || phoneInput === undefined) {
      warningAlert();
    } else if (phoneInput.length < 10) {
      warningAlert();
    } else if (stringContainsChar(phoneInput)) {
      console.log(phoneInput);
      warningAlert();
    } else if (
      emailInput === "" ||
      emailInput.length < 3 ||
      !emailInput.match("@")
    ) {
      warningAlert();
    } else if (message === "" || message.length < 10) {
      warningAlert();
    } else {
      var send_message =
        "Hey Team, we have an enquire from a new client!!!%0A%0A" +
        "<b>Name:</b> " +
        firstnameInput +
        " " +
        lastnameInput +
        "%0A<b>Phone: </b>" +
        phoneInput +
        "%0A<b>Email: </b>" +
        emailInput +
        "%0A<b>Message: </b>" +
        message +
        "%0A<b>Date: </b> " +
        date +
        "%0A<b>Time: </b> " +
        time;
      var bot_token = "7147880199:AAFJYKodu1HCPXAqCWsfzd-bDWfjGLWB_2A";
      var chat_id = -1002074342849;
      var url =
        "https://api.telegram.org/bot" +
        bot_token +
        "/sendMessage?chat_id=" +
        chat_id +
        "&text=" +
        send_message +
        "&parse_mode=html";
      var xhttp = new XMLHttpRequest();

      console.log("message sending...");
      sendingMessageAlert();

      // send a request
      xhttp.open("GET", url, true);
      xhttp.send();

      // response message
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          // storing the responses
          var data = JSON.parse(xhttp.responseText);
          var uploadResult = data["ok"];
          console.log("uploadResult=", uploadResult);

          // conditions to show response messages
          if (uploadResult === true) {
            successAlert();
          } else {
            failedAlert();
          }
        } else {
          // failedAlert();
          console.log("Failed to send message");
        }
      };
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitContactForm();
  };

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input text-left">
      <ToastContainer />
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tony"
              type="text"
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Stark"
              type="text"
              onChange={(e) => setLastNameInput(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="tonyshark@xenxtechnologies.com"
            type="email"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            placeholder="+91 1234567890"
            type="text"
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="textarea">Message</Label>
          <InputTextArea
            id="message"
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
