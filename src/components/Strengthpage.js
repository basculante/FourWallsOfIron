import React from 'react';
import { Link } from 'react-router-dom';
import './Strengthpage.css'

const Strength = () => (
<div className="container-str">
	<div className="card-deck">
		<div className="card str">
			<img className="card-img-top-ss" src="" alt=""/>
			<div className="card-body">
				<h5 className="card-title">Novice</h5>
				<button>
				<Link to="/strength/startingstrength">Starting Strength</Link>
				</button>
			</div>
		</div>
		<div className="card str">
			<img className="card-img-top-tm" src="" alt=""/>
			<div className="card-body">
				<h5 className="card-title">Intermediate</h5>
				<button>
				<Link to="/strength/texasmethod">Texas Method</Link>
				</button>
			</div>
		</div>
		<div className="card str">
			<img className="card-img-top-531" src="" alt=""/>
			<div className="card-body">
				<h5 className="card-title">Advanced</h5>
				<button>
				<Link to="/strength/531">Wendler's 5/3/1</Link>
				</button>
			</div>
		</div>
	</div>
	<div className="button-back">
		<button>
			<Link to="/">Back</Link>
		</button>
	</div>
</div>
	);

export default Strength; 