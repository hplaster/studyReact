import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoBTS from '../img/logo-bts.png'

const MyNavBar = () => {
    return (
        <nav>
            <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
                <Container fluid>
                    {/* SUA LOGO = NAVBAR.BRAND */}
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={LogoBTS}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        BTS
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '400px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Início</Nav.Link>
                            <Nav.Link href="#action2">Músicas</Nav.Link>
                            <NavDropdown title="Shows" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Shows bons</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Show pós Exército
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Ingressos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Show no Brasil
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Procure uma música"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </nav>
    )
}

export default MyNavBar;