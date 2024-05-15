"use client"

import React from "react";
import {  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, 
  Link, 
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Homepage",
    "Login",
  ]

  return (
    
    <Navbar isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
      <Image
      src="https://content.secutix.com/T20INC/images/logo2.png"
      height={60}
      width={60}
      alt="ICC T20 Logo" 
      />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <ButtonGroup>
          <Link href="#">
            <Button >Buy Tickets</Button>
          </Link>
          <Link href="#">
            <Button >Buy Hospitality</Button>
          </Link>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarItem>
            <Image
                src="https://content.secutix.com/T20INC/images/cart.png"
                height={30}
                width={30}
                alt="shopping cart"
            /> 
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}