import { defineWxtModule } from 'wxt/modules';

export default defineWxtModule({
  name: 'distinguishOutput',
  configKey: 'localWxtModule:distinguishOutput',
  setup: (wxt) => {
    const { mode } = wxt.config;

    wxt.hooks.hook('ready', () => {
      wxt.config.outDir = wxt.config.outDir.replace(
        wxt.config.outDir,
        `${wxt.config.outDir}/${mode}`,
      );
    });
  },
});
