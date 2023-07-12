import { version } from "../../package.json";

// base info
export const name = "ishangsf Blog";
export const site = "http://ishangsf.com/";
export const logo = "http://ishangsf.com/logo.svg";
export const keywords = "周顺峰,周顺峰个人博客";
export const description = "周顺峰个人博客";

// social link
export const github = "https://github.com/ishangsf/";

// docs version
export const docsVersion = version;

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp(
  "^https://(((raw|user-images|camo).githubusercontent.com))/.*",
  "i"
);
export const googleFontRegex = new RegExp(
  "^https://fonts.googleapis.com/.*",
  "i"
);
export const googleStaticFontRegex = new RegExp(
  "^https://fonts.gstatic.com/.*",
  "i"
);
export const jsdelivrCDNRegex = new RegExp("^https://cdn.jsdelivr.net/.*", "i");
