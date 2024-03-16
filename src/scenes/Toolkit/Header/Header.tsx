import { FC, ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@components/action';
import { SectionType } from '../Toolkit';
import CULogo from '../CULogo';
import sy from './Header.scss';

type HeaderProps = {
  sections: SectionType[];
  showCode: boolean;
  setShowCode: (showCode: boolean) => void;
};

type HandleShowCode = (ev: ChangeEvent<HTMLInputElement>) => void;

const Header: FC<HeaderProps> = (props) => {
  const { sections, showCode, setShowCode } = props;

  const sxActive = { fontWeight: 700 };

  // Code display
  const handleShowCode: HandleShowCode = (ev) => {
    setShowCode(ev.target.checked);
  };

  return (
    <header className={sy.header}>
      <CULogo />
      <div className={sy.heading}>Toolkit</div>
      <nav className={sy.nav}>
        {sections.map((section) => (
          <div className={sy.nav_item} key={section.key}>
            <Button
              mode="navLink"
              variant="ghost"
              to={`/toolkit/${section.key}`}
              sxActive={sxActive}
              unfocus
            >
              {section.title}
            </Button>
          </div>
        ))}
      </nav>
      <div className={sy.codeToggle}>
        <FormControlLabel
          label="Show Code"
          control={
            <Checkbox
              name="showCode"
              checked={showCode}
              onChange={handleShowCode}
            />
          }
        />
      </div>
    </header>
  );
};

export default Header;
