import React, { useEffect } from 'react'
import {motion} from 'framer-motion'


export default function Gallery() {

  const data = [
    {
      title:'Image Title',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title:'Image Title',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title:'Image Title',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      title:'Image Title',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }]

  return (
    <section style={{"width":"100%","height":"70%","overflow":"hidden"}}>
      <div class="containerd">
        {
            data.map((item,index)=>{
              return(
                
                  <motion.div class="box">
                    <div class="imgBx">
                      <img src={item.img}/>
                    </div>
                    <div class="content">
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.para}</p>
                      </div>
                    </div>
                  </motion.div>
              )
            })
        }

      </div>
    </section>
  );
}

