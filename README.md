# react-menu

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/react-menu/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/react-menu.svg?style=flat)](https://www.npmjs.com/package/@bscop/react-menu)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/react-menu.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/react-menu)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/react-menu)](https://app.codecov.io/gh/brunoscopelliti/react-menu/)

Accessible menu (in React).

[View in Storybook](https://brunoscopelliti.github.io/react-menu).

## Install

```
npm i @bscop/react-menu
```

## Usage

```js
import Menu from "@bscop/react-menu";

function App () {
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
      label="Menu"
    />
  );
}
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
