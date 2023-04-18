import React from 'react'
import Card from '../components/card.jsx';

import {
  featured,
  cardList,
} from '../data.js'

function Locations() {

  return (

    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              featured.map( ( props ) => {
                return (
                  <Card
                    key={props.id}
                    src={props.image}
                    title={props.title}
                    heading={props.heading}
                    text={props.text}
                    GPS={props.GPS}
                  />
                )
              })
            }

          </ul>

          <ul className='cards__items'>
          {
              cardList.map( ( props ) => {
                return (
                  <Card
                    key={props.id}
                    src={props.image}
                    title={props.title}
                    heading={props.heading}
                    text={props.text}
                    GPS={props.GPS}
                  />
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>

  )
}

export default Locations