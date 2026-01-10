import React from 'react'
import Booking from '../components/booking/Booking'
import PageHero from '../components/pageHero/PageHero'

export default function page() {
  return (
    <div>
      <PageHero title={"Book Table"} />
        <Booking />
      
    </div>
  )
}
