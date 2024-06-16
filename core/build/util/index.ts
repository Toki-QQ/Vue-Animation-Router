export function wrapperEnv(
  envConf: Record<string, string>,
): Record<string, unknown> {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = (envConf[envName] as any).replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }

    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }

    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}
