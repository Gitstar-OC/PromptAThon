// app/page.js
import Navbar from "@/components/Navbar";
import Content from "@/components/Content/Content";
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 text-gray-900 dark:text-gray-100">
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted for better responsiveness */}
        <Navbar />
        <Content /> 
        {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-8">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}
