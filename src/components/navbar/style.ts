import styled from 'styled-components';

export const Icon = styled.span`
  cursor: pointer;
  visibility: visible;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`
export const Link = styled.a`
  display: block;
  position: relative;
  color: var(--white);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: var(--white);
    transform: scaleX(0);
    transform-origin: center;
    transition: opacity 200ms, transform 310ms ease-in;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
`
export const MenuItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
`
export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const MenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  height: ${({ isMenuOpen }) => (isMenuOpen ? '13rem' : '0')};
  overflow: hidden;
transition: all 0.2s linear;
  @media (min-width: 768px) {
    height: auto;
  }
`
export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  align-items: center;
  padding: 1.25rem 2.25rem;
  background-color: #F7C545;
`
export const Image = styled.img`
  width: 10rem;
`