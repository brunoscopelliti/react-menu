import React, { useRef } from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import Dropdown from "@bscop/react-dropdown";

const indexOf = [].indexOf;

const Menu =
  (props) => {
    const { className, items, ...dropdownProps } = props;

    const ref = useRef(null);

    const onKeyDown =
      (event) => {
        switch (event.code) {
          case "ArrowDown":
          case "PageDown":
            event.preventDefault();
            // Activate next
            {
              const items = ref.current.querySelectorAll("[role='menuitem']");
              const indexActiveItem = indexOf.call(items, document.activeElement);
              if (indexActiveItem < 0) {
                ref.current.querySelector("[role='menuitem']").focus();
              } else if (indexActiveItem < items.length - 1) {
                items[indexActiveItem + 1].focus();
              }
            }
            break;
          case "ArrowUp":
          case "PageUp":
            event.preventDefault();
            // Activate prev
            {
              const items = ref.current.querySelectorAll("[role='menuitem']");
              const indexActiveItem = indexOf.call(items, document.activeElement);
              if (indexActiveItem < 0) {
                ref.current.querySelector("[role='menuitem']").focus();
              } else if (indexActiveItem > 0) {
                items[indexActiveItem - 1].focus();
              }
            }
            break;
          case "End":
            event.preventDefault();
            // Activate last
            {
              const items = ref.current.querySelectorAll("[role='menuitem']");
              const indexActiveItem = indexOf.call(items, document.activeElement);
              if (indexActiveItem !== items.length - 1) {
                items[items.length - 1].focus();
              }
            }
            break;
          case "Home":
            event.preventDefault();
            // Activate first
            {
              const items = ref.current.querySelectorAll("[role='menuitem']");
              const indexActiveItem = indexOf.call(items, document.activeElement);
              if (indexActiveItem !== 0) {
                items[0].focus();
              }
            }
            break;
        }
      };

    return (
      <Dropdown
        ref={ref}
        className={cssClass("ui-menu", className)}
        {...dropdownProps}
        onKeyDown={onKeyDown}
        role="menu"
      >
        {
          (close) => {
            return props.items
              .map(
                (groupItems, i) => {
                  return (
                    <div key={i} className="ui-group">
                      {
                        groupItems.map(
                          (item) => {
                            return (
                              <React.Fragment key={item.id}>
                                {renderMenuItem({ role: "menuitem" }, item, close)}
                              </React.Fragment>
                            );
                          }
                        )
                      }
                    </div>
                  );
                }
              );
          }
        }
      </Dropdown>
    );
  };

Menu.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default Menu;

const renderMenuItem =
  (baseProps, props, close) => {
    const {
      href,
      icon,
      label,
      onClick,
      renderItem,
    } = props;

    if (href) {
      return (
        <a {...baseProps} href={href} onClick={close}>
          {icon}
          {label}
        </a>
      );
    }

    if (onClick) {
      return (
        <button
          {...baseProps}
          onClick={
            (event) => {
              close();
              onClick(event);
            }
          }
          type="button"
        >
          {icon}
          {label}
        </button>
      );
    }

    if (typeof renderItem == "function") {
      return renderItem(baseProps, props, close);
    }

    return null;
  };
