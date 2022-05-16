import React from "react";
import { contactsData } from "./contactsData";
import "./contactsStyles.css";

const Contacts = () => {
  return (
    <>
      <div className="contact--container">
        {contactsData.map((item, index) => {
          const { link, type, icon } = item;
          return (
            <div className="contact__icon--container">
              <img
                key={index}
                src={icon}
                alt={`${type} link icon`}
                onClick={() =>
                  type === "email"
                    ? (window.location.href = `${link}`)
                    : window.open(link)
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
