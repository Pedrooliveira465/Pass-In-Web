import nlwUniteIcon from '../assets/icon.svg';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Events</NavLink>
        <NavLink href="/participantes">Participants</NavLink>
      </nav>
    </div>
  );
}