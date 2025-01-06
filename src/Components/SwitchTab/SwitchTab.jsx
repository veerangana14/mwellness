import React from "react";
import styles from "./SwitchTab.module.css"; // Add the CSS file for styling

const SwitchTab = ({ activeTab, setActiveTab, onTabChange }) => {

  return (
    <div className={styles.SwitchTabContainer}>
      <button
        className={`${styles.SwitchTab} ${activeTab === "Monthly" ? `${styles.Active}` : ""}`}
        onClick={() => onTabChange("Monthly")}
      >
        Monthly
      </button>
      <button
        className={`${styles.SwitchTab} ${activeTab === "Annually" ? `${styles.Active}` : ""}`}
        onClick={() => onTabChange("Annually")}
      >
        Annually &nbsp;&nbsp;<span style={{ color: "orange" }}>Save 20%</span>
      </button>
    </div>
  );
};

export default SwitchTab;
