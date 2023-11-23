import data from '../../data'

export default function AboutStack(){
    const Data = data.info
    return <div className='section'>
		<div className='container'>
			<p data-aos='fade-right' className='about-paragraf'><b>Навыки 👾 -></b><br/><br/></p>
			<div className='edu'>
				<div data-aos='fade-right'>⚡ Html, CSS ( SASS / SCSS ), JavaScript</div>
				<div data-aos='fade-right'>⚡ React, React Router, Next.js, Svelte, Redux, TypeScript, Axios</div>
				<div data-aos='fade-right'>⚡ Styled Components, Bootstrap, React-Bootstrap, Ant Design</div>
				<div data-aos='fade-right'>⚡ WebsStorm , GitHub , Figma , ClickUp</div>
			</div>
		</div>
	</div>
}