import { ComponentType } from 'react';
import WishesScene from '@scenes/Wishes';
import MediaScene from '@scenes/Media';
import GiveScene from '@scenes/Give';
import QuizScene from '@scenes/Quiz';
import SandboxScene from '@scenes/Sandbox';
import ToolkitScene from '@scenes/Toolkit';

type AppRoute = {
  path: string;
  component: ComponentType;
};

const appRoutes: AppRoute[] = [
  { path: '/wishes', component: WishesScene },
  { path: '/media', component: MediaScene },
  { path: '/give', component: GiveScene },
  { path: '/quiz', component: QuizScene },
  { path: '/sandbox', component: SandboxScene },
  { path: '/toolkit/*', component: ToolkitScene },
];

export default appRoutes;
