import { buttonVariants } from './constants'

const primary = {
  color: 'slateblue',
}

const secondary = {
  color: 'hotpink',
}

function Button({ variant = 'primary', children }) {
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
    <button className='Button' style={{ ...buttonVariantStyle }}>
      {children}
    </button>
  )
}

export default Button
