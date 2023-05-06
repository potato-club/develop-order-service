export default function applyDefaultParams(config: any) {
  config.params = { ...config.defaultParams, ...config.params };
  if (config.defaultData && !(config.data instanceof FormData)) {
    config.data = { ...config.defaultData, ...config.data };
    if (Object.keys(config.data).length === 0) {
      config.data = null;
    }
  }
  return config;
}
