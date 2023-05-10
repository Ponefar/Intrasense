import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import ArrowSvg from './img/ArrowSvg'

const CustomRoot = styled('div')({
  position: 'fixed',
  bottom: '2em',
  right: '4em',
  zIndex: 9,
  marginRight: '-2em',
  transition: '300ms all',
})

function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  function handleScroll(): void {
    if (window.pageYOffset >= 150) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>): void {
    if (event.key === 'Enter' || event.key === ' ') {
      return scrollToTop()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CustomRoot>
      {Boolean(isVisible) && (
        <button
          type="button"
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <ArrowSvg />
        </button>
      )}
    </CustomRoot>
  )
}

export default ScrollToTop
