import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: `yarn nx run myapp:serve:${process.env.NX_TASK_TARGET_CONFIGURATION}`,
        production: 'yarn nx run myapp:preview',
      },
      ciWebServerCommand: 'yarn nx run myapp:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
