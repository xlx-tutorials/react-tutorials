import { css } from '@emotion/react'
import BasicButton from '../../components/Buttons/BasicButton'
import Form from '../../components/Form'
import TextField from '../../components/Input/TextField'
import useTextField from '../../components/Input/TextField/hooks/useTextField'
import getFormObject from '../../components/Form/utils/getFormObject'

function FormPage() {
  const { value: input1, bind: bind1, setValue: setValue1 } = useTextField()
  const { value: input2, bind: bind2, setValue: setValue2 } = useTextField()

  return (
    <div className='FormPage'>
      <Form
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .TextField {
            margin-bottom: 10px;
          }
        `}
        onSubmit={(ev) => console.log(ev)}
      >
        <TextField name='phone' placeholder='请输入手机号' {...bind1} />
        <TextField name='capture' placeholder='请输入短信验证码' {...bind2} />
        <TextField name='username' placeholder='用户名' />
        <BasicButton type='submit'>Submit</BasicButton>
      </Form>

      <button
        onClick={() => {
          setValue1('')
          setValue2('')
        }}
      >
        clear
      </button>

      <p>phone:{input1}</p>
      <p>capture:{input2}</p>
    </div>
  )
}

export default FormPage
