"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import CallIcon from "@mui/icons-material/Call";
import DraftsIcon from "@mui/icons-material/Drafts";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapIcon from "@mui/icons-material/Map";
import SendIcon from "@mui/icons-material/Send";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Open_Sans } from "next/font/google";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
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
    {
      icon: <FacebookIcon />,
      path: "https://www.facebook.com/gajeraankil",
    },
    {
      icon: <InstagramIcon />,
      path: "https://www.instagram.com/gajeraankil",
    },
    {
      icon: <WhatsappIcon />,
      path: "https://wa.me/7046900669?text=Hello",
    },
  ];

  const formSchema = z.object({
    name: z.string().min(1, "Please enter your name").trim(),
    email: z
      .string()
      .min(1, "Please enter your Email")
      .email("Enter valid Email")
      .trim(),
    subject: z.string().min(1, "Please enter subject").trim(),
    message: z.string().min(1, "Please enter message").trim(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        "https://personal-ankil-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: { Content_Type: "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (response.status === 200) {
        reset();
        toast.success("Your message has been submitted.");
      } else {
        toast.error("There was an error submitting your message.");
      }
    } catch (e) {
      console.error(e);
    }
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
                Don&apos;t Be Shy !
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
                <div style={{ position: "relative", marginBottom: "30px" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name")}
                    name="name"
                    autoComplete="off"
                    style={{ marginBottom: "8px" }}
                  />
                  {!!errors?.name && (
                    <span className={styles.error}>
                      {errors?.name?.message}
                    </span>
                  )}
                </div>
                <div style={{ position: "relative", marginBottom: "30px" }}>
                  <input
                    type="text"
                    placeholder="Your Email"
                    {...register("email")}
                    name="email"
                    autoComplete="off"
                    style={{ marginBottom: "8px" }}
                  />
                  {!!errors?.email && (
                    <span className={styles.error}>
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
              </div>
              <div style={{ marginBottom: 30, position: "relative" }}>
                <input
                  type="text"
                  placeholder="Your Subject"
                  {...register("subject")}
                  name="subject"
                  autoComplete="off"
                  style={{ marginBottom: "8px" }}
                />
                {!!errors?.subject && (
                  <span className={`${styles.error}`}>
                    {errors?.subject?.message}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: 30, position: "relative" }}>
                <textarea
                  placeholder="Your Message"
                  {...register("message")}
                  name="message"
                  autoComplete="off"
                  style={{ marginBottom: "8px" }}
                ></textarea>
                {!!errors?.message && (
                  <span className={`${styles.error}`}>
                    {errors?.message?.message}
                  </span>
                )}
              </div>
              <AGButton
                label={"Send Message"}
                handleClick={handleSubmit(onSubmit)}
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
