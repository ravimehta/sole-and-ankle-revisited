/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <MainNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MainNav>
        <FooterNav>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterNav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: hsla(0deg 0% 0% / 0.5);
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 18.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 2rem 2rem 2rem;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  text-transform: uppercase;
  gap: 1.5rem;
  a {
    color: var(--color-gray-900);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const FooterNav = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    font-size: 0.75rem;
    color: var(--color-gray-700);
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: var(--color-primary);
    }
  }
`;

export default MobileMenu;
