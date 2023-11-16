import React, { useState, useEffect, useRef } from 'react'
import bgImage from '../img/header-bg.svg'
import cv from '../cv/resume.pdf'

const extractTextFromChildren = (children) => {
	let text = '';

	React.Children.forEach(children, (child) => {
		if (typeof child === 'string') {
			text += child;
		} else if (React.isValidElement(child)) {
			text += extractTextFromChildren(child.props.children);
		}
	});

	return text;
};

const Typewriter = ({ children }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const text = extractTextFromChildren(children);

		if (currentIndex < text.length) {
			const intervalId = setInterval(() => {
				setDisplayText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, 100);

			return () => clearInterval(intervalId);
		}
	}, [currentIndex, children]);

	return (
		<div>
      <span>{displayText}</span>
    </div>
	);
};
const MainBlock = () => {
	return (
		<header style={{
			backgroundImage: `url("${bgImage}")`,
		}} className='header'>
			<div className='container'>
				<h1 className='header__title' data-aos='fade-right'>
					<div><strong>Привет, меня зовут <span>&#60;Самур /></span></strong><br/>
						Я <span>Front-End</span> разработчик
					</div>
				</h1><br/>
				<div className='header__text' data-aos='fade-left'>
					<p>На простом языке <span>сайтовик</span> или же <span>разработчик сайтов</span><br/></p>
					<p>На простом языке пижу веб приложения на стеке <span className='rct'>React</span> + <span className='ts'>TS</span></p>
				</div>
				<br/>
				<a href={cv} className='btn white' download='resume_S_Gafurov.pdf'>Скачать резюме</a>
				</div>
		</header>
	)
}

export default MainBlock