import { useState } from 'react'

export default function useTextField() {
  const [value, setValue] = useState('')

  const bind = {
    value,
    onChange: (ev) => setValue(ev.target.value),
  }

  return {
    value,
    setValue,
    bind,
  }
}
