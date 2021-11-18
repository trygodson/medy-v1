import { NavLink } from 'react-router-dom';

export const CustomNavlink = ({ name, to }) => {
  return (
    <div className="nav-link-wrapper">
      <NavLink className="nav-link" aria-current="page" to={to} activeClassName="now">
        {name}
        <div className="active-line"></div>
      </NavLink>
    </div>
  );
};
