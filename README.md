# Next.js Portfolio – Task 1

This is my first Next.js project built using the App Router.  
In this task, I replaced the "Projects" tab with a **Users** tab that displays a list of users fetched from a fake API, along with dynamic user detail pages.

---

## 🚀 Features

### ✔ Portfolio Pages
- Home page
- About page with subpages:
  - Background
  - Skills
  - Experience
- Shared layout for all About pages

### ✔ Users Page (Replaced Projects)
- Fetches users from JSONPlaceholder API:
  https://jsonplaceholder.typicode.com/users
- Displays a list of users
- Each user links to a dynamic route (`/users/[id]`)

### ✔ Dynamic User Details Page
- Fetches detailed info for a specific user
- Displays the user's ID and other information

### ✔ Error & Loading Handling
- `loading.tsx` shows while data loads
- `error.tsx` shows if fetch fails

---

## 🗂 Folder Structure

app/
├─ layout.tsx
├─ page.tsx
├─ about/
│ ├─ layout.tsx
│ ├─ page.tsx
│ ├─ background/
│ │ └─ page.tsx
│ ├─ skills/
│ │ └─ page.tsx
│ └─ experience/
│ └─ page.tsx
├─ users/
│ ├─ page.tsx
│ ├─ loading.tsx
│ ├─ error.tsx
│ └─ [userId]/
│ └─ page.tsx
public/
styles/

## 🛠 Technologies Used
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- JSONPlaceholder Fake API

---

## ▶️ Getting Started

**Install dependencies:**

npm install

**Run the development server:**

npm run dev

**Open in browser:**

http://localhost:3000
