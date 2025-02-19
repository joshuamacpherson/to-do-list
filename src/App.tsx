import Container from './Components/Container';

function App() {
  return (
    <div>
      <div className="p-12 font-[JetBrains_Mono] text-5xl font-extrabold flex items-start justify-start text-left text-[#cacaca]">
        <h1>Simple To-Do</h1>
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;
