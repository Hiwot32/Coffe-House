import React from 'react'
import PageHero from '../components/pageHero/PageHero'
import ContactUs from '../components/contactUs/ContactUs'

export default function page() {
  return (
    <div>
      <PageHero title={"Contsct Us"} />
      <ContactUs />
    </div>
  )
}
