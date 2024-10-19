## Purpose
Improve the process of forecasting the last lap of a time-limited race. 

Input: 
- Current lap number the leader is on
- Time remaining when the leader last-crossed the line
- Current race-pace of the leader (their avg lap time)

Output:
- Table forecasting the time remaining at the start of each lap 

https://lastlap.robmazza.com
## Example Use
![lastlap_calc_example1](https://github.com/user-attachments/assets/753d47e5-2590-4628-b35d-989acebd4462)

From the shown table, we know that the last-lap flag will be shown to drivers on lap #14, which means the leader will be crossing the finish line with 20 seconds left in the session. Otherwise, showing last-lap on lap #13 would rob the drivers of another racing lap, and lap #15 would run overtime by a minute causing a delay in the event schedule.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
