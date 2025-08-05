import { ModeToggle } from "@/components/ui/theme-toggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        {/* Placeholder for User Avatar and Dropdown */}
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};
