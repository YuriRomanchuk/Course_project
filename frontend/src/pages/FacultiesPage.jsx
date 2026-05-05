import { useState, useEffect } from 'react';

export default function FacultiesPage() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5005/api/faculties')
      .then(response => response.json())
      .then(data => setFaculties(data.data))
      .catch(error => console.error("Помилка:", error));
  }, []);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg overflow-x-auto">
      <h3 className="text-xl font-medium mb-4 text-white">Список Факультетів</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-700/50 border-b border-slate-600 text-slate-300">
            <th className="p-4 font-medium">#</th>
            <th className="p-4 font-medium">Назва Факультету</th>
            <th className="p-4 font-medium">Опис</th>
            <th className="p-4 font-medium">Дії</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {faculties.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-8 text-center text-slate-500">Завантаження...</td>
            </tr>
          ) : (
            faculties.map((faculty, index) => (
              <tr key={faculty._id} className="hover:bg-slate-700/20 transition-colors">
                <td className="p-4 text-slate-400">{index + 1}</td>
                <td className="p-4 font-semibold text-white">{faculty.facultyName}</td>
                <td className="p-4 text-slate-400">Опис відсутній</td>
                <td className="p-4">
                  <button className="text-indigo-400 hover:text-indigo-300 font-medium">Деталі</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}