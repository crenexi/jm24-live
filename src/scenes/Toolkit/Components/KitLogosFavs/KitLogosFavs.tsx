import { FC } from 'react';
import { CXLogo, WedLogo, WedFav, WedGif } from '@components/legos';
import { Block, BlockSet } from '../../index';
import sy from './KitLogosFavs.scss';

const KitLogosFavs: FC = () => (
  <div className={sy.edge}>
    <div className={sy.logos}>
      <BlockSet heading="Wedding Brand">
        <Block label="Fav">
          <div className={sy.logo}>
            <WedFav />
          </div>
          <code>{`<WedFav size="lg" />`}</code>
        </Block>
        <Block label="Logo Main" isDark>
          <div className={sy.logo}>
            <WedLogo size="lg" />
          </div>
          <code>{`<WedFav size="lg" />`}</code>
        </Block>
        <Block label="Logo Light" isDark>
          <div className={sy.logo}>
            <WedLogo variant="light" size="lg" />
          </div>
          <code>{`<WedFav variant="light" size="lg" />`}</code>
        </Block>
        <Block label="Logo Dark">
          <div className={sy.logo}>
            <WedLogo variant="dark" size="lg" />
          </div>
          <code>{`<WedFav variant="dark" size="lg" />`}</code>
        </Block>
      </BlockSet>
      <BlockSet heading="Logo GIF">
        <Block label="Long Duration">
          <div className={sy.logo}>
            <WedGif isLong />
          </div>
        </Block>
      </BlockSet>
      <BlockSet heading="Crenexi Brand">
        <Block label="Logo">
          <div className={sy.logo}>
            <CXLogo theme="cx" />
          </div>
        </Block>
      </BlockSet>
    </div>
  </div>
);

export default KitLogosFavs;
