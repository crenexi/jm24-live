import { Slide } from '@stypes/Slide.types';

// prettier-ignore
const fakeSlides: Slide[] = [
  {
    id: '1234',
    url: 'https://picsum.photos/900/500?v=1',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    creationTime: '2020-12-31T00:00:00',
    width: '1920',
    height: '1080',
  },
  {
    id: '2345',
    url: 'https://picsum.photos/900/500?v=2',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    creationTime: '2022-12-30T00:00:00',
    width: '1920',
    height: '1080',
  },
  {
    id: '3456',
    url: 'https://picsum.photos/900/500?v=3',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    creationTime: '2023-12-29T00:00:00',
    width: '1920',
    height: '1080',
  },
  {
    id: '4567',
    url: 'https://picsum.photos/900/500?v=4',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    creationTime: '2016-12-29T00:00:00',
    width: '1920',
    height: '1080',
  }
];

const get = async (): Promise<Slide[]> => {
  return new Promise<Slide[]>((resolve) => {
    setTimeout(() => resolve(fakeSlides), 1000);
  });
};

export default { get };
