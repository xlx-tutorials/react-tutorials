import { css } from '@emotion/react'
import BasicButton from '../../components/Buttons/BasicButton'
import Button from '../../components/Buttons/Button'
import { MdMessage, MdModeEdit, MdPlusOne } from 'react-icons/md'

function ButtonDemoPage() {
  return (
    <div className='ButtonDemoPage'>
      <Button>Click Me</Button>
      <br />
      <BasicButton
        css={css`
          margin-top: 20px;
        `}
      >
        <MdModeEdit
          size={14}
          css={css`
            margin-right: 4px;
          `}
        />
        写回答
      </BasicButton>
      <BasicButton>
        <MdMessage /> Message
      </BasicButton>
    </div>
  )
}

export default ButtonDemoPage
