import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ items = [], keepOthersOpen, style }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion} style={style}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
