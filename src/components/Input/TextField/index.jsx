import { css } from '@emotion/react'
import Input from '..'

/** @param {React.InputHTMLAttributes<HTMLInputElement>): JSX.Element} parma */
function TextField({ type, ...props }) {
  return <Input className='TextField' type='text' css={css``} {...props} />
}

export default TextField
