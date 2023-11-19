import data from '../../data'

export default function AboutJob (  ) {
	const Data = data.info
	return <div className='section'>
						<div className='container'>

						<p data-aos='fade-right' className='about-paragraf'><b>Опыт работы 🖥️ - более 1,5 года-></b><br/><br/></p>

							<div>
								{Data.job.map( el => {
									return <div className='job edu'>
										<div data-aos='fade-right' className='comp-name'><b> {el.companyName} - {el.jobName}</b></div>
										<div data-aos='fade-right'><b>Длительность работы:</b> {el.durationMonth}</div>
										<div data-aos='fade-right'><b>Стек технологий :</b> {el.stack.join( ' - ' )}</div>
										<div data-aos='fade-right'><b>Выполненная работа :</b> {el.desc.actions.map( el => {
											return <div data-aos='fade-right'>⚡ {el}</div>
										} )}
										</div>
										<br/>
									</div>
								} )}
							</div>
					</div>
				</div>
}
