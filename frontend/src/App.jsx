import { Routes, Route } from 'react-router-dom'; // Імпортуємо маршрутизатор
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FacultiesPage from './pages/FacultiesPage';
import DepartmentsPage from './pages/DepartmentsPage';

function App() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-200 font-sans">
      <Sidebar/>
      <main className="flex-1 p-8 overflow-y-auto">
        <Header/>
        
        
        <Routes>
          <Route path="/" element={<h2 className="text-xl text-slate-400">Головна сторінка (Тут буде статистика)</h2>} />
          <Route path="/faculties" element={<FacultiesPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;