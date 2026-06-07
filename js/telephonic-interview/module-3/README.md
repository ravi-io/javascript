# Module 3: Next.js & Modern Web Rendering (20 Questions) 🚀

Next.js is the most popular framework for React. It solves many production problems out of the box.

---

### Q41: What is Next.js and why use it over plain React?
*   **Answer**: Next.js is a framework built on top of React. It provides built-in routing, server-side rendering, and performance optimizations.
*   **Comparison**: 
    - **React**: Client-side rendering (CSR), manual routing, blank HTML initially (bad for SEO).
    - **Next**: Server-side rendering (SSR/SSG), folder-based routing, SEO friendly.

### Q42: Explain SSR (Server-Side Rendering).
*   **Answer**: The page is rendered into HTML on the server for *every* request.
*   **When**: For dynamic data that changes frequently (e.g., a news feed).

### Q43: Explain SSG (Static Site Generation).
*   **Answer**: HTML is generated at **build time**. The same file is served to all users from a CDN.
*   **Pros**: Blazing fast. Best for blogs or documentation.

### Q44: What is ISR (Incremental Static Regeneration)?
*   **Answer**: Allows you to update static pages *after* the site is built without rebuilding the whole site.
*   **Senior Context**: It's the "best of both worlds" (SSG speed + SSR freshness).

### Q45: What is the "App Router" in Next.js 13+?
*   **Answer**: A new routing system based on React Server Components, emphasizing layouts and faster streaming.

### Q46: Difference between Client Components and Server Components?
*   **Answer**: 
    - **Server Components**: Run only on the server, zero bundle size, can't use hooks (`useState`).
    - **Client Components**: Run on the client, use `'use client'`, can use hooks.

### Q47: How does routing work in Next.js?
*   **Answer**: File-system based. Creating a folder in `app/` or `pages/` automatically creates a route.

### Q48: What is the `_app` and `_document` file? (Pages Router).
*   **Answer**: `_app` initializes pages (for global CSS/state); `_document` updates the `<html>` and `<body>` tags.

### Q49: How to optimize images in Next.js?
*   **Answer**: Use the `<Image />` component. It automatically resizes, optimizes, and lazy-loads images.

### Q50: What is SEO and how does Next.js help?
*   **Answer**: Search Engine Optimization. Next.js helps by providing pre-rendered HTML that search engine bots can easily read.

### Q51: Explain "Hydration" in Next.js.
*   **Answer**: The process where client-side JavaScript attaches event listeners to the static HTML sent by the server.

### Q52: What is "Middleware" in Next.js?
*   **Answer**: Code that runs *before* a request is completed. Used for authentication, redirects, or logging.

### Q53: Difference between `getStaticProps` and `getServerSideProps`?
*   **Answer**: `getStaticProps` runs at build time (SSG); `getServerSideProps` runs on every request (SSR).

### Q54: What is the benefit of "API Routes" in Next.js?
*   **Answer**: Allows you to build a backend (serverless functions) within the same project.

### Q55: How to handle dynamic routes? (e.g., `/blog/[slug]`).
*   **Answer**: Use brackets in the filename `[slug].js`. The slug is available via `params`.

### Q56: What is "Static Export" in Next.js?
*   **Answer**: Exporting your app as pure HTML/CSS/JS that can be hosted anywhere (like S3 or GitHub Pages).

### Q57: What is "Streaming" in Next.js?
*   **Answer**: Breaking down the page HTML into chunks and sending them to the client as they are generated.

### Q58: How to use custom fonts in Next.js?
*   **Answer**: Use `next/font`. It automatically downloads and hosts fonts locally for faster performance.

### Q59: What is "Caching" in Next.js?
*   **Answer**: Next.js caches data fetching, segmented routes, and rendered HTML to speed up Subsequent requests.

### Q60: Why is Next.js better for large production apps?
*   **Answer**: Built-in optimizations (Images, Fonts, Routing), easier scaling (Serverless), and superior developer experience (DX).

---
*(Next: Module 4 - Node & Express)*
