import { Nav, Image, MenuItem, Icon, MenuItems, Link, MenuWrapper} from './style';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import pokemonLogo from "../../assets/logo.png";
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Nav>
      <Image src={pokemonLogo} alt="Descrição da imagem" />
        <Icon>
          {isOpen ? 
            (<AiOutlineClose size={30} color="#fff" onClick={() => openMenu()}/>) : 
            (<AiOutlineMenu size={30} color="#fff" onClick={() => openMenu()}/>)
          }
        </Icon>
      <MenuWrapper isMenuOpen={isOpen}>
        <MenuItems>
          <MenuItem><Link href='#'>Home</Link></MenuItem>
          <MenuItem><Link href='#'>Pokédex</Link></MenuItem>
          <MenuItem><Link href='#'>Jogos e Gerações</Link></MenuItem>
        </MenuItems>
      </MenuWrapper>
    </Nav>
    )
}