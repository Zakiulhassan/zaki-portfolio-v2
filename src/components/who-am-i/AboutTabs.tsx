import React from 'react'
import Tabs from '../widgets/TabsComponent';

const tabsData = [
    { label: 'For Anyone', content: 'Content for anyone...' },
    { label: 'Recruiters', content: 'Content for recruiters...' },
    { label: 'Creative Leads', content: 'Content for creative leads...' },
    { label: 'Developers', content: 'Content for developers...' },
    { label: 'Entrepreneurs', content: 'Content for entrepreneurs...' },
  ];

const AboutTabs = () => {
  return (
    <Tabs tabs={tabsData} />
      
  )
}

export default AboutTabs