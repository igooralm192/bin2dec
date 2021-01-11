import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface Props {
  placeholder: string
  value: string | number
  onChange: (value: string | number) => void
}

const NumberInput: React.FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        value={String(value)}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

NumberInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default NumberInput
