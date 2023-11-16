	import { Helmet } from 'react-helmet'
import tg from '../icons/telegram.svg'
import gh from '../icons/gitHub.svg'
import inst from '../icons/instagram.svg'
import mail from '../icons/mail.svg'
import wh from '../icons/whatsapp.svg'

const ContactsPage = () => {
	return<div className='section black'>
		<Helmet>
			<title>Contacts</title>
		</Helmet>
			<div className='container contacts'>
				<div className='title-1 white'>Contacts</div>

				<p className='about-paragraf'>
					<b>Хочешь сотрудничать, или есть что сказать? -></b><br/><br/>
					Напиши мне по оставленным ниже контактам !
				</p><br/><br/><br/>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2"> <img src={tg} alt=''/> Telegram -> </h2>
						<a target='_blank' href='https://t.me/qafurov'>@qafurov</a>
					</li>

					<li className="content-list__item">
						<h2 className="title-2"> <img src={wh} alt=''/> Whatsapp -></h2>
						<a target='_blank' href='https://wa.me/79286791610'>+7 (928) 679-16-10</a>
					</li>
					<li className="content-list__item">
						<h2 className="title-2"> <img src={mail} alt=''/> Gmail -></h2>
						<p><a target="_blank" href="mailto:qsamur@gmail.com">qsamur@gmail.com</a></p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2"> <img src={gh} alt=''/> GitHub</h2>
						<p><a target="_blank" href="https://github.com/Samur000">Samur000</a></p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2"> <img src={inst} alt=''/> Instagram -></h2>
						<p><a target="_blank" href="https://www.instagram.com/qafurov_05">qafurov_05</a></p>
					</li>
				</ul>
			</div>
		</div>
}

export default ContactsPage