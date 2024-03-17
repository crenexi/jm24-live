import { useNavigate } from 'react-router-dom';
import { Button } from '@components/action';

import ViewManager from './ViewManager';
import sy from './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleToView = (view: string) => {
    navigate(`/?view=${view}`, { replace: true });
  };

  return (
    <div className={sy.edge}>
      <Button click={() => handleToView('hello')}>Hello</Button>
      <Button click={() => handleToView('wishes')}>Wishes</Button>
      <Button click={() => handleToView('slides')}>Slides</Button>
      <ViewManager />
    </div>
  );
};

export default Home;
