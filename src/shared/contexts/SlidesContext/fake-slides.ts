import { Slide } from '@stypes/Slide.types';

// prettier-ignore
const fakeSlides: Slide[] = [
  {
    "id": "3456-2",
    "url": "https://picsum.photos/500/500?v=13",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "creationTime": "2018-02-07T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "4567-2",
    "url": "https://picsum.photos/500/500?v=14",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "creationTime": "2019-03-08T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "5678-3",
    "url": "https://picsum.photos/500/500?v=15",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationTime": "2020-04-09T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "6789-3",
    "url": "https://picsum.photos/500/500?v=16",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "creationTime": "2021-05-10T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "7890-3",
    "url": "https://picsum.photos/500/500?v=17",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "creationTime": "2022-06-11T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "8901-3",
    "url": "https://picsum.photos/500/500?v=18",
    "description": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "creationTime": "2023-07-12T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "9012-3",
    "url": "https://picsum.photos/500/500?v=19",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
    "creationTime": "2024-08-13T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "5678",
    "url": "https://picsum.photos/500/500?v=5",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "creationTime": "2019-12-29T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "6789",
    "url": "https://picsum.photos/500/500?v=6",
    "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "creationTime": "2021-12-28T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "7890",
    "url": "https://picsum.photos/500/500?v=7",
    "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "creationTime": "2022-01-01T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "8901",
    "url": "https://picsum.photos/500/500?v=8",
    "description": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    "creationTime": "2023-01-02T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "9012",
    "url": "https://picsum.photos/500/500?v=9",
    "description": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "creationTime": "2014-01-03T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "0123",
    "url": "https://picsum.photos/500/500?v=10",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "creationTime": "2015-01-04T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "1234-2",
    "url": "https://picsum.photos/500/500?v=11",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationTime": "2016-01-05T00:00:00",
    "width": "1920",
    "height": "1080"
  },
  {
    "id": "2345-2",
    "url": "https://picsum.photos/500/500?v=12",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "creationTime": "2017-01-06T00:00:00",
    "width": "1920",
    "height": "1080"
  }
];

const get = async (): Promise<Slide[]> => {
  return new Promise<Slide[]>((resolve) => {
    setTimeout(() => resolve(fakeSlides), 1000);
  });
};

export default { get };
