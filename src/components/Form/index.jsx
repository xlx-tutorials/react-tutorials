function Form({ onSubmit, ...props }) {
  function handleSubmit(ev) {
    ev.preventDefault()
    if (onSubmit) onSubmit(ev)

    return false
  }

  return <form action='#' className='Form' onSubmit={handleSubmit} {...props} />
}

export default Form
