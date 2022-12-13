import bodyScroll from './bodyScroll.js'

const popup = () => {
  if (document.querySelector('body .popup')) {
    const popup = document.querySelector('.popup')

    const popupUse = (state, wrapper) => {
      bodyScroll(state)
      if (state == 'open') {
        popup.classList.add('active--flex')
        wrapper.classList.add('active--flex')
        setTimeout(() => {
          wrapper.classList.add('effect--scale--50')
        }, 100);
      } else if (state = 'close') {
        wrapper.classList.remove('effect--scale--50')
        setTimeout(() => {
          wrapper.classList.remove('active--flex')
          popup.classList.remove('active--flex')
        }, 300);
      }
    }

    document.querySelectorAll('.popup__link').forEach((link, id) => {
      const linkHref = link.pathname.substr(1)

      link.addEventListener('click', (e) =>{
        e.preventDefault()
        popupUse('open', popup.querySelector(`#${linkHref}`))
      })

      popup.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.popup__close') || !e.target.closest('.popup__wrapper')) {
          popupUse('close', popup.querySelector(`#${linkHref}`))
          popup.removeEventListener('click', (e) => {})
        }
      })
    })
  }
}

export default popup