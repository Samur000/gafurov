import data from '../data'
import AboutInfo from '../Components/AboutPage/AboutInfo'
import AboutEdu from '../Components/AboutPage/AboutEdu'
import AboutSkills from '../Components/AboutPage/AboutSkills'
import AboutJob from '../Components/AboutPage/AboutJob'
import { Helmet } from 'react-helmet'

const AboutPage = () => {
	const Data = data.info

	return <div className='about black'>
		<Helmet>
			<title>About</title>
		</Helmet>
		<div className='title-1 white'>About</div>

		<AboutInfo/>
		<AboutEdu/>
		<AboutSkills/>
		<AboutJob/>
	</div>
}

export default AboutPage