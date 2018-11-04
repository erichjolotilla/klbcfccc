import React, { Component } from 'react';
import logo from './resources/images/logo.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const navbar = {backgroundColor: '#000000'};

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleSelect(eventKey, event) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }



    render() {
        return (



                <Navbar style={navbar}   expand="md">

                    <div className="container">
                    <NavbarBrand href="/" > <img src={logo} width="450" height="80" alt="klbc-fccc" /> </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" align="left"  navbar>
                        <NavItem>
                        <NavLink href="/">HOME</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/location/">LOCATION</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                ABOUT US
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/statementOfFaith">
                                    STATEMENT OF FAITH
                                </DropdownItem>
                                <DropdownItem href="/wordFrom">
                                A WORD FROM REV RONALD LONGOS
                                </DropdownItem>
                                <DropdownItem>
                                MISSION
                                </DropdownItem>
                                <DropdownItem>
                                VISION
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                SERVICE TIME
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        MINISTRIES
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                        CAREGROUP MINISTRIES
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem>
                        MISSION
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem>
                        USHERING
                        </DropdownItem>
                        <DropdownItem>
                        SUPPORT
                        </DropdownItem>
                        <DropdownItem>
                        KIDS
                        </DropdownItem>
                        <DropdownItem>
                        WORSHIP
                        </DropdownItem>
                        <DropdownItem>
                        CHOIR
                        </DropdownItem>
                        <DropdownItem>
                        FOLLOW-UP
                        </DropdownItem>

                        </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        CONTACT US
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                        PRAYER REQUESTS
                        </DropdownItem>
                        <DropdownItem>
                        EMAIL-US
                        </DropdownItem>
                        <DropdownItem>
                        OTHER CONTACTS
                        </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>


        );
}
}

export default Menu;