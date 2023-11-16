import data from '../data'
import { Link } from 'react-router-dom'

const ProjectsBlock = () => {
	return (
		<div className='section black'>
			<div className='container'>
				<h2 className='title-1 white' data-aos='fade-right'>Проекты</h2>
         		<ul className='projects'>
			 		{data.projects.slice( 0, 4 ).map( el => {
						return <div key={el.id} data-aos='fade-right'>
							 <li key={el.id} className='project'>
								<Link to={`/project/${el.id}`}>
									<img src={el.img} alt={el.title} className='project__img'/>
									<h3 className='project__title'>{el.title}</h3>
			 					</Link>
		 					</li>
						</div>
					} )}
         		</ul>
		  	<Link to='/projects' className='section__btn white home'>Все проекты</Link>
		</div>
		</div>
	)
}

export default ProjectsBlock