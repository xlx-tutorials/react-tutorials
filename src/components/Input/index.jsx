import { css } from '@emotion/react'

/** @param {React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement} param */
function Input({ ...props }) {
  return (
    <input
      css={css`
        border: none;
        font-size: 14px;
        background-color: lavender;
        padding: 4px 12px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.2);
        }
      `}
      {...props}
    />
  )
}

export default Input
