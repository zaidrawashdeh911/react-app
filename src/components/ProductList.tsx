import React, { useEffect, useState } from 'react'

const ProductList = ({category}:{category:string}) => {
    const [products, setProducts] = useState<string[]>([]);
    
    useEffect(()=>{
        console.log('Fetching products in ', category);
        setProducts(['Clothing','Household'])
    }, [category]);
  return (
    <div>
      Product List
    </div>
  )
}

export default ProductList
