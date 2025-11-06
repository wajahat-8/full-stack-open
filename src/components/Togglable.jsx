import { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  // ✅ Expose this function to the parent component
  useImperativeHandle(ref, () => ({
    toggleVisibility
  }))

  return (
    <div>
      <div style={hideWhenVisible}>
        {/* ✅ Correct attribute: onClick (capital C) */}
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>

      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})

// ✅ Optional: give it a display name (removes ESLint warning)
Togglable.displayName = 'Togglable'

export default Togglable
