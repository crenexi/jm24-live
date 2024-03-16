import { svar } from '@helpers/index';
import { Breakpoints, PaletteRows, IconRows } from '@stypes/app-theme.types';

export const breakpointMarks = ['m1', 'm2', 'm3', 'd1', 'd2', 'd3'];

export const breakpoints: Breakpoints = {
  keys: ['m2', 'm3', 'd1', 'd2', 'd3'],
  values: {
    m2: 640,
    m3: 768,
    d1: 1024,
    d2: 1280,
    d3: 1920,
  },
};

export const paletteRows: PaletteRows = [
  {
    title: 'content',
    colors: [
      ['Base', svar('co_content')],
      ['Subtle', svar('co_content_subtle')],
    ],
  },
  {
    title: 'background',
    colors: [
      ['Darkest', svar('co_background_darkest')],
      ['Darker', svar('co_background_darker')],
      ['Base', svar('co_background')],
      ['Lighter', svar('co_background_lighter')],
      ['Lightest', svar('co_background_lightest')],
    ],
  },
  {
    title: 'neutrals',
    colors: [
      ['n10', svar('co_neutral_n10')],
      ['n20', svar('co_neutral_n20')],
      ['n30', svar('co_neutral_n30')],
      ['n40', svar('co_neutral_n40')],
      ['n50', svar('co_neutral_n50')],
      ['n70', svar('co_neutral_n70')],
      ['n80', svar('co_neutral_n80')],
      ['n90', svar('co_neutral_n90')],
      ['n100', svar('co_neutral_n100')],
      ['n200', svar('co_neutral_n200')],
      ['n300', svar('co_neutral_n300')],
      ['n500', svar('co_neutral_n500')],
      ['n600', svar('co_neutral_n600')],
      ['n700', svar('co_neutral_n700')],
      ['n800', svar('co_neutral_n800')],
      ['n900', svar('co_neutral_n900')],
    ],
  },
  {
    title: 'primary',
    colors: [
      ['Darkest', svar('co_primary_darkest')],
      ['Darker', svar('co_primary_darker')],
      ['Base', svar('co_primary')],
      ['Lighter', svar('co_primary_lighter')],
      ['Lightest', svar('co_primary_lightest')],
    ],
  },
  {
    title: 'bright',
    colors: [
      ['Darkest', svar('co_bright_darkest')],
      ['Darker', svar('co_bright_darker')],
      ['Base', svar('co_bright')],
      ['Lighter', svar('co_bright_lighter')],
      ['Lightest', svar('co_bright_lightest')],
    ],
  },
  {
    title: 'accent',
    colors: [
      ['Darkest', svar('co_gold_darkest')],
      ['Darker', svar('co_gold_darker')],
      ['Base', svar('co_gold')],
      ['Lighter', svar('co_gold_lighter')],
      ['Lightest', svar('co_gold_lightest')],
    ],
  },
  {
    title: 'info',
    colors: [
      ['Darker', svar('co_info_darker')],
      ['Base', svar('co_info')],
      ['Lighter', svar('co_info_lighter')],
    ],
  },
  {
    title: 'warn',
    colors: [
      ['Darker', svar('co_warn_darker')],
      ['Base', svar('co_warn')],
      ['Lighter', svar('co_warn_lighter')],
    ],
  },
  {
    title: 'danger',
    colors: [
      ['Darker', svar('co_danger_darker')],
      ['Base', svar('co_danger')],
      ['Lighter', svar('co_danger_lighter')],
    ],
  },
  {
    title: 'success',
    colors: [
      ['Darker', svar('co_success_darker')],
      ['Base', svar('co_success')],
      ['Lighter', svar('co_success_lighter')],
    ],
  },
];

export const iconRows: IconRows = [
  {
    title: 'Actions',
    icons: [
      ['message-heart', 'fal'],
      ['photo-film', 'fal'],
      ['images-user', 'fal'],
      ['envelope-open-dollar', 'fal'],
    ],
  },
  {
    title: 'Sharing',
    icons: [
      ['envelope', 'fal'],
      ['folder-image', 'fal'],
      ['signal-stream', 'fal'],
      ['wifi', 'fal'],
    ],
  },
  {
    title: 'Checklist',
    icons: [
      ['book-heart', 'fal'],
      ['camera-web', 'fal'],
      ['whiskey-glass-ice', 'fal'],
      ['coffee-pot', 'fal'],
      ['users-viewfinder', 'fal'],
      ['turntable', 'fal'],
      ['people-arrows', 'fal'],
      ['block-brick', 'fal'],
      ['message-heart', 'fal'],
      ['photo-film', 'fal'],
    ],
  },
  {
    title: 'Tables',
    icons: [
      ['pegasus', 'fal'],
      ['person-dress-fairy', 'fal'],
      ['dragon', 'fal'],
      ['deer', 'fal'],
      ['squirrel', 'fal'],
      ['bird', 'fal'],
      ['raccoon', 'fal'],
      ['frog', 'fal'],
      ['crow', 'fal'],
      ['cat', 'fal'],
    ],
  },
  {
    title: 'Theme',
    icons: [
      ['rings-wedding', 'fal'],
      ['calendar-heart', 'fal'],
      ['gem', 'fal'],
      ['champagne-glasses', 'fal'],
      ['church', 'fal'],
      ['cake-slice', 'fal'],
      ['heart-crack', 'fal'],
      ['comment-lines', 'fal'],
      ['plate-utensils', 'fal'],
      ['sparkles', 'fal'],
      ['wand-sparkles', 'fal'],
      ['star-shooting', 'fal'],
      ['cauldron', 'fal'],
      ['scroll-old', 'fal'],
      ['hat-wizard', 'fal'],
      ['trees', 'fal'],
      ['castle', 'fal'],
      ['flask-round-potion', 'fal'],
      ['book-sparkles', 'fal'],
      ['wreath-laurel', 'fal'],
      ['envelope-open-text', 'fal'],
      ['block-brick', 'fal'],
      ['restroom', 'fal'],
    ],
  },
  {
    title: 'Generic',
    icons: [
      ['arrow-left', 'fal'],
      ['arrow-right', 'fal'],
      ['check', 'fal'],
      ['xmark', 'fal'],
      ['bars', 'fal'],
      ['download', 'fal'],
      ['clipboard', 'fal'],
      ['yin-yang', 'fal'],
      ['google', 'fab'],
    ],
  },
];

export default { breakpoints, paletteRows, iconRows };
