import React from 'react'
import { categories } from '../data/data'
const Category = () => {
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      <div>
        {categories.map((item,index)=>
        <div key={index}>

        </div>
        )} 
      </div>
    </div>
  )
}

export default Category
