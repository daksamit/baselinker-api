# baselinker-api

It's simple library, that helps to work with baselinker api in javascript/typescript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Add dependency to your project:

```sh
yarn add baselinker-api
```

## Usage

Here is an example how to use:

```ts
import { baselinkerClient, types } from 'baselinker-api'

const token = '1234-56789-8JGKELWOIRJD8JWJQJB0DKEILBJLKSD3WJLKJEJIO3NC'
const options = { token }
const client = baselinkerClient(options)

const storages: types.Storages[] = await client.getStoragesList()
// or
const orderStatusList: types.OrderStatusResponse = await client.request('getOrderStatusList')
```

You can read more on [api.baselinker.com](https://api.baselinker.com).

## Support

Please [open an issue](https://github.com/daksamit/baselinker-api/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/daksamit/baselinker-api/compare/).
