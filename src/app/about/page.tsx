"use client";

import DownloadIcon from "@mui/icons-material/Download";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import AGButton from "../components/AGButton";
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
    html: 25,
    javaScript: 89,
    css: 70,
    php: 66,
    wordpress: 95,
    jQuery: 50,
    angular: 65,
    react: 45,
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
      <section className="py-56">
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase text-left`}>
              Personal Infos
            </h3>
            <div className="col">
              <ul
                className={`${openSans.className} ${styles.aboutList} d-flex justify-content-between flex-wrap list-unstyled`}
              >
                {Object.entries(infoSet).map(([key, value]) => (
                  <li className={`${styles.aboutItem} d-flex`} key={key}>
                    <span className={styles.aboutTitle}>{key}:</span>
                    <span className={styles.aboutContent}>
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </li>
                ))}
              </ul>
              <AGButton
                label={"Download CV"}
                handleClick={() => router.push("/about")}
                endIcon={<DownloadIcon />}
              />
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className="py-56">
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase`}>My Skills</h3>
          </div>
          <div className={`col d-flex flex-wrap justify-content-between`}>
            {Object.entries(skillSet).map(([key, value]) => (
              <div className={styles.skillList} key={key}>
                <AGCircularProgress value={value} label={key} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className="py-56">
        <div className="container">
          <div className="row">
            <h3 className={`${styles.subTitle} text-uppercase`}>
              Experience & Education
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
