import React from 'react'
import './HomePage.css'
import menu from '../Assets/menu.svg'
import Bag from '../Assets/Bag.svg'
import Search from '../Assets/Search.svg'
import nike from '../Assets/nike.svg'
import adidas from '../Assets/adidas.svg'
import puma from '../Assets/puma.svg'
import newbalance from '../Assets/new balance.svg'
import star from '../Assets/star.svg'
import red from '../Assets/red.svg'
import green from '../Assets/green.svg'
import blue from '../Assets/blue.svg'
import group from '../Assets/Group 1.svg'
import Vector from '../Assets/Vector.svg'
import group2 from '../Assets/Group 2.svg'
import group3 from '../Assets/Group 3.svg'
import vector2 from '../Assets/vector2.svg'
import Home from '../Assets/Home.svg'
import Heart from '../Assets/Heart.svg'
import Profile from '../Assets/Profile.svg'
import searchh from '../Assets/searchh.svg'


const HomePage = () => {
  return (
    <div>
        <div className="navigation">
            <img src={menu} alt="" />
            <img src={Bag} alt="" />
        </div>

        <div className="search">
            <input className='searchbar' type="text" placeholder="Search" name="search"/>
            <button className='searchbutton' type="submit"><img src={Search} alt="" /></button>
        </div>

        <div className="brands">
            <div className='brandname' style={{
                    background: '#F6F6F6', 
                    borderRadius: '10px', 
                    width: '70px', 
                    height: '70px'
                    }}>
                <img className='brandimage' src={nike} alt="" />
                <p style={{color: 'black'}} className='name'>Nike</p>
            </div>

            <div className="brandname">
                <img className='brandimage' src={adidas} alt="" />
                <p className='name'>Adidas</p>
            </div>

            <div className="brandname">
                <img className='brandimage' src={puma} alt="" />
                <p className='name'>puma</p>
            </div>

            <div className="brandname">
                <img className='brandimage' src={newbalance} alt="" />
                <p className='name' style={{marginTop: '-6px'}}>New ba..</p>
            </div>
        </div>

        <div className="category">
            <h3 className="main">Popular</h3>
            <p className="more">See all</p>
        </div>

        <div className='prod-display'>
            <div className='prod'>
                <div className="info">
                    <div className="rate">
                        <p className='rating'>4.5</p>
                        <img src={star} alt="" />
                    </div>
                    <p className='type'>Jordan</p>
                    <p className='price'>$1300</p>
                    <div className='colors'>
                       <p className='color'>color</p>
                       <img src={red} alt="" />
                       <img src={green} alt="" />
                       <img src={blue} alt="" />
                    </div>
                </div>

                <div className="shoe">
                    <img className='shoe-prod' src={group} alt="" />
                    <img className='vector' src={Vector} alt="" />
                </div>
            </div>      

            <div className='prod'>
            <div className="info">
                    <div className="rate">
                        <p className='rating'>5</p>
                        <img src={star} alt="" />
                    </div>
                    <p className='type'>Jordan</p>
                    <p className='price'>$500</p>
                    <div className='colors'>
                       <p className='color'>color</p>
                       <img src={blue} alt="" />
                       <img src={red} alt="" />
                       <img src={green} alt="" />
                    </div>
                </div>

                <div className="shoe">
                    <img className='shoe-prod' src={group} alt="" />
                    <img className='vector' src={Vector} alt="" />
                </div>
            </div>
        </div>

        <div className="category">
            <h3 className="main">New Arrivals</h3>
            <p className="more">See all</p>
        </div>

        <div className="other-prod">
            <div className="nike-men">
                <div className="nike-shoe">
                    <img className='nike-white' src={group2} alt="" />

                    <div className="rate-add">
                        <div className="rate">
                            <p className='rating'>4.5</p>
                            <img src={star} alt="" />
                        </div>

                        <img src={vector2} alt="" />
                    </div>
                </div>

                <div className="prod-info">
                    <p style={{fontStyle: 'normal', fontWeight: '400', fontSize: '14px', margin: '0' }}>Nike Air Jordan 1 High z...</p>
                    <p style={{fontStyle: 'normal', fontWeight: '700', fontSize: '18px', margin: '0' }}>$1700</p>
                </div>
            </div>

            <div className="nike-men">
                <div className="nike-shoe">
                    <img className='nike-white' style={{marginLeft: '23px'}} src={group3} alt="" />

                    <div className="rate-add">
                        <div className="rate" style={{marginBottom: '10px'}} >
                            <p className='rating'>4.5</p>
                            <img src={star} alt="" />
                        </div>

                        <img style={{marginBottom: '10px'}}  src={vector2} alt="" />
                    </div>
                </div>

                <div className="prod-info">
                    <p style={{fontStyle: 'normal', fontWeight: '400', fontSize: '14px', margin: '0', }}>Women Nike Air Jordan...</p>
                    <p style={{fontStyle: 'normal', fontWeight: '700', fontSize: '18px', margin: '0' }}>$1400</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <img src={Home} alt="" />
            <img src={Heart} alt="" />
            <img src={Profile} alt="" />
            <img src={searchh} alt="" />
        </div>

    </div>
  )
}

export default HomePage