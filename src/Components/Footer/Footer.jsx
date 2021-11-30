import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/in/sabesan96/",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/sabesansathananthan",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
    {
      SocialMediaName: "Medium",
      ProfileLink: "https://medium.com/@sabesan96",
      fontAwesomeIconName: "fab fa-medium",
      OnMouseOverColor: "#12100e",
    },
    {
      SocialMediaName: "StackOverFlow",
      ProfileLink:
        "https://stackoverflow.com/users/8629258/sathananthan-sabesan",
      fontAwesomeIconName: "fab fa-stack-overflow",
      OnMouseOverColor: "#f48024",
    },
    {
      SocialMediaName: "Gmail",
      ProfileLink: "mailto:sabesan996@gmail.com",
      fontAwesomeIconName: "far fa-envelope",
      OnMouseOverColor: "#D44638",
      _comment: "OnMouseOverColor for yahoo mail: #720e9e",
    },
    {
      SocialMediaName: "WhatsApp",
      ProfileLink: "https://wa.me/94770711017",
      fontAwesomeIconName: "fab fa-whatsapp",
      OnMouseOverColor: "#25d366",
    },
    {
      SocialMediaName: "Telegram",
      ProfileLink: "https://telegram.me/TheSabesan",
      fontAwesomeIconName: "fab fa-telegram",
      OnMouseOverColor: "#0088cc",
    },
    {
      SocialMediaName: "Twitter",
      ProfileLink: "https://twitter.com/TheSabesan",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    {
      SocialMediaName: "Facebook",
      ProfileLink: "https://www.facebook.com/sathananthan.sabesan",
      fontAwesomeIconName: "fab fa-facebook-f",
      OnMouseOverColor: "#1877f2",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
            fontFamily: "Roboto"
          }}
        >
          Created with care by{" "}
          <a
            href="https://github.com/sabesansathananthan/covid-19-tracker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Sabesan Sathananthan
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className="list" style={{ listStyleType: "none" }}>
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: "inline-block", marginRight: "17px" }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Roboto"
          }}
        >
          Data provided by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
