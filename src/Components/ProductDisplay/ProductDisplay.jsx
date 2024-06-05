import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
  const { product } = props
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplayh-right-prices'>
          <div className='productdisplay-right-price-old'>
            ${product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.new_price}
          </div>
        </div>
        <div className='productdisplay-right-description'>
          Crafted from 100% organic cotton, this classic tee is luxuriously soft
          and breathable. The box-cut design offers a relaxed fit, perfect for
          layering or wearing on its own.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add To Cart</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span>Woment, T-Shirt, Crop Top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  )
}