import React from 'react'
import Tabs from '../widgets/TabsComponent';

const tabsData = [
    { label: 'For Anyone', content: "Hi! I am Zaki, an engineer who’s all about crafting stunning, user-friendly solutions that make a real difference." },
    { label: 'Recruiters', content: "A UX/UI designer and Full Stack developer with a passion for creating user-centered designs. I’m not actively job-hunting, but hey, I’m always open to a chat over coffee!" },
    { label: 'Creative Leads', content: "Design is my craft, but collaboration is my superpower. I thrive on teamwork, turning complex challenges into creative solutions." },
    { label: 'Developers', content: "I’m {design + code} and while (I’m === full-time engineer) I can {speak ‘code’ fluently}. I’ve built (this.site) from scratch and optimized (that.feature) for performance." },
    { label: 'Entrepreneurs', content: "Your big idea needs great design. From start to finish, I’m available to partner with you to create something standout & scalable." },
  ];

const AboutTabs = () => {
  return (
    <Tabs tabs={tabsData} />
      
  )
}

export default AboutTabs