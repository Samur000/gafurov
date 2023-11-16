import { Link } from 'react-router-dom'
export default function AboutBlock(){

	return <div>
		<div className='section black'>
			<div className='container'>
				<h1 className='title-1 white' data-aos='fade-right'>About</h1>
				<p data-aos='fade-right' className='about-paragraf'><b> Кто я? -></b><br/> <div> Я создаватель красивых и интуитивно понятных интерфейсов, которые делают жизнь пользователей проще и удобнее !</div> </p><br/>
				<p data-aos='fade-right' className='about-paragraf'><b> Как я это делаю? -></b><br/> Достаю бубны и шаманю)</p><br/>
				<p data-aos='fade-right' className='about-paragraf'><b> Шутка конечно :) -></b><br/> Переходи по <Link to='/about'>ссылке</Link> и узнай какими инструментами я пользуюсь !</p><br/>
			</div>
		</div>
	</div>
}

