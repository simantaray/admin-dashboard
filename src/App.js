import Body from "./Pages/Body";
import ExtraDetails from "./Pages/ExtraDetails";
import Nav from "./Pages/Nav";

function App() {
  return (
    <div className="App relative">
      {/* navs */}
      <Nav />
      {/* body */}
      <Body />
      <div className='absolute top-[85px] left-[75vw] hidden xl:block'>
          <ExtraDetails />
      </div>

    </div>
  );
}

export default App;
