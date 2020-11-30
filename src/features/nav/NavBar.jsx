import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignInMenu";
import SignedOutMenu from "./SignOutMenu";

export default function NavBar({ setFormOpen }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }
  return (
    <Menu inverted fixed="top">
      <Menu.Item as={NavLink} to="/" header>
        <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/events" name="Events" />
      {authenticated && (
        <Menu.Item as={NavLink} to="/createEvent">
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
      )}
      {authenticated ? (
        <SignedInMenu signOut={handleSignOut} />
      ) : (
        <SignedOutMenu setAuthenticated={setAuthenticated} />
      )}
    </Menu>
  );
}