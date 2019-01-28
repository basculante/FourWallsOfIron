import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Home = () => (
<div className="container">
	<div className="card-deck">
	<Link to="/strength" className="card str shadow p-3 mb-5 bg-white rounded">
			<img className="card-img-top-strength" src="http://4.bp.blogspot.com/-yYMHCQr3P3A/U-ppEOS0UII/AAAAAAAAAJw/F_Th_n_-JcE/s1600/PisarenkoSquat560.jpg" alt="atlas"/>
			<div className="card-body">
				<h5 className="card-title">Strength</h5>
			</div>
		</Link>
		<Link to="/bodybuilding" className="card str shadow p-3 mb-5 bg-white rounded">
			<img className="card-img-top-bodybuilding" src="https://godfatherofbodybuilding.com/wp-content/uploads/2017/09/Posing-Opener.jpg" alt="arnold"/>
			<div className="card-body">
				<h5 className="card-title">Bodybuilding</h5>
			</div>
		</Link>
	</div>
</div>
	);

export default Home;