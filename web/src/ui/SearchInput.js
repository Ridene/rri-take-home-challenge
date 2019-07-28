import React, { memo } from 'react'
import cn from 'classnames'
import PropTypes from "prop-types"

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

SearchInput.defaultProps = {
  word: '',
  placeholder: '',
  className: ''
}

SearchInput.propTypes = {
  word: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default memo(SearchInput)
