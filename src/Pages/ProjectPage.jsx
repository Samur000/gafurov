import { useParams } from 'react-router'
import data from '../data'
import gitHubIcon from '../icons/github-dark.svg'
import { Helmet } from 'react-helmet'

const ProjectPage = () => {
	const { id = '' } = useParams()
	const Data = data.projects[ Number( id - 1 ) ]

	return <section className='section proj black'>
		<Helmet>
			<title>Project</title>
			<link rel="icon" type="image/png" href="../icons/site.ic.png" />
		</Helmet>
				<div className='container'>
					<h2 className='title-1 white'>{Data.title}</h2>
					<h2 className='title-2 white project-decs'>{Data.des.text}</h2>
					<div className='section__body'>
						<img className='section__img' src={Data.img} alt=''/>
						<div className='section__txt'>
							<br/>
							<p className='about-paragraf'><b>Стек технологий:</b> {Data.des.stack.join(', ')}</p>
						</div>
						{Data.url? <a target='_blank' href={Data.url} className='section__btn white'>Смотреть</a> : ''}
						{/*<a target='_blank' href={Data.url} className='section__btn white'>Смотреть</a>*/}
				    </div>
				</div>
			</section>
}

export default ProjectPage