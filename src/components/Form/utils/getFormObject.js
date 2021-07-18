/** @param {Array<HTMLInputElement>} elements */
export default function getFormObject(elements) {
  return Object.fromEntries(
    [...elements].map((item) => [item.name, item.value])
  )
}
