import React, {useState , useEffect}from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)

    // const [data , setData] = useState('')
    // useEffect(() => {
    //   fetch('https://api.github.com/users/sudhir-tiwari2002')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   })
      
    // }, [])
    


  return (
    <>
    <div className=" text-center bg-gray-400 text-white p-4 text-4xl">
      Github Followers : {data?.following}
      <img className=" rounded-lg" width={300} src={data?.avatar_url} alt="" />
    </div>
    
    </>
  )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/sudhir-tiwari2002')
    return response.json()
}

export default Github
