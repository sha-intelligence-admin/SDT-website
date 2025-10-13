// import Image from 'next/image'
import React from 'react'

const FocusCard = ({item}) => {
  return (
    <div className='rounded-lg text-start py-4 m-4 flex flex-col items-start'>
        <img
            src={item.image}
            alt={item.title}
            className="rounded-lg aspect-[3/4] object-cover w-full"
        />
        <h3 className="text-start text-xl sm:text-2xl mt-4">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <a href={item.link} className="text-secondary mt-2 hover:underline">Learn More</a>
    </div>
  )
}

export default FocusCard