var header = document.getElementById('click-me')
var lowerContainer = document.getElementById('lower-container')
var isOpen = false
var className = 'chatbox_lower-container__open'

header.addEventListener('click', function () {

  if (!isOpen) {
    isOpen = true
    lowerContainer.classList.add(className)
  }

  else {
    isOpen = false
    lowerContainer.classList.remove(className)
  }
})
