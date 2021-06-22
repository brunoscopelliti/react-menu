import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Menu from "./";

describe("Menu", () => {
  it("renders the menu", () => {
    const { container } = render(
      <Menu
        className="test-menu"
        items={
          [
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
                id: "not-rendered",
                label: "Skipped",
              },
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
          ]
        }
        label="Toggle menu"
      />
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(".ui-menu.test-menu")).not.toBeNull();

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Toggle menu");

    expect(button).not.toHaveAttribute("aria-expanded");
    expect(button).toHaveAttribute("aria-haspopup", "menu");
    expect(button).toHaveAttribute("aria-labelledby", button.id);

    const menu = screen.getByRole("menu", { hidden: true });

    expect(menu).toHaveAttribute("aria-labelledby", button.id);
    expect(menu).toHaveAttribute("hidden", "");
    expect(menu).toHaveAttribute("tabindex", "-1");

    const items = screen.getAllByRole("menuitem", { hidden: true });

    expect(items).toHaveLength(4);
  });

  it("renders the menu / disabled", () => {
    render(
      <Menu
        disabled
        items={
          [
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
          ]
        }
        label="Toggle menu"
      />
    );

    expect(screen.getByRole("button")).toHaveAttribute("disabled", "");
  });

  it("opens the menu when button is clicked", () => {
    render(
      <Menu
        items={
          [
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
          ]
        }
        label="Toggle menu"
      />
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
    expect(menu).toHaveFocus();
  });

  it("renders different menuitem", () => {
    const spy = jest.fn();

    render(
      <Menu
        items={
          [
            [
              {
                href: "#one",
                id: "one",
                label: "One",
              },
              {
                id: "two",
                label: "Two",
                onClick: spy,
              },
              {
                id: "three",
                label: "Three",
                renderItem (baseProps, props, close) {
                  return (
                    <button {...baseProps} onClick={close} type="button">
                      {props.label} {/* eslint-disable-line react/prop-types */}
                    </button>
                  );
                },
              },
            ],
          ]
        }
        label="Toggle menu"
      />
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    const items = screen.getAllByRole("menuitem");

    expect(items[0].tagName).toBe("A");
    expect(items[0]).toHaveTextContent("One");
    expect(items[0]).toHaveAttribute("href", "#one");

    expect(items[1].tagName).toBe("BUTTON");
    expect(items[1]).toHaveTextContent("Two");

    userEvent.click(items[1]);

    expect(spy).toHaveBeenCalledTimes(1);

    expect(button).not.toHaveAttribute("aria-expanded");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    expect(items[2].tagName).toBe("BUTTON");
    expect(items[2]).toHaveTextContent("Three");

    userEvent.click(items[2]);

    expect(button).not.toHaveAttribute("aria-expanded");
  });

  it("closes the menu when click outside", () => {
    render(
      <Menu
        items={
          [
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
          ]
        }
        label="Toggle menu"
      />
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    userEvent.click(document.body);

    expect(button).not.toHaveAttribute("aria-expanded");
  });
});
