import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const link = {
    width: '100px',
    padding: '12px',
    margin: '20px 20px',
    background: 'blue',
    textDecoration: 'none',
    border: '1px solid blue',
    borderRadius: '5px',
    color: 'white',
    fontSize: '1.3em',
  }
	return(
 		<div className="navbar">
	 		<NavLink
		        className="navlink"
		        to="/"
		        /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
		        exact
		        /* add styling to Navlink */
		        style={link}
		        /* add prop for activeStyle */
		        activeStyle={{
		          background: 'purple'
		        }}
		     >Home</NavLink>
 			<NavLink
 				className="navlink"
 				to="/surf_spots"
 				exact
		        /* add styling to Navlink */
		        style={link}
		        /* add prop for activeStyle */
		        activeStyle={{
		          background: 'purple'
		        }}
 			>Surf Spots</NavLink>
 			<NavLink
		        className="navlink"
		        to="/popular"
		        exact
		        style={link}
		        activeStyle={{
		          background: 'purple'
		        }}
		     >Popular Spots</NavLink>
		     <NavLink
		        className="navlink"
		        to="/by_county"
		        /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
		        exact
		        /* add styling to Navlink */
		        style={link}
		        /* add prop for activeStyle */
		        activeStyle={{
		          background: 'purple'
		        }}
		     >By County</NavLink>
 		</div>
	)
}

export default Navbar;