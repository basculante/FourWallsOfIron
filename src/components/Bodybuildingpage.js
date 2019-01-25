import React from 'react';
import { Link } from 'react-router-dom';

const BodyBuilding = () => (
<div>
	<div className="card">
		<img className="card-img-top" src="" alt=""/>
		<div className="card-body">
			<h5 className="card-title">Novice</h5>
			<button>
			<Link to="/bodybuilding/noviceroutine">The Novice Routine</Link>
			</button>
		</div>
	</div>
	<div className="card">
		<img className="card-img-top" src="" alt=""/>
		<div className="card-body">
			<h5 className="card-title">Intermediate</h5>
			<button>
			<Link to="/bodybuilding/phul">PHUL</Link>
			</button>
		</div>
	</div>
	<div className="card">
		<img className="card-img-top" src="" alt=""/>
		<div className="card-body">
			<h5 className="card-title">Advanced</h5>
			<button>
			<Link to="/bodybuilding/phat">PHAT</Link>
			</button>
		</div>
	</div>
	<div>
		<button>
		<Link to="/">Go Back</Link>
		</button>
	</div>
</div>
	);

export default BodyBuilding; 