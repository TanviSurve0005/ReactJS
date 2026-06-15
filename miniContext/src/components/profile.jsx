import React, { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
  const { user } = useContext(userContext);

  if(!user) return <div>Please login to view your profile</div>
  return (
    <>
        <div>profile</div>
        <div>welcome {user.username}</div>
    </>
  )
}

export default Profile