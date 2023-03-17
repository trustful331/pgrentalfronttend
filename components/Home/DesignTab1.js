import React from 'react'
import Image from 'next/image'

export default function DesignTab1() {


  return (
    <>
        <section className="design-tab" id="1">

            <div className="text-section">
                <h1>Step into a room that has</h1>
                <h2>room for everything</h2>

                <div className="img-section hidden">
                        <img 
                            id="pic-1"
                        src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_840%2Fv1653659840%2Fwebsite-v2%2Fhome-page%2Froom-for-everything-img-1.png&w=1920&q=75" 
                        alt="no img"/>

                        <img 
                        id="pic-2"
                        src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653659840%2Fwebsite-v2%2Fhome-page%2Froom-for-everything-img-2.png&w=1920&q=75" 
                        alt="no img"/>
                    </div>

                <p>
                    Your clothes and bag will not be fighting 
                    for space on the same chair. At Stanza Living, 
                    there's ample room for all your possessions. 
                    Even a framed photo of your family, for the 
                    rare occasions you miss home.
                </p>
            </div>
            
            <div className="img-section">
                <img 
                    id="pic-1"
                src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_840%2Fv1653659840%2Fwebsite-v2%2Fhome-page%2Froom-for-everything-img-1.png&w=1920&q=75" 
                alt="no img"/>

                <img 
                id="pic-2"
                src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653659840%2Fwebsite-v2%2Fhome-page%2Froom-for-everything-img-2.png&w=1920&q=75" 
                alt="no img"/>
            </div>
        </section>
    </>
  )
}

