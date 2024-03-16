import { library } from '@fortawesome/fontawesome-svg-core';

// prettier-ignore
import { faDropbox } from '@fortawesome/free-brands-svg-icons';

// prettier-ignore
import {
  faArrowLeft,
  faArrowRight,
  faCakeSlice,
  faCalendarHeart,
  faCameraWeb,
  faCastle,
  faCauldron,
  faChampagneGlasses,
  faChurch,
  faFileVideo,
  faFlaskRoundPotion,
  faGem,
  faHatWizard,
  faHeartCrack,
  faImages,
  faImagesUser,
  faListCheck,
  faMessageHeart,
  faPeopleArrows,
  faPhotoFilm,
  faPlateUtensils,
  faRingsWedding,
  faScrollOld,
  faSignalSlash,
  faSignalStream,
  faSparkles,
  faSpinnerThird,
  faStarShooting,
  faTabletScreenButton,
  faTurntable,
  faUsersViewfinder,
  faWifi,
  faWreathLaurel,
  faYinYang,
} from '@fortawesome/pro-light-svg-icons';

const buildLibrary = (): void => {
  // prettier-ignore
  library.add(
    // Brands
    faDropbox,
    // Lights
    faArrowLeft,
    faArrowRight,
    faCalendarHeart,
    faCameraWeb,
    faCastle,
    faCauldron,
    faChampagneGlasses,
    faChurch,
    faFileVideo,
    faFlaskRoundPotion,
    faGem,
    faHatWizard,
    faHeartCrack,
    faImages,
    faImagesUser,
    faListCheck,
    faMessageHeart,
    faPeopleArrows,
    faPhotoFilm,
    faPlateUtensils,
    faRingsWedding,
    faScrollOld,
    faSignalSlash,
    faSignalStream,
    faSparkles,
    faSpinnerThird,
    faStarShooting,
    faTabletScreenButton,
    faTurntable,
    faUsersViewfinder,
    faWifi,
    faWreathLaurel,
    faYinYang,
  );
};

export default { buildLibrary };
