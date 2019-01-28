import React from 'react';
import { Link } from 'react-router-dom';
import './Startingstrength.css';

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
		const squatWeek1A = Math.floor(squat * .85);
		const squatWeek1B = Math.floor((squat*.85)*.85);
		const squatWeek1C = Math.floor(squat);
		const squatWeek2A = Math.floor((squat + squatAdded) * .85);
		const squatWeek2B = Math.floor(((squat + squatAdded) * .85) * .85); 
		const squatWeek2C = Math.floor((squat + squatAdded));
		const squatWeek3A = Math.floor(((squat + squatAdded * 2) * .85));
		const squatWeek3B = Math.floor(((squat + squatAdded * 2) * .85) * .85)
		const squatWeek3C = Math.floor((squat + squatAdded * 2));
		const deadWeek1A = Math.floor(deadlift * .85);
		const deadWeek1B = Math.floor((deadlift*.85)*.85);
		const deadWeek1C = Math.floor(deadlift);
		const deadWeek2A = Math.floor((deadlift + deadAdded) * .85);
		const deadWeek2B = Math.floor(((deadlift + deadAdded) * .85) * .85); 
		const deadWeek2C = Math.floor((deadlift + deadAdded));
		const deadWeek3A = Math.floor(((deadlift + deadAdded * 2) * .85));
		const deadWeek3B = Math.floor(((deadlift + deadAdded * 2) * .85) * .85)
		const deadWeek3C = Math.floor((deadlift + deadAdded * 2));
		const benchWeek1A = Math.floor(bench * .85);
		const benchWeek1B = Math.floor((bench*.85)*.85);
		const benchWeek1C = Math.floor(bench);
		const benchWeek2A = Math.floor((bench + benchAdded) * .85);
		const benchWeek2B = Math.floor(((bench + benchAdded) * .85) * .85); 
		const benchWeek2C = Math.floor((bench + benchAdded));
		const benchWeek3A = Math.floor(((bench + benchAdded * 2) * .85));
		const benchWeek3B = Math.floor(((bench + benchAdded * 2) * .85) * .85)
		const benchWeek3C = Math.floor((bench + benchAdded * 2));
		const ohpWeek1A = Math.floor(ohp * .85);
		const ohpWeek1B = Math.floor((ohp*.85)*.85);
		const ohpWeek1C = Math.floor(ohp);
		const ohpWeek2A = Math.floor((ohp + ohpAdded) * .85);
		const ohpWeek2B = Math.floor(((ohp + ohpAdded) * .85) * .85); 
		const ohpWeek2C = Math.floor((ohp + ohpAdded));
		return(
			<div className="container-ss">
				<div className="ss-title">
					TEXAS METHOD
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
											<th></th>
											<th className="row-spacing">Week 1</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squatWeek1A} 5x5</td>
											<td>Squat: {squatWeek1B} 5x2</td>
											<td>Squat: {squatWeek1C} 5x1</td>
										</tr>
										<tr>
											<td>Bench Press: {benchWeek1A} 5x5</td>
											<td>Overhead Press: {ohpWeek1B} 5x2 </td>
											<td>Bench Press: {benchWeek1C} 5x1</td>
										</tr>
										<tr>
											<td>Deadlift: {deadWeek1A} 5x5</td>
											<td>Deadlift: {deadWeek1B} 5x2</td>
											<td>Deadlift: {deadWeek1C} 5x1</td>
										</tr>
										<tr>
											<th></th>
											<th className="row-spacing">Week 2</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squatWeek2A} 5x5</td>
											<td>Squat: {squatWeek2B} 5x3</td>
											<td>Squat: {squatWeek2C} 5x1</td>
										</tr>
										<tr>
											<td>Overhead Press: {ohpWeek2A} 5x5</td>
											<td>Bench Press: {benchWeek1B} 5x2</td>
											<td>Overhead Press: {ohpWeek2C} 5x1</td>
										</tr>
										<tr>
											<td>Deadlift: {deadWeek2A} 5x5</td>
											<td>Deadlift: {deadWeek2B} 5x2</td>
											<td>Deadlift: {deadWeek2C} 5x1</td>
										</tr>
										<tr>
											<th></th>
											<th className="row-spacing">Week 3</th>
										</tr>
										<tr>
											<th>Day A</th>
											<th>Day B</th>
											<th>Day A</th>
										</tr>
										<tr>
											<td>Squat: {squatWeek3A} 5x5</td>
											<td>Squat: {squatWeek3B} 5x2</td>
											<td>Squat: {squatWeek3C} 5x1</td>
										</tr>
										<tr>
											<td>Bench Press: {benchWeek2A} 5x5</td>
											<td>Overhead Press: {ohpWeek2B} 5x2</td>
											<td>Bench Press: {benchWeek2C} 5x1</td>
										</tr>
										<tr>
											<td>Deadlift: {deadWeek3A} 5x5</td>
											<td>Deadlift: {deadWeek3B} 5x3</td>
											<td>Deadlift: {deadWeek3C} 5x1</td>
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

