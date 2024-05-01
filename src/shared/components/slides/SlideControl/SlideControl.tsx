import { FC } from 'react';
import { Album } from '@stypes/Slide.types';
import useSlides from '@hooks/use-slides';
import { ButtonIcon } from '@components/action';
import sy from './SlideControl.scss';

type SlideControlProps = {
  album: Album;
};

const SlideControl: FC<SlideControlProps> = ({ album }) => {
  const { actions } = useSlides();

  return (
    <div className={sy.edge}>
      <ButtonIcon
        variant="secondary"
        name="backward-step"
        click={() => actions.toPrev({ album })}
      />
      <ButtonIcon
        variant="secondary"
        name="forward-step"
        click={() => actions.toNext({ album })}
      />
      <ButtonIcon
        variant="secondary"
        name="rotate-left"
        click={actions.restart}
      />
    </div>
  );
};

export default SlideControl;
