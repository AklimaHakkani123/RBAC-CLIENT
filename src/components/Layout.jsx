import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {useAuth} from '../auth/authContext';
import {classNames} from '../utils/classNames';

export default function Layout() {
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const getNavClassName = ({isActive}) =>
    classNames(
      'rounded-full px-3 py-1.5 text-sm font-semibold transition',
      isActive
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-300/60'
        : 'text-slate-700 hover:bg-indigo-100 hover:text-indigo-700',
    );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <span className="text-lg font-bold tracking-tight text-indigo-700">
              <Link to="/dashboard">RBAC-PM</Link>
            </span>

            <nav className="flex flex-wrap items-center gap-2">
              <NavLink className={getNavClassName} to="/dashboard">
                Dashboard
              </NavLink>
              <NavLink className={getNavClassName} to="/projects">
                Projects
              </NavLink>
              {user?.role === 'ADMIN' && (
                <NavLink className={getNavClassName} to="/users">
                  Users
                </NavLink>
              )}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 sm:text-sm">
              {user?.email} | {user?.role}
            </span>
            <button
              className="rounded-full bg-linear-to-r from-indigo-600 to-fuchsia-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-indigo-300/45 transition hover:from-indigo-500 hover:to-fuchsia-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
}
