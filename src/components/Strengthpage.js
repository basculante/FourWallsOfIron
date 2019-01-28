import React from 'react';
import { Link } from 'react-router-dom';
import './Strengthpage.css'

const Strength = () => (
<div className="container-str">
	<div className="card-deck">
		<div className="card str shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-ss" src={require('./strength_programs/sslogo.png')} alt="sslogo"/>
				<h5 className="card-title">Novice</h5>
				<Link to="/strength/startingstrength">Starting Strength</Link>
			</div>
		</div>
		<div className="card str shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-tm" src={require('./strength_programs/texasmethodlogo.png')} alt="tmlogo"/>
				<h5 className="card-title">Intermediate</h5>
				<Link to="/strength/texasmethod">Texas Method</Link>
			</div>
		</div>
		<div className="card str shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-531" src={require('./strength_programs/531logo.jpg')} alt="531logo"/>
				<h5 className="card-title">Advanced</h5>
				<Link to="/strength/531">Wendler's 5/3/1</Link>
			</div>
		</div>
	</div>
	<div className="button-back-div">
		<button className="button-back">
			<Link to="/">Back</Link>
		</button>
	</div>
</div>
	);

export default Strength; 