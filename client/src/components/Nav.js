import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { color, shape } from '../styles';

import styled from 'styled-components';

const Header = styled.header`
	// padding: 40px;
`;

const StyledNav = styled.nav`
	display: flex;
	background: ${color.primary};
	padding-top: 15px;
	padding-bottom: 15px;
`;

const NavigationList = styled.ul`
	display: flex;
	vertical-align: top;
	width: 100%;

	${props => props.float && `
		justify-content: end;
	`}
`;

const NavigationItem = styled.li`
	margin: 1rem;
	padding: 1rem;
	border-radius: ${shape.borderRadius};

	a {
		color: ${color.text};
		text-decoration: none;
		font-size: 1.6rem;
	}

	&:hover {
		background: ${color.hovercolor};
	}
`
	;

const styles = {
	BrandHeader: {
		fontSize: '2.2rem',
		fontWeight: 'bold',
		
	},

	ProjectHeader: {
		fontSize: '2.2rem',
		
	},

	logo: {
		paddingLeft: '10px',

	},
}

function AuthNav() {
	if (Auth.loggedIn()) {
		return (
			
			<NavigationList float="right">

				<NavigationItem >
					<Link  to="/projects">
						Projects
					</Link>
				</NavigationItem>
			
				<NavigationItem>
					{/* this is not using the Link component to logout or user and then refresh the application to the start */}
					<a href="/" onClick={() => Auth.logout()}>
						Logout
					</a>
				</NavigationItem>

				
			</NavigationList>
		);
	} else {
		return (
			<NavigationList float="right">


				<NavigationItem>
					<Link to="/signup">
						Signup
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/login">
						Login
					</Link>
				</NavigationItem>
			</NavigationList>
		);
	}
}

function Nav() {
  return (
	  <Header>
		  
		<StyledNav>
			  <NavigationList>
				  <img src="iamlogo.png" style={styles.logo} />
			 
				  <NavigationItem>
					 
					  <Link style={styles.BrandHeader} to="/">
					  
							  ProposalWise
					</Link>
				  </NavigationItem>
				  			
				  
				 

			</NavigationList>
			<AuthNav />
		</StyledNav>
    </Header>
  );
}

export default Nav;
