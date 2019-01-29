import React from 'react';
import { Link } from 'react-router-dom';
import './531.css';

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
		const squat = this.state.squat * .9;
		const bench = this.state.benchPress * .9;
		const deadlift= this.state.deadlift * .9;
		const ohp = this.state.ohp * .9;
		const squatAdded = this.state.squatAdded;
		const benchAdded =this.state.benchAdded;
		const deadAdded = this.state.deadAdded;
		const ohpAdded = this.state.ohpAdded;
		const submitted = this.state.submitted;

		const squat40 = Math.floor(squat * .4);
		const squat50 = Math.floor(squat * .5);
		const squat60 = Math.floor(squat * .6);
		const squat70 = Math.floor(squat * .7);
		const squat80 = Math.floor(squat * .8); 
		const squat85 = Math.floor(squat * .85);
		const squat90 = Math.floor(squat * .9);
		const squat95 = Math.floor(squat *.95);

		const dead40 = Math.floor(deadlift * .4);
		const dead50 = Math.floor(deadlift * .5);
		const dead60 = Math.floor(deadlift * .6);
		const dead70 = Math.floor(deadlift * .7);
		const dead80 = Math.floor(deadlift * .8);
		const dead85 = Math.floor(deadlift * .85);
		const dead90 = Math.floor(deadlift * .9);
		const dead95 = Math.floor(deadlift * .95);
		
		const bench40 = Math.floor(bench * .4);
		const bench50 = Math.floor(bench * .5);
		const bench60 = Math.floor(bench * .6);
		const bench70 = Math.floor(bench * .7);
		const bench80 = Math.floor(bench * .8);
		const bench85 = Math.floor(bench * .85);
		const bench90 = Math.floor(bench * .9);
		const bench95 = Math.floor(bench * .95);

		const ohp40 = Math.floor(ohp * .4);
		const ohp50 = Math.floor(ohp * .5);
		const ohp60 = Math.floor(ohp * .6);
		const ohp70 = Math.floor(ohp * .7);
		const ohp80 = Math.floor(ohp * .8);
		const ohp85 = Math.floor(ohp * .85);
		const ohp90 = Math.floor(ohp * .9);
		const ohp95 = Math.floor(ohp * .95);
		return(
			<div className="container-ss">
				<div className="ss-title">
					WENDLER'S 5/3/1
				</div>
				<form onSubmit={this.getProgram} className="card sspage">
						<table className="card-body sspage">
							<tbody>
								<tr className="table-title">
									<th>Exercise</th>
									<th>5X1 RM (Reps X Sets)</th>
									<th>Increment (lbs)</th>
								</tr>
								<tr>
									<td>Squat</td>
									<td><input className="input-text" type="text" name="squat"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="squatWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="squatWeight" value="5"/>5
									</td>
								</tr>
								<tr>
									<td>Bench Press</td>
									<td><input className="input-text" type="text" name="benchPress"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="benchWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="benchWeight" value="5"/>5
									</td>
								</tr>
								<tr>
									<td>Deadlift</td>
									<td><input className="input-text" type="text" name="deadlift"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="deadliftWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="deadliftWeight" value="5"/>5
									</td>
								</tr>
								<tr>
									<td>Overhead Press</td>
									<td><input className="input-text" type="text" name="ohp"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="ohpWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="ohpWeight" value="5"/>5
									</td>
								</tr>
								<tr>
									<td>Power Clean</td>
									<td><input className="input-text" type="text" name="powerClean"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="powerWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="powerWeight" value="5"/>5
									</td>
								</tr>
							</tbody>
						</table>
						<div className="buttom-submit-page">
							<button className="button-submit">Submit</button>
						</div>
					</form>
				{ submitted &&  squatAdded && benchAdded && deadAdded && ohpAdded && squat && bench && deadlift && ohp !== 0
					? (				
						<div className="ss-program">
							<div>
								<table className="table-space">
									<tbody>
										<tr>
											<th className="row-spacing">Week 1</th>
										</tr>
										<tr>
											<th>Press</th>
											<th>Deadlift</th>
											<th>Bench Press</th>
											<th>Squat</th>
										</tr>
										<tr>
											<td>{squat40} 5x1</td>
											<td>{dead40} 5x1</td>
											<td>{bench40} 5x1</td>
											<td>{ohp40} 5x1</td>
										</tr>
										<tr>
											<td>{squat50} 5x1</td>
											<td>{dead50} 5x1</td>
											<td>{bench50} 5x1</td>
											<td>{ohp50} 5x1</td>
										</tr>
										<tr>
											<td>{squat60} 3x1</td>
											<td>{dead60} 3x1</td>
											<td>{bench60} 3x1</td>
											<td>{ohp60} 3x1</td>
										</tr>
										<tr>
											<td>{squat70} 5x1</td>
											<td>{dead70} 5x1</td>
											<td>{bench70} 5x1</td>
											<td>{ohp70} 5x1</td>
										</tr>
										<tr>
											<td>{squat80} 5x1</td>
											<td>{dead80} 5x1</td>
											<td>{bench80} 5x1</td>
											<td>{ohp80} 5x1</td>
										</tr>
										<tr>
											<td>{squat85} 5+x1</td>
											<td>{dead85} 5+x1</td>
											<td>{bench85} 5+x1</td>
											<td>{ohp85} 5+x1</td>
										</tr>
										<tr>
											<td>{squat50} 10x5</td>
											<td>{dead50} 10x5</td>
											<td>{bench50} 10x5</td>
											<td>{ohp50} 10x5</td>
										</tr>
										<tr>
											<th className="accessories">Chin-ups</th>
											<th className="accessories">Hanging leg raise</th>
											<th className="accessories">Dumbbell row</th>
											<th className="accessories">Leg curl</th>
										</tr>
										<tr>
											<td>10x5</td>
											<td>15x5</td>
											<td>10x5</td>
											<td>10x5</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 2</th>
										</tr>
										<tr>
											<th>Press</th>
											<th>Deadlift</th>
											<th>Bench Press</th>
											<th>Squat</th>
										</tr>
										<tr>
											<td>{squat40} 5x1</td>
											<td>{dead40} 5x1</td>
											<td>{bench40} 5x1</td>
											<td>{ohp40} 5x1</td>
										</tr>
										<tr>
											<td>{squat50} 5x1</td>
											<td>{dead50} 5x1</td>
											<td>{bench50} 5x1</td>
											<td>{ohp50} 5x1</td>
										</tr>
										<tr>
											<td>{squat60} 3x1</td>
											<td>{dead60} 3x1</td>
											<td>{bench60} 3x1</td>
											<td>{ohp60} 3x1</td>
										</tr>
										<tr>
											<td>{squat70} 3x1</td>
											<td>{dead70} 3x1</td>
											<td>{bench70} 3x1</td>
											<td>{ohp70} 3x1</td>
										</tr>
										<tr>
											<td>{squat80} 3x1</td>
											<td>{dead80} 3x1</td>
											<td>{bench80} 3x1</td>
											<td>{ohp80} 3x1</td>
										</tr>
										<tr>
											<td>{squat90} 3+x1</td>
											<td>{dead90} 3+x1</td>
											<td>{bench90} 3+x1</td>
											<td>{ohp90} 3+x1</td>
										</tr>
										<tr>
											<td>{squat50} 10x5</td>
											<td>{dead50} 10x5</td>
											<td>{bench50} 10x5</td>
											<td>{ohp50} 10x5</td>
										</tr>
										<tr>
											<th>Chin-ups</th>
											<th>Hanging leg raise</th>
											<th>Dumbbell row</th>
											<th>Leg curl</th>
										</tr>
										<tr>
											<td>10x5</td>
											<td>15x5</td>
											<td>10x5</td>
											<td>10x5</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 3</th>
										</tr>
										<tr>
											<th>Press</th>
											<th>Deadlift</th>
											<th>Bench Press</th>
											<th>Squat</th>
										</tr>
										<tr>
											<td>{squat40} 5x1</td>
											<td>{dead40} 5x1</td>
											<td>{bench40} 5x1</td>
											<td>{ohp40} 5x1</td>
										</tr>
										<tr>
											<td>{squat50} 5x1</td>
											<td>{dead50} 5x1</td>
											<td>{bench50} 5x1</td>
											<td>{ohp50} 5x1</td>
										</tr>
										<tr>
											<td>{squat60} 3x1</td>
											<td>{dead60} 3x1</td>
											<td>{bench60} 3x1</td>
											<td>{ohp60} 3x1</td>
										</tr>
										<tr>
											<td>{squat80} 5x1</td>
											<td>{dead80} 5x1</td>
											<td>{bench80} 5x1</td>
											<td>{ohp80} 5x1</td>
										</tr>
										<tr>
											<td>{squat85} 3x1</td>
											<td>{dead85} 3x1</td>
											<td>{bench85} 3x1</td>
											<td>{ohp85} 3x1</td>
										</tr>
										<tr>
											<td>{squat95} 1+x1</td>
											<td>{dead95} 1+x1</td>
											<td>{bench95} 1+x1</td>
											<td>{ohp95} 1+x1</td>
										</tr>
										<tr>
											<td>{squat50} 10x5</td>
											<td>{dead50} 10x5</td>
											<td>{bench50} 10x5</td>
											<td>{ohp50} 10x5</td>
										</tr>
										<tr>
											<th>Chin-ups</th>
											<th>Hanging leg raise</th>
											<th>Dumbbell row</th>
											<th>Leg curl</th>
										</tr>
										<tr>
											<td>10x5</td>
											<td>15x5</td>
											<td>10x5</td>
											<td>10x5</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 4</th>
										</tr>
										<tr>
											<th>Press</th>
											<th>Deadlift</th>
											<th>Bench Press</th>
											<th>Squat</th>
										</tr>
										<tr>
											<td>{squat40} 5x1</td>
											<td>{dead40} 5x1</td>
											<td>{bench40} 5x1</td>
											<td>{ohp40} 5x1</td>
										</tr>
										<tr>
											<td>{squat50} 5x1</td>
											<td>{dead50} 5x1</td>
											<td>{bench50} 5x1</td>
											<td>{ohp50} 5x1</td>
										</tr>
										<tr>
											<td>{squat60} 5x1</td>
											<td>{dead60} 5x1</td>
											<td>{bench60} 5x1</td>
											<td>{ohp60} 5x1</td>
										</tr>
										<tr>
											<th>Chin-ups</th>
											<th>Hanging leg raise</th>
											<th>Dumbbell row</th>
											<th>Leg curl</th>
										</tr>
										<tr>
											<td>10x5</td>
											<td>15x5</td>
											<td>10x5</td>
											<td>10x5</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
							) : (
								<div className="place-holder-text">Input all values to show program.</div>
								)
							}
							<div>
								<button className="button-back">
									<Link to="/strength">Back</Link>
								</button>
							</div>
						</div>
		)
	}; 
};
export default StartingStrength;

