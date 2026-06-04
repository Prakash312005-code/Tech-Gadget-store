import React from 'react'

const Card = (props) => {
  return (
    <div style={{ 
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        border : '1px solid whitesmoke',
    
       margin : '20px',
   width : '80%'
   ,height : '70%'
    
       
    }}>
     <img src={props.img} style={{width : '80%',height : '70%'}}/>
     <p style={{ fontSize: "15px", fontWeight: "500" }}>{props.title}</p>
     <p style={{ fontSize: "20px", fontWeight: "350" ,color :'rgb(117, 31, 255)',textDecoration : 'line-through' }}>{props.price}</p>
     <p style={{ fontSize: "20px", fontWeight: "350" ,color :'rgb(117, 31, 255)'}}>{props.new}</p>
     <p style={{ fontSize: "20px", fontWeight: "400" ,color :'rgb(117, 31, 255)'}}>{props.saleprice}</p>
    </div>
  )
}

export default Card