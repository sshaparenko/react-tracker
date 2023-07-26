const Header = () => {
  return (
    <header className="header text-white flex flex-row justify-between p-5">
      <a href="#">back</a>
      <h1 className="text-3xl">Project Title</h1>
      <p className="h-fit px-2  border border-red-600 rounded-lg text-red-500">tag</p>
    </header>
  );
}

export default Header;