const TailwindTest = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        Tailwind CSS Test
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow">
          Red Card
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow">
          Green Card
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow">
          Blue Card
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
        Test Button
      </button>
    </div>
  );
};

export default TailwindTest;