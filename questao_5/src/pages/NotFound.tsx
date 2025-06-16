const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-3xl text-indigo-600">
          404 - Page Not found
        </h1>
        <p className="text-xl">The page you are looking for does not exist.</p>
        <a href="/" className="text-lg text-blue-500 hover:underline">
          Return the home page!
        </a>
      </div>
    </div>
  );
};

export default NotFound;
