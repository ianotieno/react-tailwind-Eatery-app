import React from 'react'
import {data} from '../data/data.js'
const Food = () => {
    console.log(data)
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      <div>
        <div>
    <p>Filter Type</p>
        <div>
            <button>All</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chicken</button>
        </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Food
