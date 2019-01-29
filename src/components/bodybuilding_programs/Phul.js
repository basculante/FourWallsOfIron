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
					P.H.U.L. (POWER HYPERTROPHY UPPER LOWER)
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
									<td >Squat</td>
									<td><input className="input-text" type="text" name="squat"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="squatWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="squatWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="squatWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Bench Press</td>
									<td><input className="input-text" type="text" name="benchPress"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="benchWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="benchWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="benchWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Deadlift</td>
									<td><input className="input-text" type="text" name="deadlift"/></td>
									<td className="increment">
									<input type="radio" id="2.5" name="deadliftWeight" value="2.5"/>2.5
									<input className= "increment-cell" type="radio" id="5" name="deadliftWeight" value="5"/>5
									<input className= "increment-cell" type="radio" id="10" name="deadliftWeight" value="10"/>10
									</td>
								</tr>
								<tr>
									<td>Overhead Press</td>
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
											<td>Barbell Bench Press: {bench} 3-5 x 3-4</td>
											<td>Squat: {squat} 3-5 x 3-4</td>
											<td>Incline Barbell Bench Press: 8-12 x 3-4</td>
											<td>Front Squat: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Incline Dumbbell Bench Press: 6-10 x 3-4</td>
											<td>Deadlift: {deadlift} 3-5 x 3-4</td>
											<td>Flat Bench Dumbbell Flye: 8-12 x 3-4</td>
											<td>Barbell Lunge: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Bent Over Row: 3-5 x 3-4</td>
											<td>Leg Press: 10-15 x 3-5</td>
											<td>Seated Cable Row: 8-12 x 3-4</td>
											<td>Leg Extension: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Lat Pull Down: 6-10 x 3-4</td>
											<td>Leg Curl: 10-15 x 3-5</td>
											<td>One Arm Dumbbell Row: 3-4 x 8-12</td>
											<td>Leg Curl: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Overhead Press: 5-8 x 2-3</td>
											<td>Calf Exercise: 6-10 x 4</td>
											<td>Dumbbell Lateral Raise: 8-12 x 3-4</td>
											<td>Seated Calf Raise: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Barbell Curl: 6-10 x 2-3</td>
											<td></td>
											<td>Seated Incline Dumbbell Curl: 8-12 x 3-4</td>
											<td>Calf Press: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Skullcrusher: 6-10 x 2-3</td>
											<td></td>
											<td>Cabel Tricep Extension: 8-12 x 3-4</td>
											<td></td>
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
											<td>Barbell Bench Press: {bench + benchAdded} 3-5 x 3-4</td>
											<td>Squat: {squat + squatAdded} 3-5 x 3-4</td>
											<td>Incline Barbell Bench Press: 8-12 x 3-4</td>
											<td>Front Squat: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Incline Dumbbell Bench Press: 6-10 x 3-4</td>
											<td>Deadlift: {deadlift + deadAdded} 3-5 x 3-4</td>
											<td>Flat Bench Dumbbell Flye: 8-12 x 3-4</td>
											<td>Barbell Lunge: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Bent Over Row: 3-5 x 3-4</td>
											<td>Leg Press: 10-15 x 3-5</td>
											<td>Seated Cable Row: 8-12 x 3-4</td>
											<td>Leg Extension: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Lat Pull Down: 6-10 x 3-4</td>
											<td>Leg Curl: 10-15 x 3-5</td>
											<td>One Arm Dumbbell Row: 3-4 x 8-12</td>
											<td>Leg Curl: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Overhead Press: 5-8 x 2-3</td>
											<td>Calf Exercise: 6-10 x 4</td>
											<td>Dumbbell Lateral Raise: 8-12 x 3-4</td>
											<td>Seated Calf Raise: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Barbell Curl: 6-10 x 2-3</td>
											<td></td>
											<td>Seated Incline Dumbbell Curl: 8-12 x 3-4</td>
											<td>Calf Press: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Skullcrusher: 6-10 x 2-3</td>
											<td></td>
											<td>Cabel Tricep Extension: 8-12 x 3-4</td>
											<td></td>
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
											<td>Barbell Bench Press: {bench + benchAdded*2} 3-5 x 3-4</td>
											<td>Squat: {squat + squatAdded*2} 3-5 x 3-4</td>
											<td>Incline Barbell Bench Press: 8-12 x 3-4</td>
											<td>Front Squat: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Incline Dumbbell Bench Press: 6-10 x 3-4</td>
											<td>Deadlift: {deadlift + deadAdded*2} 3-5 x 3-4</td>
											<td>Flat Bench Dumbbell Flye: 8-12 x 3-4</td>
											<td>Barbell Lunge: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Bent Over Row: 3-5 x 3-4</td>
											<td>Leg Press: 10-15 x 3-5</td>
											<td>Seated Cable Row: 8-12 x 3-4</td>
											<td>Leg Extension: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Lat Pull Down: 6-10 x 3-4</td>
											<td>Leg Curl: 10-15 x 3-5</td>
											<td>One Arm Dumbbell Row: 3-4 x 8-12</td>
											<td>Leg Curl: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Overhead Press: 5-8 x 2-3</td>
											<td>Calf Exercise: 6-10 x 4</td>
											<td>Dumbbell Lateral Raise: 8-12 x 3-4</td>
											<td>Seated Calf Raise: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Barbell Curl: 6-10 x 2-3</td>
											<td></td>
											<td>Seated Incline Dumbbell Curl: 8-12 x 3-4</td>
											<td>Calf Press: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Skullcrusher: 6-10 x 2-3</td>
											<td></td>
											<td>Cabel Tricep Extension: 8-12 x 3-4</td>
											<td></td>
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
											<td>Barbell Bench Press: {bench + benchAdded*3} 3-5 x 3-4</td>
											<td>Squat: {squat + squatAdded*3} 3-5 x 3-4</td>
											<td>Incline Barbell Bench Press: 8-12 x 3-4</td>
											<td>Front Squat: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Incline Dumbbell Bench Press: 6-10 x 3-4</td>
											<td>Deadlift: {deadlift + deadAdded*3} 3-5 x 3-4</td>
											<td>Flat Bench Dumbbell Flye: 8-12 x 3-4</td>
											<td>Barbell Lunge: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Bent Over Row: 3-5 x 3-4</td>
											<td>Leg Press: 10-15 x 3-5</td>
											<td>Seated Cable Row: 8-12 x 3-4</td>
											<td>Leg Extension: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Lat Pull Down: 6-10 x 3-4</td>
											<td>Leg Curl: 10-15 x 3-5</td>
											<td>One Arm Dumbbell Row: 3-4 x 8-12</td>
											<td>Leg Curl: 10-15 x 3-4</td>
										</tr>
										<tr>
											<td>Overhead Press: 5-8 x 2-3</td>
											<td>Calf Exercise: 6-10 x 4</td>
											<td>Dumbbell Lateral Raise: 8-12 x 3-4</td>
											<td>Seated Calf Raise: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Barbell Curl: 6-10 x 2-3</td>
											<td></td>
											<td>Seated Incline Dumbbell Curl: 8-12 x 3-4</td>
											<td>Calf Press: 8-12 x 3-4</td>
										</tr>
										<tr>
											<td>Skullcrusher: 6-10 x 2-3</td>
											<td></td>
											<td>Cabel Tricep Extension: 8-12 x 3-4</td>
											<td></td>
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
									<Link to="/bodybuilding">Back</Link>
								</button>
							</div>
						</div>
		)
	}; 
};
export default StartingStrength;

