import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { Outlet, Link } from "react-router-dom"

const NavBarCrud=()=>{
    return(
        <>
        <header className="App-header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/agregarusuario" className="nav-link">Crud MERN Stack App</Navbar.Brand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/agregarusuario" className="nav-link">Agregar Estudiante</Nav.Link>
                        <Nav.Link as={Link} to="/" className="nav-link">Lista estudiantes</Nav.Link>
                    </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
        

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBarCrud