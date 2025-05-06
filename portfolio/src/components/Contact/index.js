import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown, faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rak6dir', 'template_4t6slro', form.current, 'AoZzkaej0r6R-GfpE')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }).catch(err => {
      console.error('Failed to copy text:', err);
    });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities. 
            If you have any requests or questions,
            feel free to contact me using the form below.
          </p>
        </div>
        <div className='contact'>  
          <div className='contact-zone'>
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input placeholder="Email" type="email" name="email" required />
                    </li>
                    <li>
                      <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                      <textarea placeholder="Message" name="message" required></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
          </div>
          <div className='info-zone'>
            <div className="contact-info">
              <div className="info-item" onClick={() => copyToClipboard("Santa Ana, San José, Costa Rica")}>
                <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                <p>Santa Ana, San José, Costa Rica</p>
              </div>
              <div className="info-item" onClick={() => copyToClipboard("(+506) 85465812")}>
                <FontAwesomeIcon icon={faPhone}  className='icon'/>
                <p>(+506) 85465812</p>
              </div>
              <div className="info-item" onClick={() => copyToClipboard("oscar_es46@outlook.com")}>
                <FontAwesomeIcon icon={faEnvelope}  className='icon'/>
                <p>oscar_es46@outlook.com</p>
              </div>
            </div>
            <div className="social-links">
              <a target="_blank" rel='noreferrer' href="https://github.com/Scar-46">
                <FontAwesomeIcon icon={faGithub} className="git-button"/>
              </a>
              <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/oscar-fer-jim/">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-button"/>
              </a>
              <a href="/cv/OscarFernándezJiménez_CV.pdf" download>
                <FontAwesomeIcon icon={faFileArrowDown} className="cv-button"/>
              </a>
            </div>
          </div>
        </div>  
        <div className="separator"></div>
      </div>
    </>
  );
};

export default Contact;
