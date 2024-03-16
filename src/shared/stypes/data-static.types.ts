import { ButtonProps } from '@components/action/Button/Button.types';

export type WedAction = {
  icon: string;
  heading: string;
  subtext: string;
  buttonProps: ButtonProps;
  disabled: boolean;
};

export type QuizItem = {
  question: string;
  answerNum: string;
  answerText: string;
  answerPicUrl: string;
};

type MediaOption = {
  pretext: string;
  steps: {
    icon: string;
    heading: string;
    text: string;
  }[];
};

type DataStatic = {
  welcome?: {
    text1: string;
    text2: string;
  };
  mediaScene?: {
    urlDropboxShare: string;
    wifiWarn: string;
    intro: {
      text1: string;
      text2: string;
    };
    dropbox: MediaOption;
    airdrop: MediaOption;
    email: MediaOption;
  };
  collage5?: string[];
  wedActions?: WedAction[];
  quizItems?: QuizItem[];
};

export default DataStatic;
