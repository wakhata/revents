import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignInMenu";
import SignedOutMenu from "./SignOutMenu";

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Menu.Item as={NavLink} to="/" header>
        <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/events" name="Events" />
      <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />
      {authenticated && (
        <Menu.Item as={NavLink} to="/createEvent">
          <Button positive inverted content="Create Event" />
        </Menu.Item>
      )}
      {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
    </Menu>
  );
}
