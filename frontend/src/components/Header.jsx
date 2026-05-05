export default function Header() {
  return (
    <header className="mb-8 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-semibold text-white">Дашборд</h2>
        <p className="text-slate-400 mt-1">Керування базою даних інституту</p>
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
        Вихід
      </button>
    </header>
  );
}