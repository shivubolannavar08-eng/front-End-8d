import React from 'react'

const body = ({footwearname,img}) => {
  return (
    <div>
      <div>
        <div>
          <img className='foot-style' src={img} alt="foot-logo" />
        </div>
        <div>
        <h3>{footwearname}</h3>
        <p>min 70% off</p>
        </div>
      </div>
       
      
    </div>
  )

}

export default body

