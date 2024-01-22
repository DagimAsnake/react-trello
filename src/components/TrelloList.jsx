import React from 'react'
import TrelloCard from './TrelloCard'

const TrelloList = ({title, cards}) => {
  return (
    <div className="bg-gray-400 rounded-md w-80 p-4 ml-4" >
     <h3 className='text-center capitalize mb-3'>{title}</h3>
     {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
    </div>
  )
}



export default TrelloList
