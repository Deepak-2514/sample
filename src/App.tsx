import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner"></img>
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without The Hassle
            </h1>
            <Search />
          </header>
        </div>
      </div>
    </main>
  );
};

export default App;
