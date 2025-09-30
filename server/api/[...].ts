import { joinURL } from "ufo";

export default defineEventHandler((event) => {
  const api = useRuntimeConfig().public?.baseAPI;
  const path = event.path.replace(/^\/api\//, "");
  const target = joinURL(api, path);

  return proxyRequest(event, target);
});
