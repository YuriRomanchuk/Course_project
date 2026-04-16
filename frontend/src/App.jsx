import { useState } from 'react'

function App() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-200 font-sans">
      
      {/* Бокова панель */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-indigo-400">Журнал Екзаменів</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-3 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
            Головна
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
            Факультети
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
            Кафедри
          </a>
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

      {/* Основна частина (Main Content) */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Дашборд</h2>
          <p className="text-slate-400 mt-1">Керування базою даних інституту</p>
        </header>

        {/* Місце для майбутньої таблиці */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-medium mb-4">Таблиця Оцінок</h3>
          <div className="h-64 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
            <span className="text-slate-500">Тут скоро буде красива таблиця з бекенду...</span>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App