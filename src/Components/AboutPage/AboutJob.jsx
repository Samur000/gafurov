import data from '../../data'

export default function AboutJob (  ) {
	const Data = data.info
	return <div className='section'>
						<div className='container'>

						<p data-aos='fade-right' className='about-paragraf'><b>Мой опыт в разработке-></b><br/><br/></p>

							<div>
								{Data.job.map( el => {
									return <div className='job edu'>
										<div data-aos='fade-right' className='comp-name'><b> {el.companyName} - {el.jobName}</b></div>
										<div data-aos='fade-right'><b>Длительность работы:</b> {el.durationMonth}</div>
										<div data-aos='fade-right'><b>Стек технологий :</b> {el.stack.join( ' - ' )}</div>
										<div data-aos='fade-right'><b>Ситуация :</b> {el.desc.situation}</div>
										<div data-aos='fade-right'><b>Моя задача :</b> {el.desc.task}</div>
										<div data-aos='fade-right'><b>Выполненные действия :</b> {el.desc.actions.map( el => {
											return <div>⚡ {el}</div>
										} )}
										</div>
										<div data-aos='fade-right'><b>Результат :</b> {el.desc.result}</div>
										<br/><br/>
									</div>
								} )}
							</div>
					</div>
				</div>
}
