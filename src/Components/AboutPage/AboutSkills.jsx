
import data from '../../data'

export default function AboutSkills(){
	const Data = data.info
	return <div className='section'>
						<div className='container'>

						<p data-aos='fade-right' className='about-paragraf'><b>Мои навыки 💠-></b><br/><br/></p>
						<table className='skills-table'>
							<tr data-aos='fade-right'>
								<td className='name'>Skills Name</td>
								<td colSpan='10' className='level'>Proficiency  Level</td>
							</tr>
							{Data.skills.map( el => {
								const xElements = Array.from( { length: el.level }, ( _, index ) => (
									<td className='x' key={index}>
										<div></div>
									</td>
								) )
								const xxElements = Array.from( { length: 10 - el.level }, ( _, index ) => (
									<td key={index}></td>
								) )
								return <tr data-aos='fade-right'>
									<td>{el.name}</td>
									{xElements} {/*{xxElements}*/}
								</tr>
							} )}
						</table>
						</div>
					</div>
}