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
			<svg width="auto" height="auto" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M122.727 9.26473L9.26459 48.3329L48.3328 161.795L161.795 122.727L122.727 9.26473Z" stroke="#393939" stroke-width="0.5" class="svg-elem-1"></path>
				<path d="M115.938 6.31299L6.31293 55.1214L55.1213 164.747L164.747 115.938L115.938 6.31299Z" stroke="#393939" stroke-width="0.5" class="svg-elem-2"></path>
				<path d="M108.919 3.96426L3.96423 62.1414L62.1414 167.096L167.096 108.919L108.919 3.96426Z" stroke="#393939" stroke-width="0.5" class="svg-elem-3"></path>
				<path d="M101.721 2.23612L2.23621 69.3393L69.3394 168.824L168.824 101.721L101.721 2.23612Z" stroke="#393939" stroke-width="0.5" class="svg-elem-4"></path>
				<path d="M94.3996 1.14195L1.14209 76.6604L76.6605 169.918L169.918 94.3994L94.3996 1.14195Z" stroke="#393939" stroke-width="0.5" class="svg-elem-5"></path>
				<path d="M87.011 0.690037L0.690247 84.049L84.0492 170.37L170.37 87.0108L87.011 0.690037Z" stroke="#393939" stroke-width="0.5" class="svg-elem-6"></path>
				<path d="M79.611 0.883826L0.883972 91.4489L91.4491 170.176L170.176 79.6109L79.611 0.883826Z" stroke="#393939" stroke-width="0.5" class="svg-elem-7"></path>
				<path d="M72.2556 1.72179L1.72137 98.8038L98.8034 169.338L169.338 72.256L72.2556 1.72179Z" stroke="#393939" stroke-width="0.5" class="svg-elem-8"></path>
				<path d="M65.0022 3.19763L3.19763 106.058L106.058 167.862L167.862 65.0022L65.0022 3.19763Z" stroke="#393939" stroke-width="0.5" class="svg-elem-9"></path>
				<path d="M57.9043 5.30007L5.29974 113.155L113.155 165.76L165.76 57.9046L57.9043 5.30007Z" stroke="#393939" stroke-width="0.5" class="svg-elem-10"></path>
				<path d="M51.017 8.01305L8.01282 120.043L120.042 163.047L163.047 51.0172L51.017 8.01305Z" stroke="#393939" stroke-width="0.5" class="svg-elem-11"></path>
				<path d="M44.3923 11.3159L11.3158 126.667L126.667 159.744L159.744 44.3924L44.3923 11.3159Z" stroke="#393939" stroke-width="0.5" class="svg-elem-12"></path>
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