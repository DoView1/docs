interface PublicRuntimeConfig {
  umamiToken: string;
}

export interface RuntimeConfig extends PublicRuntimeConfig {}

function readRuntimeEnv(name: string, fallback = ""): string {
  return process.env[name] ?? fallback;
}

export function getRuntimeConfig(): RuntimeConfig {
  return {
    umamiToken: readRuntimeEnv("UMAMI_TOKEN"),
  };
}

export function getPublicRuntimeConfig(): PublicRuntimeConfig {
  const config = getRuntimeConfig();

  return {
    umamiToken: config.umamiToken,
  };
}
