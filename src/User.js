import React from 'react'

//simply create a child component then pass the data using (Props) btw them

const User = props => {
  //now set props
  const { data } = props

  return (
    <div>
      <h2>User Component</h2>
      <h4>{data.name}</h4>
      <h4>{data.age}</h4>
    </div>
  )
}

export default User
