import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App flex h-screen">
      <Navbar />
      <div className="flex flex-col container mx-auto">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;