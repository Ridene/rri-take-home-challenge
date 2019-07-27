import React, { memo } from 'react'

import Tag from '../ui/Tag'

const Card = ({card: {name, tags}}) => (
  <div className='jt__card-container'>
    <h4>{name}</h4>
    <div className='jt__tags-container'>
      {tags.map((tag, idx) => <Tag tag={tag} key={idx}/>)}
    </div>
  </div>
)

export default memo(Card)
