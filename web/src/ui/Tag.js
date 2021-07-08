import React, { memo } from 'react'
import PropTypes from "prop-types"

const Tag = ({tag}) => (
  <div className='jt__tag-container'>
    <p>{tag}</p>
  </div>
)

Tag.defaultProps = {
  tag: '',
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default memo(Tag)
