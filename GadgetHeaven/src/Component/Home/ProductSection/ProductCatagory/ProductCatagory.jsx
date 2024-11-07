import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

const ProductCatagory = ({activeCategory, setActiveCategory}) => {
    
    console.log(activeCategory);
    

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(category);
    
  };
  return (
    <div className='product_catagory_main_div'>
        
        <Button
        variant="gradient"
        size="md"
        color={activeCategory === 'All Product' ? 'green' : 'gray'}
        onClick={() => handleCategoryClick('All Product')}
      >
        All Product
      </Button>

      <Button variant="gradient" size="md" className='whitespace-nowrap' 
    
    color={activeCategory === 'Smart-Watches' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Smart-Watches')}
    >
    Smart Watches
    </Button>

    <Button variant="gradient" size="md" className='whitespace-nowrap'    
    color={activeCategory === 'Power-Banks' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Power-Banks')}>
    power banks
    </Button>

    <Button variant="gradient" size="md" 
    color={activeCategory === 'Laptops' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Laptops')}
    >
    Laptops
    </Button>

    <Button variant="gradient" size="md"
    color={activeCategory === 'Phones' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Phones')}>
    Phones
    </Button>

    <Button variant="gradient" size="md" 
    color={activeCategory === 'Accessories' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Accessories')}>   
    Accessories
    </Button>

    

    <Button variant="gradient" size="md" 
    color={activeCategory === 'Chargers' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('Chargers')}
    >
    Chargers
    </Button>

    

    <Button variant="gradient" size="md" className='whitespace-nowrap'    
    color={activeCategory === 'MacBook' ? 'green' : 'gray'}
    onClick={() => handleCategoryClick('MacBook')}>
    MacBook
    </Button>
    </div>
  )
}

export default ProductCatagory