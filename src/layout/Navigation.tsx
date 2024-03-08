import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-neutral-700 px-10 py-2">
      <ul className="flex gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="test">Test</Link>
        </li>
      </ul>
    </nav>
  );
}