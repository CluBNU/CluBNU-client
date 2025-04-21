import { IOAuthConfig } from "../types/type";

export function buildOAuthUrl(config: IOAuthConfig): string {
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    response_type: config.responseType,
    ...(config.scope ? { scope: config.scope } : {})
  });

  return `${config.authUrl}?${params.toString()}`;
}