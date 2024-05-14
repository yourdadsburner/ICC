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

export default function App() {
  return (
    
    <Navbar>
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
            <Button color="primary">Buy Tickets</Button>
          </Link>
          <Link href="#">
            <Button color="primary">Buy Hospitality</Button>
          </Link>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}