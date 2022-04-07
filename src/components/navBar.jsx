import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navBar shadows">
      <a href="/index.html">
        <h1 className="pd-x-md mg-x-md fs-xxl">Meowmodoro</h1>
      </a>

      <div className="rightNav mg-r-md">
        <a href="https://www.github.com/sameony/pomodoro" target="_blank">
          <div className="fs-xl fab fa-github" aria-hidden="true">
            Github
          </div>
        </a>
      </div>
      <div className="rightBurger">
        <i className="fa-solid fa-bars fs-xl mg-sm"></i>
      </div>
    </nav>
  );
};
