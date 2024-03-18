import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Navbar />
          <h1>Hello Word</h1>
        </div>
      </div>
    </main>
  );
}
