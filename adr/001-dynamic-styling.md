# 1. Dynamic styling

Date: 2022-07-22

## Context

One of our stakeholders (@cubanducko) needs our "game of life" app to be branded and re-packaged to multiple clients

## Decision

`styled-components` supports the creation of `Theme` contexts that allow defining common styling variables.
<br>
Clients can customized the look and feel of our app by just provided a set of assets / theme parameters. We will call this set of assets / parameters, `brands`.
<br>
We decided the general structure of this `Theme` context will a subset on the `Material UI` one.

## Consequences

Implement a `Theme` provider that injects all the `brand` parameters and provides a set of tools for re-usable styling

## Additional links

https://styled-components.com/docs/advanced#theming<br>
https://mui.com/material-ui/customization/theming/
