# baselinker-api

It's simple library, which helps to work with baselinker api in js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Add dependency to your project:

```sh
yarn add baselinker-api
# or
npm install baselinker-api
```

## Usage

Here is an example how to use:

```ts
import { baselinkerClient, types } from 'baselinker-api'

// generate token here: https://panel.baselinker.com/other_api_token.php
const token = process.env.BL_TOKEN || '1234-56789-8JGKELWOIRJD8JWJQJB0DKEILBJLKSD3WJLKJEJIO3NC'
const options = { token }
const client = baselinkerClient(options)

// example 1:
const storages: types.Storages[] = await client.getStoragesList()
// example 2:
const orderStatusList: types.OrderStatusResponse = await client.request('getOrderStatusList')
```

You can read more on [api.baselinker.com](https://api.baselinker.com).

## Future plans

- replace deprecated 'request' module with modern one

## Support

Please [open an issue](https://github.com/daksamit/baselinker-api/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/daksamit/baselinker-api/compare/).
