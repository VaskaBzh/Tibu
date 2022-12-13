const bodyScroll = (state) => {
  if (state == 'open') {
    document.querySelector('body').classList.add('body--no-scroll')
  } else if (state == 'close') {
    document.querySelector('body').classList.remove('body--no-scroll')
  }
}

export default bodyScroll