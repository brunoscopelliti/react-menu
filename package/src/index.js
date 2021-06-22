import React from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";

import Dropdown from "@bscop/react-dropdown";

const Menu =
  (props) => {
    const { className, items, ...dropdownProps } = props;

    return (
      <Dropdown
        className={cssClass("ui-menu", className)}
        {...dropdownProps}
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
