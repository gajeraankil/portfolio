"use client";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Chip } from "@mui/material";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import AGCircularProgress from "../components/AGCircularProgress";
import styles from "./page.module.css";

const openSans = Open_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const Page = () => {
  const router = useRouter();

  const infoSet = {
    "First Name": "Ankil",
    "Last Name": "Gajera",
    Age: `${new Date().getFullYear() - 1997} Years`,
    Nationality: "Indian",
    Phone: "+91 7046900669",
    Email: "gajeraankil@gmail.com",
    Address: "Surat",
    Languages: ["English", "Hindi", "Gujarati"],
  };

  const skillSet = {
    "React.JS": 84,
    "Next.JS": 55,
    Redux: 87,
    TypeScript: 70,
    JavaScript: 70,
    "Responsive Web Design": 95,
    Git: 92,
    HTML: 80,
    "CSS / SCSS": 85,
    jQuery: 53,
    Photoshop: 50,
    Illustrator: 40,
    Figma: 58,
  };

  const expSet = [
    {
      company: "Gree Web Solutions",
      position: "React.JS Developer",
      timePeriod: "Aug 2022 - Present",
      role: "Developed scalable React applications, integrated RESTful APIs, utilized state management libraries such as Redux, collaborated with teams, implemented reusable components and conducted code reviews.",
    },
  ];

  const calculateDuration = (startDateStr: string, endDateStr: string) => {
    const startDate = new Date(startDateStr);
    const endDate =
      endDateStr.toLowerCase() === "present"
        ? new Date()
        : new Date(endDateStr);

    let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthsDiff = endDate.getMonth() - startDate.getMonth();

    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    const duration = `${yearsDiff} yr${
      yearsDiff !== 1 ? "s" : ""
    } ${monthsDiff} mo${monthsDiff !== 1 ? "s" : ""}`;

    return duration;
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className={`${styles.title} position-relative text-uppercase`}>
            About <span className="text-primary">Me</span>
            <span
              className={`${styles.titleBg} position-absolute text-uppercase`}
            >
              Resume
            </span>
          </h1>
        </div>
      </div>
      <section className={`${styles.personalInfo} py-56`}>
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase text-left`}>
              Personal Infos
            </h3>
            <ul
              className={`${openSans.className} ${styles.aboutList} d-flex flex-wrap justify-content-between list-unstyled`}
            >
              {Object.entries(infoSet).map(([key, value]) => (
                <li className={`${styles.col} d-flex flex-wrap`} key={key}>
                  <span className={styles.aboutTitle}>{key}:</span>
                  <span className={styles.aboutContent}>
                    {Array.isArray(value) ? value.join(", ") : value}
                  </span>
                </li>
              ))}
            </ul>
            {/* <AGButton
              label={"Download CV"}
              handleClick={() => router.push("/about")}
              endIcon={<DownloadIcon />}
            /> */}
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={`${styles.skill} py-56`}>
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase`}>My Skills</h3>
            <div className={`d-flex flex-wrap`}>
              {Object.entries(skillSet).map(([key, value]) => (
                <div className={styles.col} key={key}>
                  <AGCircularProgress value={value} label={key} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={`${styles.experience} py-56`}>
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase`}>Experience</h3>
            <div className={`d-flex flex-wrap justify-content-between`}>
              {expSet.map((exp, index) => {
                const [startDateStr, endDateStr] = exp.timePeriod.split(" - ");
                const duration = calculateDuration(startDateStr, endDateStr);
                return (
                  <div className={`${styles.col}`} key={index}>
                    <div className="d-flex flex-wrap">
                      <div
                        className={`${styles.expIconSection} position-relative`}
                      >
                        <div
                          className={`${styles.expIcon} d-flex flex-wrap justify-content-center align-items-center bg-primary`}
                        >
                          <BusinessCenterIcon sx={{ fontSize: "18px" }} />
                        </div>
                      </div>
                      <div className={styles.expContent}>
                        <Chip
                          label={
                            <span className={openSans.className}>
                              {`${exp.timePeriod} - (${duration})`}
                            </span>
                          }
                          sx={{
                            color: "#ffffff",
                            backgroundColor: "#252525",
                            fontSize: "12px",
                            padding: "1px 10px",
                            fontWeight: 600,
                            opacity: 0.8,
                            marginBottom: "12px",
                          }}
                        />
                        <h5 className={styles.jobTitle}>
                          {`${exp.position} - ${exp.company}`}
                        </h5>
                        <p
                          className={`${openSans.className} ${styles.jobRoles}`}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
