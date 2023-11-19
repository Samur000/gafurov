import data from '../../data'

export default function AboutStack(){
    const Data = data.info
    return <div className='section'>
		<div className='container'>
			{/*<p data-aos='fade-right' className='about-paragraf'><b>Стек технологий -></b><br/><br/></p>*/}
			{/*<div className='edu'>*/}
			{/*	<div data-aos='fade-right'><b>Основной: -> </b> React - JavaScript - TypeScript</div>*/}
			{/*	<div data-aos='fade-right'><b>Работаю хорошо с: -> </b>HTML - CSS(SASS / SCSS) - JavaScript - Bootstrap - REST API</div>*/}
			{/*	<div data-aos='fade-right'><b>Также знаю: -> </b>Nexst.js - Swelte - jQuery - Tailwind</div>*/}
			{/*</div>*/}
			<p data-aos='fade-right' className='about-paragraf'><b>Навыки 👾 -></b><br/><br/></p>
			<div className='edu'>
				<div data-aos='fade-right'>⚡ Html, CSS ( SASS / SCSS ), JavaScript</div>
				<div data-aos='fade-right'>⚡ React, React Router, Next.js, Svelte, Redux, TypeScript</div>
				<div data-aos='fade-right'>⚡ JWT, Private Route, Axios</div>
				<div data-aos='fade-right'>⚡ Styled Components, Bootstrap, React-Bootstrap, Ant Design</div>
				<div data-aos='fade-right'>⚡ WebsStorm , GitHub , Figma , ClickUp</div>
			</div>
		</div>
	</div>
}