import 'aos/dist/aos.css'
import ProjectsBlock from '../Components/ProjectsBlock'
import MainBlock from '../Components/MainBlock'
import AboutBlock from '../Components/AboutBlock'
import { Helmet } from 'react-helmet'
import icon from '../icons/site.ic.png'

const HomePage = () => {

	return <div style={{overflow: 'hidden'}}>
		<Helmet>
			<title>G.Samur</title>
			<link rel="icon" type="image/png" href={icon} />
		</Helmet>
		<MainBlock/>
		<AboutBlock/>
		<ProjectsBlock/>
	</div>
}

export default HomePage