import React from 'react'

const FBCPropEx1 = (props) => {
    // console.log(props)
    if(props.isLoggedIn == true)
  return (
<div>
    <h1>Welcome {props.username}</h1>
    {props.profiles.map(profile=>{
        return <li>{profile}</li>
    })}

</div>
  )
  else{
    return <h1>Please Login First</h1>
  }
}

export default FBCPropEx1