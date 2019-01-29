import React from 'react';
import { Link } from 'react-router-dom';
import './Bodybuildingpage.css'

const Strength = () => (
<div className="container-bb">
	<div className="card-deck">
		<div className="card bb shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-no" src={require('./bodybuilding_programs/novicelogo.jpg')} alt="noviceLogo"/>
				<h5 className="card-title">Novice</h5>
				<Link to="/bodybuilding/noviceroutine">Novice Routine</Link>
			</div>
		</div>
		<div className="card bb shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-phul" src={require('./bodybuilding_programs/phullogo.png')} alt="phulLogo"/>
				<h5 className="card-title">Intermediate</h5>
				<Link to="/bodybuilding/phul">PHUL</Link>
			</div>
		</div>
		<div className="card bb shadow p-3 mb-5 bg-white rounded" id="strpage">
			<div className="card-body">
			<img className="card-img-top-phat" src={require('./bodybuilding_programs/phatlogo.png')} alt="phatLogo"/>
				<h5 className="card-title">Advanced</h5>
				<Link to="/bodybuilding/phat">PHAT</Link>
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