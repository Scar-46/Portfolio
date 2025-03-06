import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 4, duration: 1 }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <div className="solid-logo">
        <img ref={solidLogoRef} src={LogoS} alt="JavaScript Developer" />
      </div>
    </div>
  )
}

export default Logo
