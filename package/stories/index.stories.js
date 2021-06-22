import React from "react";

import IconArrow from "./fixtures/arrow";
import IconAccount from "./fixtures/account";
import IconBilling from "./fixtures/billing";
import IconLogout from "./fixtures/logout";
import IconPreferences from "./fixtures/preferences";

import Menu from "../src";

export default {
  title: "Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const SimpleMenu = Template.bind({});
SimpleMenu.args = {
  items: [
    [
      {
        href: "#account",
        id: "account",
        label: "Account",
      },
      {
        href: "#preferences",
        id: "preferences",
        label: "Preferences",
      },
      {
        href: "#billing",
        id: "billing",
        label: "Billing",
      },
    ],
    [
      {
        id: "logout",
        label: "Logout",
        renderItem (baseProps) {
          return (
            <form action="/logout" method="post">
              <button {...baseProps} type="submit">
                Logout
              </button>
            </form>
          );
        },
      },
    ],
  ],
  label: "Menu",
};

export const MenuWithIcon = Template.bind({});
MenuWithIcon.args = {
  items: [
    [
      {
        href: "#account",
        icon: <IconAccount />,
        id: "account",
        label: "Account",
      },
      {
        href: "#preferences",
        icon: <IconPreferences />,
        id: "preferences",
        label: "Preferences",
      },
      {
        href: "#billing",
        icon: <IconBilling />,
        id: "billing",
        label: "Billing",
      },
    ],
    [
      {
        id: "logout",
        label: "Logout",
        renderItem (baseProps) {
          return (
            <form action="/logout" method="post">
              <button {...baseProps} type="submit">
                <IconLogout />
                Logout
              </button>
            </form>
          );
        },
      },
    ],
  ],
  label: "Menu",
};

const HookAvatar =
  () => {
    return (
      <>
        <span>
          <span className="user-name">John Doe</span>
          <span className="user-email">johndoe@acme.com</span>
        </span>
        <img alt="Avatar of John Doe" className="avatar" src="https://brunoscopelliti.com/images/me.jpg" />
        <span className="dropdown-clue">
          <IconArrow />
        </span>
      </>
    );
  };

export const MenuWithCustomHook = Template.bind({});
MenuWithCustomHook.args = {
  className: "account-menu",
  items: [
    [
      {
        href: "#account",
        id: "account",
        label: "Account",
      },
      {
        href: "#preferences",
        id: "preferences",
        label: "Preferences",
      },
      {
        href: "#billing",
        id: "billing",
        label: "Billing",
      },
    ],
    [
      {
        id: "logout",
        label: "Logout",
        renderItem (baseProps) {
          return (
            <form action="/logout" method="post">
              <button {...baseProps} type="submit">
                Logout
              </button>
            </form>
          );
        },
      },
    ],
  ],
  label: <HookAvatar />,
};
