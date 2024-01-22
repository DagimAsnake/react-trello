import React from 'react'
import TrelloCard from './TrelloCard'

const TrelloList = ({title}) => {
  return (
    <div className="bg-gray-400 rounded-md w-48 p-4" >
     <h3 className='text-center capitalize mb-3'>{title}</h3>
     <TrelloCard />
    </div>
  )
}



export default TrelloList
