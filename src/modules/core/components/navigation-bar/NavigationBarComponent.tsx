import { NavLink } from 'react-router-dom';
import './NavigationBarComponent.css';

export function NavigationBarComponent() {
  return (
    <nav className="navigationBarComponent">
      <ul className="navigationBarComponentLinks">
        <NavLink
          to="/"
          exact={true}
          className="navigationBarComponentLinksItem"
          activeClassName="active"
        >
          Home
        </NavLink>

        <NavLink
          to="/courses"
          className="navigationBarComponentLinksItem"
          activeClassName="active"
        >
          Courses
        </NavLink>
      </ul>
    </nav>
  );
}
