import React, { useState, useEffect, useRef } from 'react'
import cv from '../cv/resume-2.pdf'
import main from '../img/main.png'



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
		}} className='header'>
			<svg width="auto" height="auto" viewBox="0 0 170 170" fill="none" >
				<path d="M145 25H25V145H145V25Z" stroke="#393939" stroke-width="0.5" class="svg-elem-1"></path>
				<path d="M133.67 15.4926L15.4926 36.3304L36.3304 154.507L154.507 133.67L133.67 15.4926Z" stroke="#393939" stroke-width="0.5" className="svg-elem-2"></path>
				<path d="M120.86 8.09723L8.09721 49.1396L49.1396 161.903L161.903 120.86L120.86 8.09723Z" stroke="#393939" stroke-width="0.5" className="svg-elem-3"></path>
				<path d="M106.961 3.03849L3.03845 63.0385L63.0385 166.962L166.961 106.962L106.961 3.03849Z" stroke="#393939" stroke-width="0.5" className="svg-elem-4"></path>
				<path d="M92.3954 0.470088L0.470047 77.6046L77.6046 169.53L169.53 92.3954L92.3954 0.470088Z" stroke="#393939" stroke-width="0.5" className="svg-elem-5"></path>
				<path d="M77.6046 0.470082L0.470047 92.3954L92.3954 169.53L169.53 77.6046L77.6046 0.470082Z" stroke="#393939" stroke-width="0.5" className="svg-elem-6"></path>
				<path d="M63.0384 3.03849L3.03845 106.962L106.962 166.962L166.962 63.0385L63.0384 3.03849Z" stroke="#393939" stroke-width="0.5" className="svg-elem-7"></path>
				<path d="M63.0384 3.03849L3.03845 106.962L106.962 166.962L166.962 63.0385L63.0384 3.03849Z" stroke="#393939" stroke-width="0.5" className="svg-elem-8"></path>
				<path d="M36.3304 15.4927L15.4926 133.67L133.67 154.507L154.507 36.3305L36.3304 15.4927Z" stroke="#393939" stroke-width="0.5" className="svg-elem-9"></path>
				<path d="M49.1396 8.09726L8.09718 120.86L120.86 161.903L161.903 49.1397L49.1396 8.09726Z" stroke="#393939" stroke-width="0.5" className="svg-elem-10"></path>
			</svg>

			<div className='container'>
				<div>

					<h1 className='header__title' data-aos='fade-right'>
						<div><strong>Привет, меня зовут <span>&#60;Самур /{'>'}</span></strong><br />
							Я <span>Front-End</span> разработчик
						</div>
					</h1>
					<div className='header__text' data-aos='fade-left'>
						<p>На простом языке сайтовик или же разработчик сайтов</p>
						<p>Не на простом языке пижу веб приложения на стеке <span className='rct'>React</span> + <span className='ts'>TypeScript</span></p>
					</div>
					{/* <br /> */}
					<a href={cv} className='btn white' download='resume_S_Gafurov.pdf'>Скачать резюме</a>
				</div>
				<div>
					<img src={main} alt="" />
				</div>
			</div>
		</header>
	)
}

export default MainBlock