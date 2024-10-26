import Navbar from "@/components/Navbar";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
