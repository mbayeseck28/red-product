import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div>
          <h1>Hello Word</h1>
        </div>
      </div>
    </main>
  );
}
