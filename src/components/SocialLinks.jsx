import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {

  return (
  <div>
    <h1 className="text-lg text-white font-bold">Connect with me!</h1>

    <a href="https://linkedin.com/in/910jmiguel" target="_blank" rel="noopener noreferrer" className="text-white text-4xl pr-5">
    <FontAwesomeIcon icon={faLinkedin} />
    </a>

    <a href="https://github.com/910jmiguel" target="_blank" rel="noopener noreferrer" className="text-white text-4xl pr-5">
    <FontAwesomeIcon icon={faGithub} />
    </a>

    <a href="https://github.com/910jmiguel" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
    <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
  )
}

export default SocialLinks