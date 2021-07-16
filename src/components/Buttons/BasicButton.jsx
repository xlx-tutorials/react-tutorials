import { css } from '@emotion/react'
import Button from './Button'

function BasicButton({ ...props }) {
  return (
    <Button
      className='BasicButton'
      css={css`
        border-radius: 4px;
        padding: 4px 12px;
        min-width: 80px;
        background-color: slateblue;
        color: lavender;
      `}
      {...props}
    />
  )
}

export default BasicButton
