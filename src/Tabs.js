import React, { useState } from "react";

//destruct services which have been passed as props
const Tabs = ({ services }) => {
  //console.log(services)
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  //map over services and output the name
  //use activeTabIndex to get the description, activeTabIndex is 0 and current state, set it to the state and find a way to update the state, no hard code
  //use back ticks, {} and $ to add classes dynamically - h3

  return (
    <section className="tabs">
      <div>
        {services.map((service, index) => (
          <h3
            className={`tab-title ${index === activeTabIndex && "active"}`}
            key={index}
            onClick={() => setActiveTabIndex(index)}
          >
            {service.name}
          </h3>
        ))}
      </div>
      <div className="tab-content">
        <p>{services[activeTabIndex].description}</p>
      </div>
    </section>
  );
};

export default Tabs;
