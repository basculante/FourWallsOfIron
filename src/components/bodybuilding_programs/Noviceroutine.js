import React from 'react';
import { Link } from 'react-router-dom';
import './Noviceroutine.css';


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
			squatAdded: Number(e.target.elements.squatWeight.value),
			benchAdded: Number(e.target.elements.benchWeight.value),
			deadAdded: Number(e.target.elements.deadliftWeight.value),
			ohpAdded: Number(e.target.elements.ohpWeight.value),
			submitted: true,
		})
		console.log(this.state);
	}

	render(){
		const squat = this.state.squat * .8;
		const bench = this.state.benchPress * .8;
		const deadlift= this.state.deadlift * .8;
		const ohp = this.state.ohp * .7;
		const squatAdded = this.state.squatAdded;
		const benchAdded =this.state.benchAdded;
		const deadAdded = this.state.deadAdded;
		const ohpAdded = this.state.ohpAdded;
		const submitted = this.state.submitted;

		return(
			<div className="container-ss">
				<div className="ss-title">
					NOVICE ROUTINE
				</div>
				<form onSubmit={this.getProgram} className="card sspage">
						<table className="card-body novice">
							<tbody className="table-body">
								<tr className="table-title">
									<th>Exercise</th>
									<th>1 RM (Reps X Sets)</th>
									<th>Increment (lbs)</th>
								</tr>
								<tr>
									<td >Squat Variant</td>
									<td><input className="input-text" type="text" name="squat"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="squatWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="squatWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="squatWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Horizontal Push Variant</td>
									<td><input className="input-text" type="text" name="benchPress"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="benchWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="benchWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="benchWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Deadlift Variant</td>
									<td><input className="input-text" type="text" name="deadlift"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="deadliftWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="deadliftWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="deadliftWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Vertical Push Variant</td>
									<td><input className="input-text" type="text" name="ohp"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="ohpWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="ohpWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="ohpWeight" value="10"/>10
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
											<th>Day 1</th>
											<th>Day 2</th>
											<th>Day 3</th>
											<th>Day 4</th>
										</tr>
										<tr>
											<td>Squat Variant: {squat} 5x3</td>
											<td>Horizontal Push: {bench} 5x3</td>
											<td>Hip Hinge Variant: 8x3</td>
											<td>Horizontal Push: {bench} 10x3</td>
										</tr>
										<tr>
											<td>Deadlift Variant: {deadlift} 5x3</td>
											<td>Horizontal Pull: 5x3 </td>
											<td>Leg Press Variant: 8x3</td>
											<td>Horizontal Pull: 10x3</td>
										</tr>
										<tr>
											<td>Single Leg Variant: 8x3</td>
											<td>Vertical Push: {ohp} 8x2</td>
											<td>Leg Extension: 12x3</td>
											<td>Incline Push: 12x2</td>
										</tr>
										<tr>
											<td>Standing Calf Raises: 8x4</td>
											<td>Vertical Pull: 8x2</td>
											<td>Leg Curl: 12x3</td>
											<td>Vertical Pull: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td>Flys: 15x2</td>
											<td>Seated Calf Raise: 15x4</td>
											<td>Triceps Isolation: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td></td>
											<td></td>
											<td>Biceps Isolation: 12x2</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 2</th>
										</tr>
										<tr>
											<th>Day 1</th>
											<th>Day 2</th>
											<th>Day 3</th>
											<th>Day 4</th>
										</tr>
										<tr>
											<td>Squat Variant: {squat + squatAdded} 5x3</td>
											<td>Horizontal Push: {bench + benchAdded} 5x3</td>
											<td>Hip Hinge Variant: 8x3</td>
											<td>Horizontal Push: {bench + benchAdded} 10x3</td>
										</tr>
										<tr>
											<td>Deadlift Variant: {deadlift + deadAdded} 5x3</td>
											<td>Horizontal Pull: 5x3 </td>
											<td>Leg Press Variant: 8x3</td>
											<td>Horizontal Pull: 10x3</td>
										</tr>
										<tr>
											<td>Single Leg Variant: 8x3</td>
											<td>Vertical Push: {ohp + ohpAdded} 8x2</td>
											<td>Leg Extension: 12x3</td>
											<td>Incline Push: 12x2</td>
										</tr>
										<tr>
											<td>Standing Calf Raises: 8x4</td>
											<td>Vertical Pull: 8x2</td>
											<td>Leg Curl: 12x3</td>
											<td>Vertical Pull: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td>Flys: 15x2</td>
											<td>Seated Calf Raise: 15x4</td>
											<td>Triceps Isolation: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td></td>
											<td></td>
											<td>Biceps Isolation: 12x2</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 3</th>
										</tr>
										<tr>
											<th>Day 1</th>
											<th>Day 2</th>
											<th>Day 3</th>
											<th>Day 4</th>
										</tr>
										<tr>
											<td>Squat Variant: {squat + squatAdded*2} 5x3</td>
											<td>Horizontal Push: {bench + benchAdded*2} 5x3</td>
											<td>Hip Hinge Variant: 8x3</td>
											<td>Horizontal Push: {bench + benchAdded*2} 10x3</td>
										</tr>
										<tr>
											<td>Deadlift Variant: {deadlift + deadAdded*2} 5x3</td>
											<td>Horizontal Pull: 5x3 </td>
											<td>Leg Press Variant: 8x3</td>
											<td>Horizontal Pull: 10x3</td>
										</tr>
										<tr>
											<td>Single Leg Variant: 8x3</td>
											<td>Vertical Push: {ohp + ohpAdded*2} 8x2</td>
											<td>Leg Extension: 12x3</td>
											<td>Incline Push: 12x2</td>
										</tr>
										<tr>
											<td>Standing Calf Raises: 8x4</td>
											<td>Vertical Pull: 8x2</td>
											<td>Leg Curl: 12x3</td>
											<td>Vertical Pull: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td>Flys: 15x2</td>
											<td>Seated Calf Raise: 15x4</td>
											<td>Triceps Isolation: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td></td>
											<td></td>
											<td>Biceps Isolation: 12x2</td>
										</tr>
										<tr>
											<th className="row-spacing">Week 4</th>
										</tr>
										<tr>
											<th>Day 1</th>
											<th>Day 2</th>
											<th>Day 3</th>
											<th>Day 4</th>
										</tr>
										<tr>
											<td>Squat Variant: {squat + squatAdded*3} 5x3</td>
											<td>Horizontal Push: {bench + benchAdded*3} 5x3</td>
											<td>Hip Hinge Variant: 8x3</td>
											<td>Horizontal Push: {bench + benchAdded*3} 10x3</td>
										</tr>
										<tr>
											<td>Deadlift Variant: {deadlift + deadAdded*3} 5x3</td>
											<td>Horizontal Pull: 5x3 </td>
											<td>Leg Press Variant: 8x3</td>
											<td>Horizontal Pull: 10x3</td>
										</tr>
										<tr>
											<td>Single Leg Variant: 8x3</td>
											<td>Vertical Push: {ohp + ohpAdded*3} 8x2</td>
											<td>Leg Extension: 12x3</td>
											<td>Incline Push: 12x2</td>
										</tr>
										<tr>
											<td>Standing Calf Raises: 8x4</td>
											<td>Vertical Pull: 8x2</td>
											<td>Leg Curl: 12x3</td>
											<td>Vertical Pull: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td>Flys: 15x2</td>
											<td>Seated Calf Raise: 15x4</td>
											<td>Triceps Isolation: 12x2</td>
										</tr>
										<tr>
											<td></td>
											<td></td>
											<td></td>
											<td>Biceps Isolation: 12x2</td>
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
							<Link to="/bodybuilding">
								<button className="button-back">
									Back
								</button>
							</Link>
							</div>
						</div>
		)
	}; 
};
export default StartingStrength;

