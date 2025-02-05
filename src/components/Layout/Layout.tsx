import {
	Footer,
	Header,
	LayoutComponent,
	LogoContainer,
	Main,
	NavContainer,
	StyledNavLink,
} from "./styles.ts";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
	return (
		<LayoutComponent>
			<Header>
				<LogoContainer></LogoContainer>
				<NavContainer>
					<StyledNavLink to="/">Home</StyledNavLink>
					<StyledNavLink to="/about">About</StyledNavLink>
					<StyledNavLink to="/users">Users</StyledNavLink>
				</NavContainer>
			</Header>
			<Main>{children}</Main>
			<Footer>
				<LogoContainer></LogoContainer>
			</Footer>
		</LayoutComponent>
	);
}

export default Layout;
