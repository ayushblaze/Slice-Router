# 🍕 Slice-Router

A modern, full-featured pizza ordering app built with **React**, **Redux Toolkit (RTK)**, and **React Router v6**. Styled with **Tailwind CSS** and powered by **Vite** for lightning-fast development.

---

## 🚀 Features

- **Modern React** (v18+) with functional components and hooks.
- **Redux Toolkit (RTK)** for state management, using:
  - Multiple feature slices (`cart`, `user`) for modular state.
  - Advanced patterns like `createAsyncThunk` for async logic (e.g., geolocation and address fetching).
  - Selectors for efficient state access.
- **React Router v6** for routing, navigation, and data loading:
  - Uses route loaders and actions for data fetching and mutations.
  - **Order priority updates** - customers can upgrade their order to priority even after placement using form actions.
  - No external data-fetching libraries (like React Query or SWR) are used—**all data fetching is handled via React Router loaders/actions and native `fetch`**.
- **Currency Conversion**: Automatic conversion from Euro to Indian Rupees (INR) with proper formatting using `Intl.NumberFormat`.
- **Tailwind CSS** for utility-first, responsive, and modern UI.
- **Vite** for instant hot module reloads and fast builds.
- **ESLint** and **Prettier** (with Tailwind plugin) for code quality and formatting.

---

## 🏗️ Project Structure

```
src/
  features/
    cart/      # Cart slice, components, and logic
    menu/      # Menu display and data loading with currency conversion
    order/     # Order creation, viewing, search, and priority updates
    ui/        # Shared UI components (Header, Button, Loader, etc.)
    user/      # User slice and user-related components
  services/    # API utilities (fetching menu, orders, geocoding)
  utilities/   # Helper functions (formatting, calculations, currency conversion)
  store.js     # Redux store setup with RTK
  main.jsx     # App entry point, Redux and Router providers
  App.jsx      # Main app and route definitions
```

---

## 🧑‍💻 How It Works

### State Management with RTK

- **Slices**: The app uses multiple RTK slices (`cartSlice`, `userSlice`) for modular state management.
- **Async Thunks**: For example, `userSlice` uses `createAsyncThunk` to fetch the user's geolocation and resolve their address asynchronously.
- **Selectors**: Custom selectors are used for derived state (e.g., total cart price, quantity).

### Routing and Data Loading

- **React Router v6** is used for all navigation and data loading.
- **Loaders and Actions**: Data fetching (menu, order details) and mutations (creating orders, updating order priority) are handled via route loaders and actions, not via external libraries.
- **Order Priority Updates**: Customers can upgrade their order to priority status even after it has been placed, using React Router's form actions with `useFetcher` for optimistic updates.
- **Currency Conversion**: Menu and order data is automatically converted from Euro to Indian Rupees (INR) using a conversion rate of 1 EUR = 90 INR.
- **No React Query/SWR**: All data fetching is done with native `fetch` and React Router's built-in mechanisms.

### UI and Styling

- **Tailwind CSS**: All components are styled using Tailwind for a modern, responsive look.
- **Reusable Components**: Buttons, loaders, and layout components are shared across features.

### Tooling

- **Vite**: For fast development and builds.
- **ESLint & Prettier**: Enforced code style and best practices.

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📦 Notable Packages

- [`@reduxjs/toolkit`](https://redux-toolkit.js.org/)
- [`react-redux`](https://react-redux.js.org/)
- [`react-router-dom`](https://reactrouter.com/en/main)
- [`tailwindcss`](https://tailwindcss.com/)
- [`vite`](https://vitejs.dev/)

---

## 📝 Highlights

- **RTK with Modern Patterns**: Uses `createSlice`, `createAsyncThunk`, and selectors for robust, scalable state management.
- **React Router Data APIs**: All data fetching and mutations are handled via React Router's loaders and actions—no need for extra libraries.
- **Order Priority Updates**: Demonstrates advanced React Router patterns with `useFetcher` for optimistic updates and form actions for mutations.
- **Currency Conversion**: Seamless conversion from Euro to Indian Rupees with proper internationalization using `Intl.NumberFormat`.
- **No External Data Fetching Libraries**: Simplicity and performance by relying on native `fetch` and React Router.
- **Clean, Modular Codebase**: Each feature is isolated, making the codebase easy to navigate and extend.
- **Beautiful UI**: Tailwind CSS ensures a consistent, modern look.

---

## 📂 Example Code Snippets

**RTK Async Thunk for Geolocation:**
```js
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // Get geolocation and resolve address
  }
);
```

**React Router Loader for Data Fetching:**
```js
export async function loader() {
  const menu = await getMenu();
  return menu;
}
```

**Currency Conversion Utility:**
```js
// Currency conversion rate: 1 EUR = ~90 INR
const EUR_TO_INR_RATE = 90;

export function convertEurToInr(eurAmount) {
  return Math.round(eurAmount * EUR_TO_INR_RATE);
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
}
```

**Menu Loader with Currency Conversion:**
```js
export async function loader() {
  const menu = await getMenu();
  
  // Convert Euro prices to Indian Rupees
  const menuWithInrPrices = menu.map(pizza => ({
    ...pizza,
    unitPrice: convertEurToInr(pizza.unitPrice)
  }));
  
  return menuWithInrPrices;
}
```

**Order Priority Update with Form Actions:**
```js
// Using useFetcher for optimistic updates
function UpdateOrder() {
  const fetcher = useFetcher();
  
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

// Form action for mutation
export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
```

**No React Query/SWR:**
- All data fetching is done with `fetch` inside loaders/actions or thunks.

---

## 🏁 Conclusion

This project demonstrates a modern, idiomatic React architecture with Redux Toolkit and React Router, focusing on simplicity, performance, and best practices—**without relying on external data-fetching libraries**. The order priority update feature showcases advanced React Router patterns for handling mutations with optimistic updates, while the currency conversion system provides seamless internationalization support.

---
