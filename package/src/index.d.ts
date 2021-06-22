import React from "react";

export type MenuItemPropsType = {
  role : "menuitem";
}

export type MenuItem = {
  className ?: string;
  href ?: string;
  icon ?: string;
  id : string;
  label : string;
  onClick ?: (event : React.MouseEvent) => void;
  renderItem ?: (props: MenuItemPropsType, item : MenuItem, close : () => void) => React.ReactNode;
}

export type MenuItemGroup = MenuItem[];

export type MenuProps = {
  className ?: string;
  disabled ?: boolean;
  items : MenuItemGroup[];
  label : React.ReactNode;
};

declare const Menu: React.FC<MenuProps>;

export default Menu;
