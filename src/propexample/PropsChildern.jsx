import React from 'react'

const PropsChildern = (props)=>{
    console.log(props)
  return (
    <div>PropsChildern
        <h1>{props.username}</h1>
         <h3> {props.company} </h3>
         <h3>{props.Hobbies}</h3>
         {props.childern}
    </div>
  )
}

export default PropsChildern