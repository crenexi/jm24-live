import { ComponentType } from 'react';
import ConfigScene from '@scenes/Config';
import SandboxScene from '@scenes/Sandbox';
import ToolkitScene from '@scenes/Toolkit';

type AppRoute = {
  path: string;
  component: ComponentType;
};

const appRoutes: AppRoute[] = [
  { path: '/config', component: ConfigScene },
  { path: '/sandbox', component: SandboxScene },
  { path: '/toolkit/*', component: ToolkitScene },
];

export default appRoutes;
