import React, { memo } from 'react'

const Card = ({card}) => {
  return (
    <div>
      <h2>{card.name}</h2>
    </div>
  )
}

export default memo(Card)
