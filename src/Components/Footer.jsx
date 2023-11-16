import React, { useState } from 'react'
import imstagramLogo from '../icons/instagram.svg'
import gitHubLogo from '../icons/gitHub.svg'
import telegramLogo from '../icons/telegram.svg'

const Footer = () => {
	return <>
    <footer class='footer'>
      <div class='container'>
         <div class='footer__text'>&copy; 2023 Frontend React Dev</div>
         <ul class='socials'>
            <li class='socials__item'><a target='_blank' href='https://instagram.com/qafurov_05'><img src={imstagramLogo} alt=''/></a></li>
            <li class='socials__item'><a target='_blank' href='https://t.me/qafurov'><img src={telegramLogo} alt='telegram'/></a></li>
            <li class='socials__item'><a target='_blank' href='https://github.com/Samur000'><img src={gitHubLogo} alt=''/></a></li>
         </ul>
      </div>
   </footer>
    </>
}

export default Footer