import { FC, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '@hooks/use-breakpoint';
import { assetsUrl } from '@constants/constants';
import sy from './MainHeader.scss';

const MainHeader: FC = () => {
  const navigate = useNavigate();
  const isGtSm = useBreakpoint('d1+');

  const urlAlpacas = `${assetsUrl}/alpacas.svg`;
  const urlLogo = `${assetsUrl}/logo-light.svg`;

  // const [drawerOpen, setDrawerOpen] = useState(true);
  // const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const jsxHeaderMain = (
    <header className={sy.header_main}>
      <div className={sy.header_start} />
      <div className={sy.header_center}>
        <div className={sy.logo} onClick={() => navigate('/')}>
          <img src={urlLogo} alt="Logo" />
        </div>
      </div>
      <div className={sy.header_end} />
    </header>
  );

  const narrowHeader = () => (
    <Fragment>
      <div className={sy.gap} />
      <div className={sy.header}>{jsxHeaderMain}</div>
    </Fragment>
  );

  const wideHeader = () => (
    <Fragment>
      <div className={sy.gap} />
      <div className={sy.header}>{jsxHeaderMain}</div>
    </Fragment>
  );

  return isGtSm ? wideHeader() : narrowHeader();
};

export default MainHeader;
