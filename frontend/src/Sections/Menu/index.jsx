import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Menu = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/foods/")
    .then((res)=>{
      setData(res.data)
    })
  }, [])
  

  return (
    <div>
      <div className='menutitle'>
        <p>Our Menu</p>
        <h3>Discover Our Exclusive Menu</h3>
      </div>
      <div>
        {data.map((elem,id)=>{
          return (
            <div key={id} className='foodproducts'>
              <div className='food'>
                <div className='foodimage'> <img src={elem.image} alt="" /></div>
                <div className='foodtitle'>{elem.title}</div>
                <div className='foodcontent'>{elem.content}</div>
                <div className='foodprice'>{elem.price}</div>
                <button>Basket</button>
                <button>Favorites</button>
              </div>
              
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Menu