import DataStatic, { QuizItem, WedAction } from '@stypes/data-static.types';
import { assetsUrl } from '../constants';

// prettier-ignore
const urls = {
  urlDropboxShare: 'https://www.dropbox.com/request/PU5A2HyKCLsrF5qautpb',
  urlSimpleBoothGallery: 'https://www.google.com',
};

const wedActions: WedAction[] = [
  {
    disabled: false,
    icon: 'message-heart',
    heading: 'Send Wishes',
    subtext: 'Words & advice for the couple.',
    buttonProps: {
      variant: 'primary',
      children: 'Write Wishes',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/wishes',
    },
  },
  {
    disabled: true,
    icon: 'photo-film',
    heading: 'Share Media',
    subtext: 'Add pics/video from today!',
    buttonProps: {
      variant: 'primary',
      children: 'Ways to Share',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/media',
    },
  },
  {
    disabled: false,
    icon: 'envelope-open-dollar',
    heading: 'Give Gift',
    subtext: 'Gift to our honeymoon.',
    buttonProps: {
      variant: 'primary',
      children: 'Ways to Give',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/give',
    },
  },
  {
    disabled: true,
    icon: 'images-user',
    heading: 'Booth Pics',
    subtext: 'See Photo Booth gallery!',
    buttonProps: {
      variant: 'default',
      children: 'To Gallery',
      endIcon: 'up-right-from-square',
      mode: 'a',
      target: '_blank',
      href: urls.urlSimpleBoothGallery,
    },
  },
  {
    disabled: true,
    icon: 'check-to-slot',
    heading: 'Quiz Answers',
    subtext: 'Who Knows the Couple...',
    buttonProps: {
      variant: 'default',
      children: 'See Answers',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/quiz',
    },
  },
];

// prettier-ignore
const quizItems: QuizItem[] = [
  {
    question: 'How many states have M&J visited together?',
    answerNum: '3',
    answerText: `Eight years on, we've still only visited California, Hawaii, and Nevada!`,
    answerPicUrl: `${assetsUrl}/quiz/hawaii.jpg`,
  },
  {
    question: 'How many concerts have M&J attended together?',
    answerNum: '2',
    answerText: `Together we've only seen The Killers and Lauv. Michelle has been to many but only two together.`,
    answerPicUrl: `${assetsUrl}/quiz/concert.jpg`,
  },
  {
    question: 'How many IKEA furniture have M&J made together?',
    answerNum: '15+',
    answerText: `We enjoy home comforts and organization. IKEA is our refuge and strength, a very present help in trouble. Psalm 46.`,
    answerPicUrl: `${assetsUrl}/quiz/furniture.jpg`,
  },
  {
    question: 'How many puzzles have M&J completed together?',
    answerNum: '5+',
    answerText: `We have four framed puzzles and have made more. Seems like we'll keep this tradition!`,
    answerPicUrl: `${assetsUrl}/quiz/puzzle.jpg`,
  },
  {
    question: 'How many movie marathons have M&J watched together?',
    answerNum: '0',
    answerText: `We don't have that much focus! Remarkably we've gotten Michelle to the end of Lord of the Rings: Two Towers since 2016 and hope for similar goals by 2032`,
    answerPicUrl: `${assetsUrl}/quiz/cats.jpg`,
  },
  {
    question: 'How many summer picnics have M&J enjoyed together?',
    answerNum: '4+',
    answerText: `The legit loaded picnic basket with wine, cheese, sliders, bevs, and the kite we saved from the tree of doom — I'd say four picnics!`,
    answerPicUrl: `${assetsUrl}/quiz/picnic.jpg`,
  },
  {
    question: 'How many weekend getaways have M&J undertaken?',
    answerNum: '17+',
    answerText: `We count at least 17 multi-day trips — spanning San Diego, LA, Palm Springs, Monterey, Yosemite, Napa, Eureka, Kauai, and Maui. We easily agree Kauai tops the list.`,
    answerPicUrl: `${assetsUrl}/quiz/flowers.jpg`,
  },
  {
    question: 'How many days have M&J spent unplugged from tech?',
    answerNum: '0',
    answerText: 'What a frightful thought: sundials, star navigation, pigeon messaging, disposable cameras, Pictionary, notificationlessness. Has anyone survived that?',
    answerPicUrl: `${assetsUrl}/quiz/jailed.jpg`,
  },
  {
    question: 'How many times have M&J had breakfast in bed?',
    answerNum: '0',
    answerText: `We've never fully intended on having breakfast in bed. More of a dinner-in-bed couple, I guess!`,
    answerPicUrl: `${assetsUrl}/quiz/pancakes.jpg`,
  },
  {
    question: 'How many 5K runs have M&J done together?',
    answerNum: '1.5',
    answerText: `We've only done the fun Golden Gate 5K and a "5K" is Livermore that was definitely a patchwork of confused turns that was not even close to 5km.`,
    answerPicUrl: `${assetsUrl}/quiz/5k-run.jpg`,
  },
];

