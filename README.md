📝 Next.js Portfolio Project – Task 1

This project is a beginner-level Next.js portfolio website built using the App Router.
It contains a homepage, an About section with a nested layout, and a Users section that fetches user data from a fake API and displays it using dynamic routing.

This project demonstrates the basics of:

Next.js App Router

Server Components

Dynamic Routes

Data Fetching (fetch)

Route-specific layouts

Navigation using next/link

Error & loading handling

🚀 Features Implemented
✔ 1. Portfolio Home Page

A simple homepage introducing the developer.

✔ 2. About Page with Subpages

The About page uses its own layout.tsx containing:

Background

Skills

Experience

Each of these is its own route:

/about/background
/about/skills
/about/experience


And they all share a common About layout with navigation buttons.

✔ 3. Users Page (Replaced Projects Tab)

Instead of a "Projects" tab, this task uses a Users tab.

The Users page:

Fetches real data from JSONPlaceholder API

https://jsonplaceholder.typicode.com/users


Displays list of users

Each user links to a dynamic route

Example URL:

/users/3

✔ 4. Dynamic User Details Page

Each user page fetches additional information for that specific user.

✔ 5. Error & Loading Handling

If the API fails, Next.js automatically loads error.tsx

While data is loading, loading.tsx appears

🗂 Project Structure
app/
 ├─ layout.tsx                 # Global layout
 ├─ page.tsx                   # Home page
 ├─ about/
 │    ├─ layout.tsx            # About layout
 │    ├─ page.tsx              # About main
 │    ├─ background/
 │    │     └─ page.tsx
 │    ├─ skills/
 │    │     └─ page.tsx
 │    └─ experience/
 │          └─ page.tsx
 ├─ users/
 │    ├─ page.tsx              # User list page
 │    ├─ loading.tsx           # Automatic loading UI
 │    ├─ error.tsx             # Error UI when data fails
 │    └─ [id]/
 │          └─ page.tsx        # Dynamic user detail page
public/
 └─ images/
styles/
 └─ globals.css

🔧 Technologies Used

Next.js 14 (App Router)

React 18

TypeScript

Tailwind CSS (styling)

JSONPlaceholder API for fake user data

Dynamic Routing

Next.js Routing Layouts

Server Components

📦 How It Works
⭐ Users Page (/users)

Fetches user list using fetch() inside a Server Component

Displays users with clickable links

Each link navigates to a dynamic route

⭐ Dynamic Route (/users/[id])

Reads the id from URL

Fetches the user details

Displays user info on a dedicated page

⭐ About Section

Uses a nested layout so all about pages share the same navigation and styling.

🧪 What You Learned in This Task

How to build pages/routes with App Router

How to build nested layouts

How to use server-side data fetching

How to use dynamic segments ([id])

How to create error & loading UI

How to structure a Next.js application properly

How to use Tailwind for UI

How to use next/link for navigation

▶️ Getting Started

Install dependencies:

npm install


Run development server:

npm run dev


Visit:

http://localhost:3000

🙌 Future Improvements

Add search to Users page

Add pagination

Create a real Projects page later

Add a contact form

Integrate animations using Framer Motion
