import React from 'react'
import Tabs from '../widgets/TabsComponent';

const tabsData = [
    { label: 'For Anyone', content: "I'm Zaki. I design digital products, then I build them — which keeps me honest about what actually ships." },
    { label: 'Recruiters', content: "Product designer and full-stack developer. I've worked across SaaS, e-commerce, and service platforms since 2018, currently at Techanzy Limited. Not job-hunting, but always open to a good conversation." },
    { label: 'Creative Leads', content: "I slot into existing teams without drama. Give me the problem and the constraints — you'll get options, the rationale behind each, and production-ready files." },
    { label: 'Developers', content: "I'm {design && code}. I built this.site from scratch — I write the React I ask you to ship, so my handoffs compile." },
    { label: 'Entrepreneurs', content: "You get one first impression with early users and investors. I design and build products that survive it." },
  ];

const AboutTabs = () => {
  return (
    <Tabs tabs={tabsData} />
      
  )
}

export default AboutTabs