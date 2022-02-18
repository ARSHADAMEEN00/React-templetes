import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { colors } from "assets/config";
import { FaPhoneVolume } from "react-icons/fa";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar className="custom_nav">
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/">
            <NavbarBrand color={"blue"}>Osperb</NavbarBrand>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="black"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center text-black">
              <NavLink
                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
                style={{ color: colors.navColor }}
              >
                <Icon name="description" size="2xl" />
                &nbsp;Docs
              </NavLink>
              <NavLink
                href="https://material-tailwind.com/components?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
                style={{ color: colors.navColor }}
              >
                <Icon name="apps" size="2xl" />
                &nbsp;Components
              </NavLink>
              <div style={{ color: colors.navColor }}>
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon
                        name="view_carousel"
                        size="2xl"
                        color={colors.navColor}
                      />
                      <span className="ml-2">Templates</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link to="/">
                    <DropdownItem color="lightBlue">Landing</DropdownItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownItem color="lightBlue">Profile</DropdownItem>
                  </Link>
                  <Link to="/login">
                    <DropdownItem color="lightBlue">Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem color="lightBlue">Register</DropdownItem>
                  </Link>
                </Dropdown>
              </div>
              <NavLink
                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
                style={{ color: colors.navColor }}
              >
                <Icon family="font-awesome" name="fab fa-github" size="xl" />
                &nbsp;Github
              </NavLink>
              <NavLink
                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
                style={{ color: colors.navColor }}
              >
                Issues
              </NavLink>
              <a
                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  color="blue"
                  className="bg-light ml-4 "
                  style={{ color: colors.white }}
                  ripple="dark"
                >
                  <a
                    href="tel:+919645700075"
                    title="Give me a call"
                    className="queries"
                  >
                    <div className="qu_icon">
                      <FaPhoneVolume />
                    </div>
                    <p>+91 9645700075</p>
                  </a>
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
