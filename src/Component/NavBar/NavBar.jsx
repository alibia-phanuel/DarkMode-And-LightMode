import "./Navbar.css";

function NavBar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="NavBar">
      <div className="logo">logo</div>

      <ul>
        <li>home</li>
        <li>services</li>
        <li>teams</li>
        <li>contact</li>
      </ul>

      <div
        onClick={() => {
          toggle_mode();
        }}
        className="iconne-container"
      >
        {theme == "light" ? (
          <div className="icone">
            <i className="fa-solid fa-moon"></i>
          </div>
        ) : (
          <div className="icone">
            <i className="fa-solid fa-sun"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
