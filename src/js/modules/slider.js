const slider = () => {
  if (document.querySelector('body .slider')) { 
    const slider = document.querySelector('.slider')
    const slides = slider.querySelectorAll('.slider__slide')
    const sliderWrap = slider.querySelector('.slider__wrapper-window')
    const slideWidth = slider.querySelector('.slider__slide').offsetWidth

    let position = 14

    sliderWrap.style.width = slideWidth * (slides.length - 1) + 'px'

    slider.addEventListener('click', (e) => {
      if (e.target.closest('.slider__button')) {
        e.preventDefault()
        if (e.target.closest('.slider__button--right')) {
          if (position <= -(slideWidth * (slides.length - 1) - 14)) {
            position = 14
          } else {
            position -= slideWidth
          }
          sliderWrap.style.transform = `translateX(${position + 'px'})`
        } else if (e.target.closest('.slider__button--left')) {
          if (position >= 10) {
            position = -(slideWidth * (slides.length - 1) - 14)
          } else {
            position += slideWidth
          }
          sliderWrap.style.transform = `translateX(${position + 'px'})`
        }
      }
    })
  }
}

export default slider