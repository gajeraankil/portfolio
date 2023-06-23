"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import AGButton from "./components/AGButton";
import styles from "./page.module.css";

const openSans = Open_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

const Page = () => {
  const router = useRouter();

  return (
    <section className="py-56">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between align-items-center">
          <div className={`${styles.col} text-center`}>
            <div
              className={`${styles.bgImg} position-absolute bg-primary`}
            ></div>
            <div className={`${styles.developerImage}`}></div>
          </div>
          <div className={`${styles.col}`}>
            <h1 className={`${styles.title} text-primary text-uppercase`}>
              <span className={`${styles.handIcon} position-absolute`}>
                <WavingHandIcon sx={{ fontSize: "40px" }} />
              </span>
              I&apos;m Ankil Gajera.
              <span className={`${styles.subTitle} text-white`}>
                Front End Developer
              </span>
            </h1>
            <p
              className={`${styles.description} ${openSans.className} text-justify`}
            >
              I am a skilled Front-End developer specializing in JavaScript,
              React.js, Redux, Next.js, and TypeScript. With expertise in
              creating dynamic and responsive web applications, I also develop
              Progressive Web Apps (PWAs) to create high-performance web
              applications that offer an app-like experience, including offline
              functionality, fast loading, and push notifications.
            </p>
            <AGButton
              label={"More About Me"}
              handleClick={() => router.push("/about")}
              endIcon={<ArrowForwardIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
