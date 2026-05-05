import { Link } from 'react-router-dom'; // Обов'язково імпортуємо Link!

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-indigo-400">Журнал Оцінок</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {/* Замінили <a> на <Link> і вказали правильні шляхи */}
        <Link to="/" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Головна
        </Link>
        <Link to="/faculties" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Факультети
        </Link>
        <Link to="/departments" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Кафедри
        </Link>
        
        {/* Ці поки залишаємо як є, бо для них ще не створили сторінки */}
        <a href="#" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Викладачі
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Курсанти
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
          Результати
        </a>
      </nav>
    </aside>
  );
}