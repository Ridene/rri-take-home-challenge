import React, { memo } from 'react'

const Tag = ({tag}) => (
  <div className='jt__tag-container'>
    <p>{tag}</p>
  </div>
)

export default memo(Tag)
