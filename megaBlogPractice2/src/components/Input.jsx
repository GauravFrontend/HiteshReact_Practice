import React from 'react'

const Input = ({
    type = "text",
    label,
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
        className={className}
        type={type}
        ref={ref}
        {...props}
        />
    </div>
  )
}

export default React.forwardRef(Input)