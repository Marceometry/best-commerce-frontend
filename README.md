<h1 align="center">Best Commerce</h1>

This is a [Next.js 13](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The project consists in a Whitelabel E-Commerce platform that is meant to consume the [Best Commerce API](https://github.com/Marceometry/best-commerce-backend), using a unique `STORE_ID` that represents the e-commerce owner company, which is used to list the available products, for example.

## Getting Started

First, follow the steps to run the Best Commerce API [here](https://github.com/Marceometry/best-commerce-backend#readme).

Now that you have a `STORE_ID` in hands, add it in a file called `.env.local`, in the root of the project, following `.env.example`:

```bash
NEXT_PUBLIC_API_URL="http://localhost:3333"
STORE_ID="STORE_ID_VALUE_HERE"
```

## Installation

```bash
npm i
# or
yarn
```

## Running the app

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project running.
