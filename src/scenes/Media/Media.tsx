import { FC } from 'react';
import { Icon } from '@components/legos';
import { Button, ButtonCopy, ReturnHomeBlock } from '@components/action';
import { Title } from '@components/display';
import useDataStatic from '@hooks/use-data-static';
import MediaOption from './MediaOption';
import sy from './Media.scss';

const Media: FC = () => {
  const email = 'jamesmichelle2024@gmail.com';

  const dMedia = useDataStatic()?.mediaScene;
  if (!dMedia) return null;

  return (
    <ReturnHomeBlock>
      <div className={sy.main}>
        <div className={sy.main_header}>
          <div className={sy.intro}>
            <Title title="Share Media" subtitle="to capture the moment!" />
            <div className={sy.intro_text}>
              <p>{dMedia.intro.text1}</p>
              <p>
                <strong>{dMedia.intro.text2}</strong>
              </p>
            </div>
          </div>
          <div className={sy.wifiWarn}>
            <div className={sy.wifiWarn_icon}>
              <Icon name="signal-slash" />
            </div>
            <div className={sy.wifiWarn_text}>{dMedia.wifiWarn}</div>
          </div>
        </div>
      </div>
      <MediaOption
        title="Option 1: Dropbox"
        subtitle="Add to folder, no account needed!"
        pretext={dMedia.dropbox.pretext}
        steps={dMedia.dropbox.steps}
      >
        <Button
          variant="primary"
          mode="a"
          size="lg"
          href={dMedia.urlDropboxShare}
          target="_blank"
          sx={{ width: '100%' }}
        >
          <Icon name="dropbox" prefix="fab" />
          &nbsp;Guest Dropbox Folder
        </Button>
      </MediaOption>
      <MediaOption
        title="Option 2: AirDrop"
        subtitle="At the reception Photo Booth iPad"
        pretext={dMedia.airdrop.pretext}
        steps={dMedia.airdrop.steps}
      >
        <div className={sy.callout}>
          <span>
            <small>DEVICE NAME</small>
          </span>
          <span>
            <strong>M&amp;J Wedding Booth iPad</strong>
          </span>
        </div>
      </MediaOption>
      <MediaOption
        title="Option 3: Email"
        subtitle="Alternative to Dropbox"
        pretext={dMedia.email.pretext}
        steps={dMedia.email.steps}
      >
        <div className={sy.callout}>
          <ButtonCopy text={email} />
          <div className={sy.copy_label}>
            Copy <strong>{email}</strong>
          </div>
        </div>
      </MediaOption>
    </ReturnHomeBlock>
  );
};

export default Media;
