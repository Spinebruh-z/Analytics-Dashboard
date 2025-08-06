import Link from "next/link";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/analytics", label: "Analytics" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 border-r">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <p className="p-2 rounded-md hover:bg-accent">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
