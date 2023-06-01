import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const brandNames= ["Hermes", "Adidas", "Ralph Lauren", "Chanel", "Tommy Hilfiger"];

  let listingArray = []

  for(let i= 0; i < 4; i++) {
    listingArray[i] = <li>{names[i]}</li>
  }
  console.log(listingArray)
  return (
    <>
      <div>
        <ul>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>BLOG</button>
          </li>
          <li>
            <button>SHOP</button>
          </li>
        </ul>
        <div className = "leftBox"></div>
        <div className ="Box">{listingArray}</div>
        <div>
          <img src="https://almullaconsulting.com/wp-content/uploads/2017/10/Brand.jpg" />
        </div>
      </div>
        
      
    </>
  )
  }


export default App
