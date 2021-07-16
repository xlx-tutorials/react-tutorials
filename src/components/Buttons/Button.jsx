import { css } from '@emotion/react'

function Button({ ...props }) {
  return (
    <button
      className='Button'
      css={css`
        border: none;
        background-color: lavender;
        color: slateblue;
        cursor: pointer;
        padding: 8px 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        &:hover {
          filter: brightness(0.9);
        }
        &:active {
          filter: brightness(0.8);
        }
      `}
      {...props}
    />
  )
}

export default Button
