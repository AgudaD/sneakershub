import React, { useState } from 'react'
import './ItemPage.css'
import { BsFillHeartFill  } from "react-icons/bs";
import left from '../Assets/leftarrow.svg'
import star from '../Assets/star.svg'
import bigshoe from '../Assets/bigshoe.svg'
import camera from '../Assets/camera.svg'
import Frame1 from '../Assets/Frame1.svg'
import Frame2 from '../Assets/Frame2.svg'
import Frame3 from '../Assets/Frame3.svg'
import Frame4 from '../Assets/Frame4.svg'
import sub from '../Assets/sub.svg'
import Vector from '../Assets/Vector.svg'


const ItemPage = () => {
    const [toggle, setToggle] = useState(false)
    const [counter, setCounter] = useState(1)

    const love = () =>{
       setToggle((toggle) => !toggle) 
    }

    const increment = () =>{
        setCounter((prevCounter) => prevCounter + 1) 
     }

     const decrement = () =>{
         if(counter < 1){
             setCounter(0) 
         }else{
            setCounter((prevCounter) => prevCounter - 1) 
         }
     }

  return (
    <div className='bod'>
        <div className="navigation2">
            <img src={left} alt="" />
            <button onDoubleClick={love} className={toggle ? 'heart-button-enabled' : 'heart-button-disabled' }><BsFillHeartFill /> 
            
            </button>
        </div>

        <div className="prod2">
            <div className="prod2-info">
                <p style={{margin: '0', fontStyle: 'normal', fontWeight: '400', fontSize: '18px'}}>Jordan</p>
                <p style={{margin: '0', fontStyle: 'normal', fontWeight: '400', fontSize: '14px'}}>Air Jordan 1 High OG ASG</p>
                <p style={{margin: '0', fontStyle: 'normal', fontWeight: '700', fontSize: '18px'}} className="price">$1780</p>
            </div>

            <div className="rate">
                <p className='rating'>4.5</p>
                <img src={star} alt="" />
            </div>
        </div>

        <div className="filter">
            <div className="size">
                <p>size</p>
                <p style={{margin: '0', border: '1px solid black', textAlign: 'center', borderRadius: '50%', width: '24px', height: '24px', lineHeight: '24px'}}>9</p>
            </div>
            <div className="size">
                <p>color</p>
                <div style={{
                    margin: '0', border: '1px solid black', borderRadius: '50%', 
                    width: '24px', height: '24px', lineHeight: '24px'}}>
                        <div style={{
                            margin: '0', background: '#88061E', borderRadius: '50%', 
                            width: '20px', height: '20px', marginLeft: '2px', marginTop: '2px'}}>
                        </div>
                </div>
            </div>
        </div>

        <div  style={{marginTop: '-150px', display: 'flex', justifyContent: 'center'}}>
            <img className='bigshoe' src={bigshoe} alt="" />
        </div>
        <div style={{marginTop: '-120px', display: 'flex', justifyContent: 'center'}}>
            <img   src={camera} alt="" />
        </div>

        <div>
            <p className='info2'>Try moving the shoe in whatever direction with your finger for 360 view mode</p>
        </div>

        <div className="below">
            <p className='belowtxt'>Gallery</p>

            <div className="views">
                <img src={Frame1} alt="" />
                <img src={Frame2} alt="" />
                <img src={Frame3} alt="" />
                <img src={Frame4} alt="" />
            </div>
        </div>

        <div className="button-sect">
            <p className="quantity">Quantity</p>

            <div className='buttons'>
                <div className="meter">
                    <img onClick={decrement} src={sub} alt="" />
                    <p>{counter}</p>
                    <img onClick={increment} src={Vector} alt="" />
                </div>

                <div className="add-to-cart">
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
        


    </div>
  )
}

export default ItemPage
