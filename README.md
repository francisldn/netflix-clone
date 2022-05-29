
# Netflix-Clone 
### Build with TypeScript, NextJS/React, TailwindCSS, integration with Firebase and Stripe
This project aims to build the Netflix web user interface, primarily using Typescript, NextJS and TailwindCSS. Below is the screenshot of the landing page.

[Code](https://github.com/francisldn/netflix-clone)
</br>
[Frontend](https://netflix-clone-francisldn.vercel.app/login)

<img src="/public/netflix-screenshot.png"
     alt="netflix screenshot" />

## Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app -- --example with-tailwindcss with-tailwindcss-app
```
## Challenges in building the app
*** NextJS API rendering ***
I learnt how to use ``getServerSideProps`` and ``getStaticProps`` to receive API from TMDB and Firebase. With the ``firestore-stripe-payments`` package, there is also a need to transpile the module using ``next-transpile-module`` package.
*** Integration with Firestore database and Firebase authentication ***
The greatest learning for me is how to integrate the web app with various Firebase functionalities such as database, authentication and Stripe extension. Firestore database is amazingly easy to use with very minimal configuration needed, and the documentation is very clear. 
*** Integration with Stripe ***
To use the Stripe payment, one needs to create a Stripe account and then create the products that will be sold. To sync the data between Firebase and Stripe, one needs to create a webhook. Through Firebase extension, user payment data can be transferred to Firebase instantly. 
*** Creating hooks to facilitate the passing of state ***
Learnt how to create hooks which facilitate the passing of states to another component

## Dependencies
A number of very useful dependencies are worth mentioning:
*** ReactPlayer ***
Facilitate the creation of a modal component for playing youtube videos
*** React-Hot-Toast ***
Styled react component to provide notification to users
*** React-hook-form ***
Facilitate the creation of a form component with relevant utilities for input validation
*** Hero-Icons & React Icons ***
Useful package to get different react icon components
*** Material-UI ***
Material UI is used to style MuiModal
*** Recoil *** 
Recoil is used to manage state, similar to Redux but much simpler
*** Firestore-Stripe-Payment ***
Useful package for firestore-stripe payment integration