// prettier-ignore
const dataStatic: DataStatic = {
  wedActions,
  quizItems,
  welcome: {
    text1: 'Welcome',
    text2: `to the wedding of Michelle & James! We're honored to host you. You may be looking for one of these actions:`,
  },
  collage5: [
    `${assetsUrl}/collage/03.jpg`,
    `${assetsUrl}/collage/02.jpg`,
    `${assetsUrl}/collage/01.jpg`,
    `${assetsUrl}/collage/04.jpg`,
    `${assetsUrl}/collage/05.jpg`,
  ],
  mediaScene: {
    urlDropboxShare: urls.urlDropboxShare,
    wifiWarn: `AT THE VENUE, amid poor mobile signal, connect to WIFI! Info at Sign-In table. Or share later!`,
    intro: {
      text1: 'We invite you to share your captured moments from our wedding day. We appreciate your help, especially with no videographer!',
      text2: 'Dropbox (preferred), AirDrop, or Email',
    },
    dropbox: {
      pretext: 'Upload directly to our secure Dropbox folder. You can upload multiple files at once. Thank you!',
      steps: [
        {
          icon: 'folder-image',
          heading: 'Access Folder',
          text: 'Click on the link above'
        },
        {
          icon: 'photo-film',
          heading: 'Choose Files',
          text: 'Select your wedding vids/pics'
        },
        {
          icon: 'cloud-arrow-up',
          heading: 'Upload',
          text: 'Hang tight and complete!'
        },
      ],
    },
    airdrop: {
      pretext: `If you're Apple-savvy, feel free to AirDrop vids/pics to the Photo Booth iPad before leaving.`,
      steps: [
        {
          icon: 'tablet-screen-button',
          heading: 'Go to iPad',
          text: 'Go to the Photo Booth iPad to enable AirDrop. Stay close, as transfers are best within 30ft.',
        },
        {
          icon: 'signal-stream',
          heading: 'Enable iPad AirDrop',
          text: 'Swipe down from the top-right to open the Control Center. Press and hold the network section (with the airplane). Tap AirDrop and select "Everyone" to enable',
        },
        {
          icon: 'photo-film',
          heading: 'Select Media',
          text: 'Open iPhone Photos. Select wedding vids/pics to share.',
        },
        {
          icon: 'arrow-up-from-square',
          heading: 'Use AirDrop',
          text: `Tap Share > AirDrop. Select 'M&J Wedding Booth iPad' to send. If you can't find it, ensure both devices have AirDrop and Bluetooth enabled and aren't in Airplane Mode.`,
        },
        {
          icon: 'tablet-screen-button',
          heading: 'Accept Transfer',
          text: 'On the iPad, accept the AirDrop transfer.',
        },
        {
          icon: 'right-left',
          heading: 'Complete Transfer',
          text: `You'll see a 'Sent' confirmation once complete.`
        },
        {
          icon: 'camera-web',
          heading: 'Photo Booth',
          text: `When done, leave the iPad on 'Simple Booth' for guests.`,
        }
      ],
    },
    email: {
      pretext: 'Dropbox not working for you? Feel free to email',
      steps: [
        {
          icon: 'envelope',
          heading: 'Email us attachments at:',
          text: 'jamesmichelle2024@gmail.com',
        }
      ]
    }
  },
};

export default dataStatic;
