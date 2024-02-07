import React from 'react'

const Input = ({
    type = "text",
    label,
    value="",
    className="",
    ...props
},ref) => {
  return (
    <div>
        {label && (
            <label >
                {label}
            </label>
        )}
        <input
        value={value}
        className={className}
        type={type}
        ref={ref}
        {...props}
        />
    </div>
  )
}

export default React.forwardRef(Input)