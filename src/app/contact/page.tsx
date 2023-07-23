"use client";

import CallIcon from "@mui/icons-material/Call";
import DraftsIcon from "@mui/icons-material/Drafts";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapIcon from "@mui/icons-material/Map";
import SendIcon from "@mui/icons-material/Send";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import AGButton from "../components/AGButton";
import styles from "./page.module.css";

const openSans = Open_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

interface contactListSetType {
  title: string;
  value: string;
  icon: JSX.Element;
}

interface socialSetType {
  icon: JSX.Element;
  path: string;
}

const Page = () => {
  const contactListSet: contactListSetType[] = [
    {
      title: "Address Point",
      value: "Surat, Gujarat",
      icon: <MapIcon />,
    },
    {
      title: "Mail Me",
      value: "gajeraankil@gmail.com",
      icon: <DraftsIcon />,
    },
    {
      title: "Call Me",
      value: "+91 70469 00669",
      icon: <CallIcon />,
    },
  ];

  const socialSet: socialSetType[] = [
    {
      icon: <GitHubIcon />,
      path: "https://github.com/gajeraankil",
    },
    {
      icon: <LinkedInIcon />,
      path: "https://in.linkedin.com/in/gajeraankil",
    },
  ];

  const [field, setField] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setField((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className={`${styles.title} position-relative text-uppercase`}>
            Get In <span className="text-primary">Touch</span>
            <span
              className={`${styles.titleBg} position-absolute text-uppercase`}
            >
              Contact
            </span>
          </h1>
        </div>
      </div>
      <section className={`${styles.contactInfo} py-56`}>
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-between align-items-center">
            <div className={`${styles.col}`}>
              <h3 className={`${styles.subTitle} text-uppercase text-left`}>
                Don't Be Shy !
              </h3>
              <p
                className={`${openSans.className} ${styles.contactContent} text-justify`}
              >
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              {contactListSet.map((item, index) => {
                return (
                  <div
                    className={`${styles.contactList} d-flex flex-wrap align-items-center`}
                    key={index}
                  >
                    <div className={`${styles.contactIcon} text-primary`}>
                      {item.icon}
                    </div>
                    <div>
                      <span
                        className={`${openSans.className} ${styles.contactListTitle} text-uppercase`}
                      >
                        {item.title}
                      </span>
                      <p
                        className={`${openSans.className} ${styles.contactListContent}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className={`${styles.socialList} d-flex flex-wrap`}>
                {socialSet.map((item, index) => {
                  return (
                    <a
                      className={`${styles.socialIcon} d-flex justify-content-center align-items-center`}
                      href={item.path}
                      target="_blank"
                      key={index}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <form className={`${styles.col} ${styles.contactForm}`}>
              <div className={styles.personalField}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={field.name}
                  onChange={handleChange}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  value={field.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <input
                type="text"
                placeholder="Your Subject"
                value={field.subject}
                onChange={handleChange}
                name="subject"
              />
              <textarea
                placeholder="Your Message"
                value={field.message}
                onChange={handleChange}
                name="message"
              ></textarea>
              <AGButton
                label={"Send Message"}
                handleClick={() => {
                  console.log(field);
                }}
                endIcon={<SendIcon />}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
