import { useNavigate } from 'react-router-dom';

import ViewManager from './ViewManager';
import sy from './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleToView = (view: string) => {
    navigate(`/?view=${view}`, { replace: true });
  };

  return (
    <div className={sy.edge}>
      <ViewManager />
    </div>
  );
};

export default Home;
