import { FC, CSSProperties, Fragment } from 'react';
import { BgCoverProps, bgCoverDefaults } from './types';
import sy from './BgCover.scss';

const BgCover: FC<BgCoverProps> = (props) => {
  const { url, imagePosition, blanketColor, blend, children } = props;

  const sxImage: CSSProperties = {
    backgroundPosition: imagePosition,
    backgroundImage: `url('${url}')`,
  };

  const sxBlanket: CSSProperties = {
    backgroundColor: blanketColor,
  };

  // prettier-ignore
  const sxBlend: CSSProperties = {
    backgroundColor: blend?.color || '',
    mixBlendMode: (blend?.mode as CSSProperties['mixBlendMode']) || 'normal',
  };

  return (
    <Fragment>
      <div className={sy.edge}>
        <div className={sy.edge_cover}>
          <div className={sy.edge_coverImage} style={sxImage} />
          <div className={sy.edge_coverBlanket} style={sxBlanket} />
          {blend && (
            <div className={sy.edge_coverBlend} style={blend && sxBlend} />
          )}
        </div>
      </div>
      <div className={sy.edgeContent}>{children}</div>
    </Fragment>
  );
};

BgCover.defaultProps = bgCoverDefaults;

export default BgCover;
