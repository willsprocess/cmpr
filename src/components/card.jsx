import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

function Card( props ) {

  return (
    <>
    <div className="cards__item__wrap justify-center items-center">
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/details'}
        state={{
          src: props.src,
          title: props.title,
          text: props.text,
          GPS: props.GPS
        }}
        >
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__title'>{props.title}</h5>
            <p className='cards__item__text'>{props.heading}</p>
            {/* <p className='cards__item__text'>{props.text}</p> */}
            {/* <p>{location.state.GPS}</p> */}
          </div>
        </Link>
      </li>
    </div>
    </>
  )
}

export default Card