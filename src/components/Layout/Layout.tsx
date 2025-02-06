import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import { EmployeeProvider } from "components/EmployeeContext/EmployeeContext";
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
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "15px",
					}}
				>
					<ButtonIcon
						size="18"
						icon="arrow_back_ios"
						onClick={() => navigate(-1)}
					/>
					<LogoContainer onClick={() => navigate("/")}>Home</LogoContainer>
				</div>
				<NavContainer>{navLinksEl}</NavContainer>
			</Header>
			<EmployeeProvider>
				<Main>{children}</Main>
			</EmployeeProvider>
		</LayoutComponent>
	);
}

export default Layout;
