import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink
} from './styles';
import { LayoutProps } from './types';


const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/create-employee', label: 'Create Employee' },
  { path: '/employee', label: 'Employee' }
];


function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate('/')} />
        <NavContainer>
          {navLinks.map(({ path, label }) => (
            <StyledNavLink
              key={path}
              to={path}
              style={({ isActive }: { isActive: boolean }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >
              {label}
            </StyledNavLink>
          ))}
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Link to='/'><LogoContainer /></Link>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
