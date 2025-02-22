import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why Choose ImpactHive?</h1>
          <p className={styles.para}>
          

ImpactHive is built to support underprivileged children and struggling communities, ensuring donations go directly to those in need.


Every donation is tracked, and we provide real-time updates on how funds are being used to create real impact.


We ensure that donations reach the right people quickly, reducing bureaucratic delays that often slow down aid.


We work with verified NGOs, community leaders, and local volunteers to ensure funds are used for genuine causes.


We connect donors with inspiring stories of children and families in need, allowing you to see how your generosity changes lives.


Unlike traditional crowdfunding platforms, we prioritize the cause over profits, ensuring more funds go to those who need them.


Whether you’re donating or starting a fundraiser, we provide guidance and support to maximize your impact on lives.


We go beyond donations by supporting education, healthcare, and livelihood programs to create lasting change.


          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
