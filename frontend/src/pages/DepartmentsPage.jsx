import { useState, useEffect } from 'react';

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5005/api/departments')
      .then(response => response.json())
      .then(data => {
        setDepartments(data.data || []);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Помилка:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg overflow-x-auto">
      <h3 className="text-xl font-medium mb-4 text-white">Список Кафедр</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-700/50 border-b border-slate-600 text-slate-300">
            <th className="p-4 font-medium">#</th>
            <th className="p-4 font-medium">Назва Кафедри</th>
            <th className="p-4 font-medium">Опис</th>
            <th className="p-4 font-medium">Дії</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {isLoading ? (
            <tr>
              <td colSpan="4" className="p-8 text-center text-slate-500">Завантаження...</td>
            </tr>
          ) : departments.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-8 text-center text-slate-500">Список порожній</td>
            </tr>
          ) : (
            departments.map((department, index) => (
              <tr key={department._id} className="hover:bg-slate-700/20 transition-colors">
                <td className="p-4 text-slate-400">{index + 1}</td>
                <td className="p-4 font-semibold text-white">{department.departmentName}</td>
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
