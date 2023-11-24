import data from '../data'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Projects = () => {
	return <div>
		<div className='section black'>
			<Helmet>
				<title>Projects</title>
			</Helmet>
			<div className='container'>
				<h2 className='title-1 white' data-aos='fade-down-right'>Проекты</h2>
				<ul className='projects'>
					{data.projects.map(el => {
						return <div key={el.id} data-aos='fade-up-right'>
							<li key={el.id} className='project'>
								<Link to={`/project/${el.id}`}>
									<img src={el.img} alt={el.title} className='project__img' />
									<h3 className='project__title'>{el.title}</h3>
								</Link>
							</li>
						</div>
					})}
				</ul>
			</div>
		</div>
	</div>
}

export default Projects