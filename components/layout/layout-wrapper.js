import { useRouter } from 'next/router';

import ProtectedRoute from '../protect/protected-route';

const authenticatedRoutes = ['/about'];

function LayoutWrapper({ children }) {
  const router = useRouter();

  return (
    <>
      {authenticatedRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  );
}

export default LayoutWrapper;
