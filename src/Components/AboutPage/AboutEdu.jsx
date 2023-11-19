import data from '../../data'

export default function AboutEdu (  ) {
	const Data = data.info
	return <div className='section'>
		<div className='container'>
			<p data-aos='fade-right' className='about-paragraf'><b>Мое ообразование 🎓-></b><br/><br/></p>
			<div className='edu'>
				<div data-aos='fade-right'><b>Высшее - </b> {Data.edu.admissionYear} - {Data.edu.graduationYear}</div>
				<div data-aos='fade-right'><b>Название -</b> {Data.edu.name}</div>
				<div data-aos='fade-right'><b>Факультет -</b> {Data.edu.faculty}</div>
				<div data-aos='fade-right'><b>Направление -</b> {Data.edu.direction}</div>
			</div>
		</div>
	</div>
}