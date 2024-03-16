import useDataStatic from '@hooks/use-data-static';
import WedActions from './WedActions';
import Alpacas from './Alpacas';
import sy from './Home.scss';

const Home = () => {
  const dStatic = useDataStatic();
  const collage = dStatic.collage5 || [];

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.collage}>
          {collage.map((url) => (
            <div
              key={url}
              className={sy.collage_item}
              style={{ backgroundImage: `url('${url}')` }}
            ></div>
          ))}
        </div>
        <div className={sy.welcome}>
          <div className={sy.welcome_text1}>{dStatic.welcome?.text1}</div>
          <div className={sy.welcome_text2}>{dStatic.welcome?.text2}</div>
        </div>
      </div>
      <div className={sy.main}>
        <WedActions />
      </div>
      <div className={sy.footer}>
        <div className={sy.enjoy_text1}>Please</div>
        <div className={sy.enjoy_text2}>Enjoy!</div>
      </div>
      <Alpacas />
    </div>
  );
};

export default Home;
