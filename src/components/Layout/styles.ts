import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	background-color: #282c34;
`;

export const NavContainer = styled.nav`
	display: flex;
	gap: 20px;
`;

export const LogoContainer = styled.div`
	cursor: pointer;
	color: #fff;
`;

export const Main = styled.main`
	flex-grow: 1;
	padding: 20px;
`;

export const Footer = styled.footer`
	padding: 20px;
	background-color: #282c34;
	text-align: center;
	color: white;
`;

export const StyledNavLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	&.active {
		text-decoration: underline;
	}
`;
