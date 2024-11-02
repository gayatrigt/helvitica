# OnchainKit Mint Component Demo

A web application showcasing the OnchainKit [Mint Component](https://onchainkit.xyz/nft/nft).

Start yours by cloning this repository. 

Start your own onchain app with `bun create onchain`. 

## Overview

Iconomic Moments is a collection of moments that have shaped the history of Base, presented through a modern web interface. The application displays NFTs from multiple contract addresses, providing detailed information about each piece including media, title, ownership details, mint date, and network information.


## Getting Started

### Prerequisites

- Bun installed on your system
- CDP API key
- OnchainKit installed
- Node.js 16.8 or later

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env` file in the root directory and add necessary environment variables.

4. Start the development server:
```bash
bun dev
```

The application will be available at `http://localhost:3000`.

## NFT Contracts

The application displays NFTs from the following contract addresses on Base:

- 0xb4703a3a73aec16e764cbd210b0fde9efdab8941
- 0x34ee9c5307d2bbcbf0c961b14eea7faaaa2dbf21
- 0xc5183533f98aa1520e6eff0c4b184c8b2c1b781e
- 0xc6a1f929b7ca5d76e0fa21eb44da1e48765990c5
- 0x03a4baf3c9450aa25ed21b042001f53d129caeb3
- 0xd722ffa7fe325cae2939e8715b4384d1d8479d88

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── MintComponents.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .env
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
