import React, { useId } from 'react'

const Input = ({
    label,
    type="text",
    ...props
},ref) => {

    const id = useId();

  return (
    <div>
        {label && <label htmlFor={id} >
            {label}
            </label>}
        <input className='bg-cyan-400'
        type={type}
        label={label}
        {...props}
        id={id}
        ref={ref}
        >
        </input>
    </div>
  )
}

export default React.forwardRef(Input)