import { FC, createElement, ComponentType, useState } from 'react';
// import { Button } from '@components/action';
import { Routes, Route, Navigate } from 'react-router-dom';
import useBreakpoint from '@hooks/use-breakpoint';
import classNames from 'classnames';

import Header from './Header';
import Palette from './Palette';
import Typography from './Typography';
import Components from './Components';
import Iconography from './Iconography';
import SCSSThings from './SCSS';
import sy from './Toolkit.scss';

export type SectionType = {
  key: string;
  title: string;
  component: ComponentType;
};

const Toolkit: FC = () => {
  const sections: SectionType[] = [
    { key: 'palette', title: 'Palette', component: Palette },
    { key: 'typography', title: 'Typography', component: Typography },
    { key: 'components', title: 'Components', component: Components },
    { key: 'iconography', title: 'Iconography', component: Iconography },
    { key: 'scss', title: 'SCSS', component: SCSSThings },
  ];

  const isDesktop = useBreakpoint('d1+');

  const [showCode, setShowCode] = useState<boolean>(false);

  const cnEdge = classNames(sy.edge, {
    [sy.hideCode]: !showCode,
  });

  return !isDesktop ? (
    <div style={{ padding: '1.5rem' }}>Toolkit - Desktop width required!</div>
  ) : (
    <div className={cnEdge}>
      <Header
        sections={sections}
        showCode={showCode}
        setShowCode={setShowCode}
      />
      <div className={sy.main}>
        <Routes>
          <Route path="/" element={<Navigate replace to="palette" />} />
          {sections.map((section) => (
            <Route
              key={section.key}
              path={`${section.key}/*`}
              element={createElement(section.component)}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Toolkit;
