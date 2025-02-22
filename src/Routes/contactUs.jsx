import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>REACH US</h1>
        <div className={styles.content}>
        Let's Make an Impact Together! 🌍
        Have a query, feedback, or an idea to improve ImpactHive? Reach out, and let’s create change together!
          <br />
          <br />
          <div className={styles.map}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.4311272891123!2d77.74960037529138!3d20.85466609373535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a54e170995cb%3A0xfed5bd6314ba3973!2sProf.Ram%20Meghe%20Institute%20of%20Technology%20%26%20Research!5e0!3m2!1sen!2sin!4v1740163812308!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>IMPACTHIVE</b>
                <br />
                PRMITR Campus,
                <br />
                Anjangaon Bari Rd,
                <br /> Badnera, Maharashtra 444701
                <br /> <br />
                For any queries, reach us out at email : chaitanyamahajan047@gmail.com
                <br />
                +91-8886206509
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
