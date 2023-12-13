export enum Server {
  jp,
  en,
  tw,
  kr,
}

export const servers = new Map<number, string>([
  [Server.jp, "Japanese"],
  [Server.en, "English/Global"],
  [Server.tw, "Taiwan"],
  [Server.kr, "Korean"],
]);
