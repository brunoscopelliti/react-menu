import React from "react";

import Modal from "@bscop/react-modal";

import Menu from "../src";

export default {
  title: "Modal",
  component: Menu,
};

export const MenuContainingModalHook =
  () => {
    return (
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
                id: "about",
                label: "About",
                renderItem (baseProps, _, close) {
                  return (
                    <Modal
                      renderContent={
                        () => {
                          return (
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec
                                pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">
                                Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat
                                mi leo sit amet lectus.
                              </p>
                              <p>
                                Phasellus ac tristique orci. Nulla maximus <a href="#">justo nec dignissim consequat</a>.
                                Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat.
                                Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a href="#">pellentesque
                                ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.
                              </p>
                            </div>
                          );
                        }
                      }
                      renderHook={
                        (props) => {
                          const internalOnClick = () => {
                            close();
                            props.onClick(); // eslint-disable-line react/prop-types
                          };

                          return (
                            <button {...baseProps} {...props} onClick={internalOnClick} type="button">About</button>
                          );
                        }
                      }
                      rootId="modal-root"
                      title="Modal title"
                    />
                  );
                },
              },
            ],
          ]
        }
        label= "Menu"
      />
    );
  };
