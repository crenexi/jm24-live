import { FC } from 'react';
import { Story, StoryImage } from '@stypes/News.types';
import sy from './NewsPics.scss';

type NewsPicsProps = {
  story: Story | null;
};

const NewsPics: FC<NewsPicsProps> = ({ story }) => {
  if (!story) return null;

  const [image1, image2, image3] = story.images;

  const jsxImage = (image: StoryImage) => {
    const sx = { backgroundImage: `url('${image.url}')` };
    return <div className={sy.image} style={sx} />;
  };

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        {image1 && jsxImage(image1)}
        {image2 && jsxImage(image2)}
        {image3 && jsxImage(image3)}
      </div>
    </div>
  );
};

export default NewsPics;
