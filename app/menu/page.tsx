import React from 'react'
import Menu from '../components/menu/Menu'
import PageHero from '../components/pageHero/PageHero'


export default function page() {
  return (
    <div>
        <PageHero title={"Our Menu"} />
        <Menu />
      
    </div>
  )
}
