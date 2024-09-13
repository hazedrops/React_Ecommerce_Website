import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "../Components/Breadcrumbs/Breadcrumbs"
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay"

export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  
  // product id is string, so convert string to number to compare
  const product = all_product.find((e) => e.id === Number(productId)) 

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}
