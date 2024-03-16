import { FC, createElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@components/action';

import KitLogosFavs from './KitLogosFavs/KitLogosFavs';
import KitButtonsEssentials from './KitButtonsEssentials';
import KitButtonsSpecial from './KitButtonsSpecial';
import KitFeedback from './KitFeedback';
import sy from './Components.scss';

const Components: FC = () => {
  const sections = [
    {
      key: 'brand',
      title: 'Essential Brand',
      component: KitLogosFavs,
    },
    {
      key: 'buttons1',
      title: 'Essential Buttons',
      component: KitButtonsEssentials,
    },
    {
      key: 'buttons2',
      title: 'Special-Case Buttons',
      component: KitButtonsSpecial,
    },
    {
      key: 'feedback',
      title: 'Feedback-Related',
      component: KitFeedback,
    },
  ];

  const sxActive = { fontWeight: 700 };

  return (
    <div className={sy.edge}>
      <nav className={sy.nav}>
        {sections.map((section) => (
          <div className={sy.nav_item} key={section.key}>
            <Button
              mode="navLink"
              variant="ghost"
              to={`/toolkit/components/${section.key}`}
              sxActive={sxActive}
              sx={{ width: '100%' }}
              unfocus
            >
              {section.title}
            </Button>
          </div>
        ))}
      </nav>
      <div className={sy.main}>
        <div className={sy.main_center}>
          <Routes>
            <Route path="/" element={<Navigate replace to="buttons1" />} />
            {sections.map((section) => (
              <Route
                key={section.key}
                path={section.key}
                element={createElement(section.component)}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Components;
