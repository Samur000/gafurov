import data from '../data'
import AboutInfo from '../Components/AboutPage/AboutInfo'
import AboutEdu from '../Components/AboutPage/AboutEdu'
import AboutSkills from '../Components/AboutPage/AboutSkills'
import AboutJob from '../Components/AboutPage/AboutJob'
import { Helmet } from 'react-helmet'
import AboutStack from '../Components/AboutPage/AboutStack'

const AboutPage = () => {
	const Data = data.info

	return <div className='section about black'>
		<Helmet>
			<title>About</title>
		</Helmet>
		<div className='container'>

			<div className='title-1 white'>About</div>
			<AboutInfo/>
			<AboutStack/>
			<AboutEdu/>
			{/*<AboutSkills/>*/}
			<AboutJob/>
		</div>
	</div>
}

export default AboutPage