# FinTrack Dashboard

FinTrack Dashboard is a modern, responsive financial dashboard built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/). 

It provides a clean interface for tracking wallets, transactions, reports, and more.

## Features

- 📊 **Dashboard Overview**: Get a quick summary of your financial status.
- 💸 **Transactions**: View and manage your transaction history.
- 📈 **Reports**: Generate and analyze financial reports.
- ⚙️ **Settings**: Customize your dashboard preferences.
- 👥 **User Avatars**: Display active users and their statuses.
- 🌙 **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [clsx](https://github.com/lukeed/clsx) for conditional classNames
- [react-icons](https://react-icons.github.io/react-icons/) for iconography

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/fintrack-dashboard.git
   cd fintrack-dashboard


2. **Install dependencies:**

    npm install
    # or
    yarn install


3. **Run the development server:**

    npm run dev
    # or
    yarn dev

4. **Open http://localhost:3000 to view the dashboard.**

Build for Production

npm run build
npm start


Project Structure

app/
  components/      # Reusable React components 

  globals.css      # Global styles (Tailwind CSS)

  [layout.tsx](http://_vscodecontentref_/0)       # Root layout

  page.tsx         # Main dashboard page

public/
  icons/           # SVG icons
  images/          # User avatars and other images



Customization
Add new pages: Create new files in app/ or app/components/.
Change theme: Edit Tailwind config or update globals.css.
Update navigation: Modify the links array in app/components/SideBar.tsx.