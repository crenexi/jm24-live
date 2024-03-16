import { ComponentType } from 'react';
import SandboxScene from '@scenes/Sandbox';
import ToolkitScene from '@scenes/Toolkit';

type AppRoute = {
  path: string;
  component: ComponentType;
};

const appRoutes: AppRoute[] = [
  { path: '/sandbox', component: SandboxScene },
  { path: '/toolkit/*', component: ToolkitScene },
];

export default appRoutes;
