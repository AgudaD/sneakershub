import React from 'react'
import './ItemPage.css'
import left from '../Assets/leftarrow.svg'
import heart from '../Assets/Heart.svg'
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
  return (
    <div>
        <div className="navigation">
            <img src={left} alt="" />
            <img src={heart} alt="" />
        </div>

        <div className="prod">
            <div className="prod-info">
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
                <p style={{margin: '0', border: '1px solid black', borderRadius: '50%', width: '24px', height: '24px', lineHeight: '24px'}}>9</p>
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

        <div style={{marginTop: '-150px'}}>
            <img  src={bigshoe} alt="" />
        </div>
        <div style={{marginTop: '-120px'}}>
            <img   src={camera} alt="" />
        </div>

        <div style={{marginLeft: '40px'}}>
            <p className='info'>Try moving the shoe in whatever direction with your finger for 360 view mode</p>
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
                    <img src={sub} alt="" />
                    <p>1</p>
                    <img src={Vector} alt="" />
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
