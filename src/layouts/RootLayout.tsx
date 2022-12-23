import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export function RootLayout() {
  return (
    <div>
      <header className="bg-slate-600 flex justify-between p-3 text-white">
        <span>My Site</span>
        <nav className="flex gap-3">
          {routes.map((route) => (
            <NavLink
              className={({ isActive }) =>
                clsx("hover:underline", isActive && "text-red-500")
              }
              key={route.name}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
