import { useNavigate } from "react-router-dom";
import { navLinks } from "./navLinks";
import {
	Header,
	LayoutComponent,
	LogoContainer,
	Main,
	NavContainer,
	StyledNavLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
	const navigate = useNavigate();

	const navLinksEl = navLinks.map(({ path, label }) => (
		<StyledNavLink
			key={path}
			to={path}
			style={({ isActive }: { isActive: boolean }) => ({
				textDecoration: isActive ? "underline" : "none",
			})}
		>
			{label}
		</StyledNavLink>
	));

	return (
		<LayoutComponent>
			<Header>
				<LogoContainer onClick={() => navigate("/")}>Home</LogoContainer>
				<NavContainer>{navLinksEl}</NavContainer>
			</Header>
			<Main>{children}</Main>
		</LayoutComponent>
	);
}

export default Layout;
