import Link from 'next/link';
import React from 'react'

import {motion} from 'framer-motion'


export default function Features() {

    const data = [
        {
            title:'Note Book Mockup',
            img:'/images/features/ft1.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft2.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft3.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft4.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft5.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft6.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft1.png'
        },
        {
            title:'Note Book Mockup',
            img:'/images/features/ft2.png'
        }
    ] 

  return (
    <motion.div className='container features'>
        <div className='row'>

            {
                data.map((detail,index)=>{
                    return(
                        <motion.div 
                            className='col-lg-3 col-md-6 col-sm-6 row-item'
                            
                            initial={{opacity:0,y:'-10vh'}}
                            whileInView={{y:0,opacity:1}}
                            viewport={{once:false,amount:0.9}}
                            transition={{staggerChildren:0.9,duration:0.9}}
                        >

                            <div className='single-products-box'>
                            <div className='products-image'>
                                <Link href='/product-details'>
                                <a>
                                    <img src={detail.img} className='main-image' alt='image'/>
                                </a>
                                </Link>
                            </div>

                            <div className='products-content'>
                                <h3>{detail.title}</h3>
                            </div>

                            </div>
                        </motion.div>
                    )
                })
            }
            
        </div>
    </motion.div>
  )
}
