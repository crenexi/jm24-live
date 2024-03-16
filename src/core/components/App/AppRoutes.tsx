import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '@config/app-routes';
import Home from '@scenes/Home';
import Error from '@scenes/Error';

const AppRoutes: FC = () => {
  const RouteHome = <Route index path="/" element={<Home />} />;
  const Route404 = <Route path="*" element={<Error code={404} />} />;

  const RouteList = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <Routes>
      {RouteHome}
      {RouteList}
      {Route404}
    </Routes>
  );
};

export default AppRoutes;
