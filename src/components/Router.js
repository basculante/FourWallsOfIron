import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Strength from './Strengthpage';
import BodyBuilding from './Bodybuildingpage';
import StartingStrength from './strength_programs/Startingstrength';
import TexasMethod from './strength_programs/Texasmethod';
import FiveThreeOne from './strength_programs/531';
import Novice from './bodybuilding_programs/Noviceroutine';
import Phul from './bodybuilding_programs/Phul';
import Phat from './bodybuilding_programs/Phat';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact/>
			<Route path="/strength" component={Strength} exact/>
			<Route path="/bodybuilding" component={BodyBuilding} exact/>
			<Route path="/strength/startingstrength" component={StartingStrength}/>
			<Route path="/strength/texasmethod" component={TexasMethod}/>
			<Route path="/strength/531" component={FiveThreeOne}/>
			<Route path="/bodybuilding/noviceroutine" component={Novice}/>
			<Route path="/bodybuilding/phul" component={Phul}/>
			<Route path="/bodybuilding/phat" component={Phat}/>
		</Switch>
	</BrowserRouter>
	);

export default Router;