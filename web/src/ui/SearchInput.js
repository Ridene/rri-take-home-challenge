import React, { memo } from 'react'
import cn from 'classnames'

const SearchInput = ({word, onChange, placeholder, className}) => {
  return (
    <div className={cn('jt__search-container', className)}>
      <div className='jt__icon-container jt__search_icon-container'>
        <i className="material-icons">&#xE8B6;</i>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        value={word}
        className='jt__text-input'
        onChange={onChange}
      />
    </div>
  )
}
export default memo(SearchInput)
