# Movie Information Component ANDREW SDC

> Service module for SDC (Andrew Chung Babbage-1)

## Related Projects
All repo's within babbage-1 group
  - https://github.com/babbage-1

Most relavant: Proxy server for Andrew
  - https://github.com/babbage-1/andrew-sdc-proxy

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [CRUDEndpoints](#CRUDEndpoints)
1. [Development](#development)

## Usage

```sh
npm install;
npm run server-dev;
npm run build;
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## CRUDEndpoints
  - Create: "/info/:id/post"
  - Read: "/info/:id" & "/info/:id/poster"
  - Update: "/info/:id/post"
  - Delete: "/info/:id/delete"

### Installing Dependencies

From within the root directory:

```sh
npm install
```

