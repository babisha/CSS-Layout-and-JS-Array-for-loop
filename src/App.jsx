import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const brandNames= ["Hermes", "Adidas", "Ralph Lauren", "Chanel", "Tommy Hilfiger"];

  let listingArray = []

  for(let i= 0; i < brandNames.length; i++) {
    listingArray[i] = <li>{brandNames[i]}</li>
  }
  console.log(listingArray)
  return (
    <>
      <div className="nav">
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
        </div>
        
        
        <div className= "box">
        <div className ="rightBox">{listingArray}</div>
          <img src="https://almullaconsulting.com/wp-content/uploads/2017/10/Brand.jpg" />
        </div>
        
      
    </>
  )
  }


export default App
