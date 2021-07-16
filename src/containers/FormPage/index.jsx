import { css } from '@emotion/react'
import Form from '../../components/Form'
import TextField from '../../components/Input/TextField'
import BasicButton from '../../components/Buttons/BasicButton'
import { useState } from 'react'

function FormPage() {
  const [formValue, setFormValue] = useState({
    phone: '',
    capture: '',
  })

  const [formState, setFormState] = useState({
    phone: '123',
    capture: '',
  })

  return (
    <div className='FormPage'>
      <Form
        onSubmit={(ev) => {
          const input = ev.target.elements[0].value
          const input2 = ev.target.elements[1].value

          setFormValue({
            phone: input,
            capture: input2,
          })
        }}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .TextField {
            margin-bottom: 10px;
          }
        `}
      >
        <TextField
          name='phone'
          value={formState.phone}
          onChange={(ev) => setFormState({ phone: ev.target.value })}
          placeholder='请输入手机号'
        />
        <TextField
          name='capture'
          value={formState.capture}
          onChange={(ev) => setFormState({ capture: ev.target.value })}
          placeholder='请输入短信验证码'
        />
        <BasicButton type='submit'>Submit</BasicButton>
      </Form>

      <button onClick={() => setFormState({ phone: '', capture: '' })}>
        clear
      </button>

      <p>phone:{formState.phone}</p>
      <p>capture:{formState.capture}</p>
    </div>
  )
}

export default FormPage
