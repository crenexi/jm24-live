import { FC, useState, ReactNode } from 'react';
import { Icon } from '@components/legos';
import { Button } from '@components/action';
import sy from './MediaOption.scss';

type MediaOptionProps = {
  children?: ReactNode;
  title: string;
  subtitle: string;
  pretext: string;
  steps: {
    icon: string;
    heading: string;
    text: string;
  }[];
};

type Toggle = {
  isOpen: boolean;
  icon: string;
  text: string;
};

const MediaOption: FC<MediaOptionProps> = (props) => {
  const { children, title, subtitle, pretext, steps } = props;

  const toggleClosed = {
    isOpen: false,
    icon: 'chevron-right',
    text: 'See instructions',
  };

  const toggleOpen = {
    isOpen: true,
    icon: 'chevron-down',
    text: 'Hide',
  };

  const [toggle, setToggle] = useState<Toggle>(toggleClosed);

  const handleToggle = () => {
    if (toggle.isOpen) return setToggle(toggleClosed);
    setToggle(toggleOpen);
  };

  return (
    <div className={sy.main}>
      <div className={sy.header}>
        <div className={sy.header_title}>{title}</div>
        <div className={sy.header_subtitle}>{subtitle}</div>
      </div>
      <div className={sy.pretext}>{pretext}</div>
      <div className={sy.content}>{children}</div>
      <div className={sy.toggle}>
        <Button
          click={handleToggle}
          startIcon={toggle.icon}
          sx={{ width: '100%' }}
          size="lg"
        >
          {toggle.text}
        </Button>
      </div>
      {toggle.isOpen && (
        <div className={sy.steps}>
          {steps.map(({ icon, heading, text }, index) => (
            <div className={sy.step} key={heading}>
              <div className={sy.step_num}>STEP {index + 1}</div>
              <div className={sy.step_header}>
                <div className={sy.step_icon}>
                  <Icon name={icon} />
                </div>
                <div className={sy.step_heading}>{heading}</div>
              </div>
              <div className={sy.step_text}>{text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaOption;
