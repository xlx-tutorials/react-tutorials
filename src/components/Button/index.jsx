import { buttonVariants } from './constants'
import './button.css'

const primary = {
  color: 'slateblue',
}
const secondary = { color: 'hotpink' }

// const activeStyle = {
//   color: 'white',
//   background: 'slateblue',
// }

// const defaultStyle = {

// }

function Button({
  variant = 'primary',
  children,
  className,
  style,
  active = false,
  ...props
}) {
  const variants = Object.values(buttonVariants).map((item) => item.value)

  // If variant is not match, return error.
  if (!variants.includes(variant)) {
    return new Error('variant muse be one of primary, secondary, danger')
  }

  const buttonVariantStyle = {
    primary,
    secondary,
  }[variant]

  return (
    <button
      className={`Button ${active ? 'active' : ''}`}
      style={{
        background: 'lavender',
        border: 'none',
        padding: '10px 18px',
        color: 'royalblue',
        borderRadius: 8,
        cursor: 'pointer',
        userSelect: 'none',
        ...buttonVariantStyle,
        // ...(active && activeStyle),
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
