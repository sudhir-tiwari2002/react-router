import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} =useParams()
    console.log(userId,">>>>>>>")
  return (
    <div className='flex items-center justify-center bg-gray-400 p-3 text-2xl'> User : {userId} </div>
  )
}

export default User
