const nameValidation = function(name) {
  if (name.length === 0) {
    alert('Nome Inválido.')
    return false
  }
  return name
}

export default nameValidation