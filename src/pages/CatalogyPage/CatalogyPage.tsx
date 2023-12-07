import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar'
import ListCar from '../../components/List'
import { HeroPage, Section } from '../Homepage/styles'

export default function CatalogyPage() {
  return (
    <div>
      <Searchbar />
      <HeroPage>
        <Section>
          <ListCar />
        </Section>
      </HeroPage>
    </div>
  )
}
