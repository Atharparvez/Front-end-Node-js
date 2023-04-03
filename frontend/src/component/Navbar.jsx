import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav">
            <div className="stories">
                <li> <Link to="/home"> <b>Stories.</b> </Link></li>
            </div>
            <div className="link">
                <ul>

                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home/about" >About</Link></li>
                    <li><Link to="/home/posts">Food</Link></li>
                    <li><Link to="/home/add-post">Add Post</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>

        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Stories.</a>
        //         <button
        //             class="navbar-toggler"
        //             type="button"
        //             data-mdb-toggle="collapse"
        //             data-mdb-target="#navbarText"
        //             aria-controls="navbarText"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <i class="fas fa-bars"></i>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarText">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Pricing</a>
        //                 </li>
        //             </ul>
        //             <span class="navbar-text">
        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Features</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Pricing</a>
        //                     </li>
        //                 </ul>
        //             </span>
        //         </div>
        //     </div>
        // </nav>

        // <Navbar bg="light" expand="lg" >
        //     <Container fluid >
        //         <div className="nav">
        //             <div className="stories">
        //                 <Navbar.Brand href="#">Stories.</Navbar.Brand>
        //             </div>

        //             <Navbar.Toggle aria-controls="navbarScroll" />
        //             <Navbar.Collapse id="navbarScroll">
        //                 <Nav
        //                     className="me-auto my-2 my-lg-0 "
        //                     style={{ maxHeight: '100px' }}
        //                     navbarScroll >
        //                     <div className="h">
        //                         <Nav.Link href="#action1">Home</Nav.Link>
        //                         <Nav.Link href="#action2">About</Nav.Link>
        //                         <Nav.Link href="#"> Foods</Nav.Link>
        //                         <Nav.Link href="#" >LifeStyle</Nav.Link>
        //                         <Nav.Link href="#">Contact</Nav.Link>
        //                     </div>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </div>
        //     </Container>

        // </Navbar >

    );
}

export default NavBar;