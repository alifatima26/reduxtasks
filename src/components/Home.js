import React from 'react'
import phoneImg from '../assets/imagePhone.jpg'
import addCart from '../assets/cart-Photoroom.png'

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>
      {/**add add to cart image here */}
      <div className='addCart'>
        <img src={addCart} />
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src={phoneImg} />
        </div>
        {/**add text of image */}
        <div className='text-wrapper item'>
          <span>iPhone</span>
          <span>Price: $1000.00</span>
        </div>
        {/**add button */}
        <div className='btn-wrapper item'>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Home
