import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <header className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md" className="d-block d-md-inline-block rounded-bottom" color="white">
          <NavbarToggler className="align-self-end" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
        <style jsx>{`
            header {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                text-align: center;
                z-index: 10;
                animation-name: dropHeader;
                animation-iteration-count: 1;
                animation-timing-function: ease;
                animation-duration: 0.75s;
            }
        `}</style>
    </header>
  );
}

export default Header;