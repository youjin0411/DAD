import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'; // Link 태그 
import { FaBars } from 'react-icons/fa'; //반응형 햄버거 메뉴 아이콘
import LoginNav from './LoginNav';
import InitNav from './InitNav';

const NavbarContain = () => {
	
	const [userData, setUserData] = useState(0);
	useEffect( () => {
		if(localStorage.getItem('id')){
			setUserData(1);
		}
	})

	
	return (
		<Container>
			<Nav>
				<Bars />
				<NavMenu>
					<Logo to='/'><LogoImage src='assets/logo.png' alt="logo" /></Logo>
					<Blank/>
					{userData ? <LoginNav/> :<InitNav/>}
				</NavMenu>
			</Nav>
		</Container>
	);
};

const Container = styled.div`
/* border-bottom: 1px solid #E4E7EC; */
`;

const Nav = styled.nav`
	background: white;
	width: 70vw;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	margin: 0 auto;
	z-index: 12;
`;

const Logo = styled(Link)`
	color: #000000;
	text-decoration: none;
	margin-top: 1%;
	width: 6.5%;
	height: auto;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 1%;
`;

const Blank = styled.div`
	width: 20vw;
`

const NavMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Bars = styled(FaBars)`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export default NavbarContain;

