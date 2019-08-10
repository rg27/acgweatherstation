import React from 'react';

const MainContent = props => (
	
	<div className="container">
		<form onSubmit={props.getWeather}  className="find-location">
		<input type="text" name="city" placeholder="Find your location..."/>
		<input type="submit" class="btn btn-primary" value="Find" name="form"/>
		</form>
	</div>

);


export default MainContent