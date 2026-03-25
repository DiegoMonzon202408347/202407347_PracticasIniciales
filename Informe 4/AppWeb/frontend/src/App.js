import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
