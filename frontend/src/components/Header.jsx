import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import styles from "./Header.module.css";
import { LinkContainer } from "react-router-bootstrap";
export const Header = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="md" className="bg-dark">
          <Container>
            <LinkContainer to={"/"}>
              <Navbar.Brand className="text-light ">Super Shop</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={styles.toggle}
            />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto "></Nav>
              <Nav>
                <LinkContainer to={"/cart"}>
                  <Nav.Link className={styles.navIcons}>
                    <FaShoppingCart />
                    <span className="ps-1 cart">Cart</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/login"}>
                  <Nav.Link
                    eventKey={2}
                    className={`btn btn-dark ${styles.navIcons}`}
                  >
                    <IoMdContact />
                    <span className="ps-1 ">Sign In</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
