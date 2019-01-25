import React from 'react';
import { Link } from 'react-router-dom';

class StartingStrength extends React.Component{
	state = {
		squat: 0,
		benchPress: 0,
		deadlift: 0,
		ohp: 0,
		powerClean: 0,
		squatAdded: 0,
		benchAdded: 0,
		deadAdded: 0,
		ohpAdded: 0,
		powerAdded: 0,
		submitted: false,
	}

	getProgram = async (e) => {
		e.preventDefault();
		this.setState({
			squat: Number(e.target.elements.squat.value),
			benchPress: Number(e.target.elements.benchPress.value),
			deadlift: Number(e.target.elements.deadlift.value),
			ohp: Number(e.target.elements.ohp.value),
			powerClean: Number(e.target.elements.powerClean.value),
			squatAdded: Number(e.target.elements.squatWeight.value),
			benchAdded: Number(e.target.elements.benchWeight.value),
			deadAdded: Number(e.target.elements.deadliftWeight.value),
			ohpAdded: Number(e.target.elements.ohpWeight.value),
			powerAdded: Number(e.target.elements.powerWeight.value),
			submitted: true,
		})
		console.log(this.state);
	}

	render(){
		const squat = this.state.squat;
		const bench = this.state.benchPress;
		const deadlift= this.state.deadlift;
		const ohp = this.state.ohp;
		const powerClean = this.state.powerClean;
		const squatAdded = this.state.squatAdded;
		const benchAdded =this.state.benchAdded;
		const deadAdded = this.state.deadAdded;
		const ohpAdded = this.state.ohpAdded;
		const powerAdded = this.state.powerAdded;
		const submitted = this.state.submitted;
		return(
			<div>
			<form onSubmit={this.getProgram} className="card">
					<table className="card-body">
						<tbody>
							<tr>
								<th>Exercise</th>
								<th>1RM</th>
								<th>Increment (lbs)</th>
							</tr>
							<tr>
								<td>Squat</td>
								<td><input type="text" name="squat"/></td>
								<td>
								<input type="radio" id="2.5" name="squatWeight" value="2.5"/>2.5
								<input type="radio" id="5" name="squatWeight" value="5"/>5
								<input type="radio" id="10" name="squatWeight" value="10"/>10
								</td>
							</tr>
							<tr>
								<td>Bench Press</td>
								<td><input type="text" name="benchPress"/></td>
								<td>
								<input type="radio" id="2.5" name="benchWeight" value="2.5"/>2.5
								<input type="radio" id="5" name="benchWeight" value="5"/>5
								<input type="radio" id="10" name="benchWeight" value="10"/>10
								</td>
							</tr>
							<tr>
								<td>Deadlift</td>
								<td><input type="text" name="deadlift"/></td>
								<td>
								<input type="radio" id="2.5" name="deadliftWeight" value="2.5"/>2.5
								<input type="radio" id="5" name="deadliftWeight" value="5"/>5
								<input type="radio" id="10" name="deadliftWeight" value="10"/>10
								</td>
							</tr>
							<tr>
								<td>Overhead Press</td>
								<td><input type="text" name="ohp"/></td>
								<td>
								<input type="radio" id="2.5" name="ohpWeight" value="2.5"/>2.5
								<input type="radio" id="5" name="ohpWeight" value="5"/>5
								<input type="radio" id="10" name="ohpWeight" value="10"/>10
								</td>
							</tr>
							<tr>
								<td>Power Clean</td>
								<td><input type="text" name="powerClean"/></td>
								<td>
								<input type="radio" id="2.5" name="powerWeight" value="2.5"/>2.5
								<input type="radio" id="5" name="powerWeight" value="5"/>5
								<input type="radio" id="10" name="powerWeight" value="10"/>10
								</td>
							</tr>
						</tbody>
					</table>
					<button>Submit</button>
				</form>
				{ submitted &&  squatAdded && benchAdded && deadAdded && ohpAdded && squat && bench && deadlift && ohp !== 0
					? (				
						<div>
							<div>
								<table className="card">
									<tbody className="card-body">
										<tr>
											<th>Phase 1</th>
										</tr>
										<tr>
											<th>Week 1</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat} 5x3</td>
											<td>Squat: {squat + squatAdded} 5x3</td>
											<td>Squat: {squat + squatAdded*2} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench} 5x3</td>
											<td>Overhead Press: {ohp} 5x3 </td>
											<td>Bench Press: {bench + benchAdded} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded*2} 5x3</td>
										</tr>
										<tr>
											<th>Week 2</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*3} 5x3</td>
											<td>Squat: {squat + squatAdded*4} 5x3</td>
											<td>Squat: {squat + squatAdded*5} 5x3</td>
										</tr>
										<tr>
											<td>Overhead Press: {ohp + ohpAdded} 5x3</td>
											<td>Bench Press: {bench + benchAdded*2} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*2} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*3} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded*4} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded*5} 5x3</td>
										</tr>
										<tr>
											<th>Week 3</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*6} 5x3</td>
											<td>Squat: {squat + squatAdded*7} 5x3</td>
											<td>Squat: {squat + squatAdded*8} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench + benchAdded*3} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*3} 5x3</td>
											<td>Bench Press: {bench + benchAdded*4} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*6} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded*7} 5x3</td>
											<td>Deadlift: {deadlift + deadAdded*8} 5x3</td>
										</tr>
										<tr>
											<th>Phase 2</th>
										</tr>
										<tr>
											<th>Week 1</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*9} 5x3</td>
											<td>Squat: {squat + squatAdded*10} 5x3</td>
											<td>Squat: {squat + squatAdded*11} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench + benchAdded*5} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*4} 5x3 </td>
											<td>Bench Press: {bench + benchAdded*6} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*9} 5x3</td>
											<td>Power Clean: {powerClean} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*11} 5x3</td>
										</tr>
										<tr>
											<th>Week 2</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*12} 5x3</td>
											<td>Squat: {squat + squatAdded*13} 5x3</td>
											<td>Squat: {squat + squatAdded*14} 5x3</td>
										</tr>
										<tr>
											<td>Overhead Press: {ohp + ohpAdded*5} 5x3</td>
											<td>Bench Press: {bench + benchAdded*7} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*6} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*12} 5x3</td>
											<td>Power Clean: {powerClean + powerAdded} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*14} 5x3</td>
										</tr>
										<tr>
											<th>Week 3</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*15} 5x3</td>
											<td>Squat: {squat + squatAdded*16} 5x3</td>
											<td>Squat: {squat + squatAdded*17} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench + benchAdded*8} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*7} 5x3</td>
											<td>Bench Press: {bench + benchAdded*9} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*15} 5x3</td>
											<td>Power Clean: {powerClean + powerAdded*2} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*17} 5x3</td>
										</tr>
										<tr>
											<th>Phase 3</th>
										</tr>
										<tr>
											<th>Week 1</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*17 + squatAdded*.5} 5x3</td>
											<td>Squat: {(squat + squatAdded*17 + squatAdded*.5)*.8} 5x3</td>
											<td>Squat: {squat + squatAdded*18} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench + benchAdded*9 + benchAdded*.5} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*7 + ohpAdded*.5} 5x3 </td>
											<td>Bench Press: {bench + benchAdded*10} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*17 + deadAdded*.5} 5x3</td>
											<td>Power Clean: {powerClean + powerAdded*2 + powerAdded*.5} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*18} 5x3</td>
										</tr>
										<tr>
											<th>Week 2</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*18 + squatAdded*.5} 5x3</td>
											<td>Squat: {(squat + squatAdded*18 + squatAdded*.5)*.8} 5x3</td>
											<td>Squat: {squat + squatAdded*19} 5x3</td>
										</tr>
										<tr>
											<td>Overhead Press: {ohp + ohpAdded*8} 5x3</td>
											<td>Bench Press: {bench + benchAdded*10 + benchAdded*.5} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*8 + ohpAdded*.5} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*18 + deadAdded*.5} 5x3</td>
											<td>Power Clean: {powerClean + powerAdded*3} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*19} 5x3</td>
										</tr>
										<tr>
											<th>Week 3</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squat + squatAdded*19 + squatAdded*.5} 5x3</td>
											<td>Squat: {(squat + squatAdded*19 + squatAdded*.5)*.8} 5x3</td>
											<td>Squat: {squat + squatAdded*20} 5x3</td>
										</tr>
										<tr>
											<td>Bench Press: {bench + benchAdded*11} 5x3</td>
											<td>Overhead Press: {ohp + ohpAdded*9} 5x3</td>
											<td>Bench Press: {bench + benchAdded*11 + benchAdded*.5} 5x3</td>
										</tr>
										<tr>
											<td>Deadlift: {deadlift + deadAdded*19 + deadAdded*.5} 5x3</td>
											<td>Power Clean: {powerClean + powerAdded*3 + powerAdded*.5} 3x5</td>
											<td>Deadlift: {deadlift + deadAdded*20} 5x3</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
							) : (
								<div>Input all values to show program.</div>
								)
							}
							<div>
								<button>
									<Link to="/strength">Back</Link>
								</button>
							</div>
						</div>
		)
	}; 
};
export default StartingStrength;

