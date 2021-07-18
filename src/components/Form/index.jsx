import getFormObject from './utils/getFormObject'

function Form({ onSubmit, ...props }) {
  function handleSubmit(ev) {
    ev.preventDefault()
    const formObject = getFormObject(ev.target.elements)
    ev.value = formObject

    if (onSubmit) onSubmit(ev)

    return false
  }

  return <form action='#' className='Form' onSubmit={handleSubmit} {...props} />
}

export default Form
