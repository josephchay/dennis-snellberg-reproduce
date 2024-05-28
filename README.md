# Folio 2024 - Joseph Chay

---

## Table of Contents

- [About](#about)
- [Demo](#-demo)
- [Technologies](#-technologies)
- [Usage](#usage)
  - [Cloudinary Setup](#cloudinary-setup)
  - [Development](#development)

## About

Joseph Chay greets you from his virtual space! This encapsulates at all his interests and skills.
His works demonstrate smooth and memorable experiences, bringing quality and accuracy to every project.

## ✨ Demo

Visit the portfolio [here](https://github.com/josephchay/folio-2024).

## 🔧 Technologies

![Next.js](https://img.shields.io/badge/-Next.js-05122A?style=for-the-badge&logo=next.js) &nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript) &nbsp;
![GSAP](https://img.shields.io/badge/-GreenSock-05122A?style=for-the-badge&logo=greensock) &nbsp;
![Framer Motion](https://img.shields.io/badge/-FramerMotion-05122A?style=for-the-badge&logo=framer) &nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-05122A?style=for-the-badge&logo=tailwindCSS&logoColor=06B6D4)

## Usage

### Cloudinary Setup
Setup your Cloudinary account and insert your cloud name in `.env.local`.
Create a `.env.local` file in the root directory if not yet, based on the template given in `.env.local.example`.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

As of 28th May 2024, you can find your Cloud Name under **Settings > Product Environments** at https://console.cloudinary.com/.

For further integration with Cloudinary, refer to the [documentation for NextJS](https://cloudinary.com/guides/front-end-development/integrating-cloudinary-with-next-js).

### Development

Install the dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Go to [http://localhost:3000](http://localhost:3000) or any other port specified in the terminal to see the result.
