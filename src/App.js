import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ContactsPage from './Pages/Contacts'
import Aos from 'aos'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'
import ProjectPage from './Pages/ProjectPage'
import icon from './icons/site.ic.png'
import { Helmet } from 'react-helmet'

function App(){
    Aos.init( {
        duration: 1500,
        once: true,
    } )
    return <div className='App'>
		<Helmet>
			<link rel='icon' type='image/png' href={icon}/>
		</Helmet>
		<Header/>

		<div className='routes'>
		<Routes>
			<Route path='/' element={<HomePage/>}/>
				<Route path='projects' element={<Projects/>}/>
				<Route path='project/:id' element={<ProjectPage/>}/>
				<Route path='about' element={<AboutPage/>}/>
				<Route path='contacts' element={<ContactsPage/>}/>
		</Routes>
		</div>

		<Footer/>
    </div>

}

export default App
