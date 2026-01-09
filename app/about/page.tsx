import React from 'react'
import PageHero from '../components/pageHero/PageHero'
import AboutUs from '../components/about/AboutUs'
import Journy from '../components/journy/Journy'
import Story from '../components/story/Story'
import Restaurant from '../components/restaurant/Restaurant'

export default function page() {
  return (
    <div>
      <PageHero title={"About Us"}/>
      <AboutUs />
      <Journy />
      <Story />
      <Restaurant />
    </div>
  )
}
