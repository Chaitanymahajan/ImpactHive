import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          
          <br />
          At ImpactHive, we believe in the power of collective kindness. Our platform is built to connect generous donors with those in need, ensuring that every contribution, big or small, makes a tangible difference. From providing essential aid to underprivileged children to supporting individuals facing hardships, we are committed to creating a world where help is just a click away.!
          <br />
          <br />
          Our mission is to make fundraising simple, transparent, and impactful. We provide a seamless way for individuals and organizations to start campaigns, raise funds, and track their progress in real time. With secure payment options and a dedicated support team, we ensure that every donation reaches its rightful cause, fostering trust and credibility within our community.!
          <br />
          <br />
          What sets ImpactHive apart is our focus on verified campaigns and genuine causes. We thoroughly assess each fundraiser to maintain integrity and maximize the impact of every donation. Our platform empowers both donors and beneficiaries, enabling them to be part of a change-driven ecosystem where every act of generosity contributes to a brighter future.!
          <br />
          <br />
          Together, we can transform lives and bring hope to those who need it most. Join us in our mission to create a more compassionate world—one donation at a time. 
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
