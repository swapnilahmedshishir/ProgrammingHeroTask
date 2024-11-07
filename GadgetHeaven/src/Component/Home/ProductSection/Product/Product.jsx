import React from 'react'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
export const Product = ({product}) => {

  const { product_id , product_title, price , product_image} = product

 
  
  return (
    <div className='product_card_main_div'>
        <div className='product_card_image_div'>
            <img src={product_image} alt="productImage" className='rounded-3xl'/>
        </div>
        <div className='product_card_details_div pt-3'>
            <h3>{product_title}</h3>
            <p>price $<span>{price}</span></p>
            <Link to={`/product/${product_id}`}>           
            <Button className='btn bg-white text-purple-500 rounded-full w-32 whitespace-nowrap'>View Details</Button>
            </Link>
            
        </div>
    </div>
  )
}
