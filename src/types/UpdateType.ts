import { Server } from "./ServerType";

export type FeatureType = {
  name: string; // Does affect search results
  description: string; // Supports markdown. Does not affect search results. Headers with `;` will have a link. Before the ; is the id, after is text that's displayed. Links that start with h# will turn into a header jump
  tags: string[]; // Terms for this to show up when searched
  notIncluded?: {
    [Server.tw]?: boolean; // For if the feature is not included in the update and may be coming later or not at all on taiwan server
    [Server.en]?: boolean; // ^ on english server
    [Server.kr]?: boolean; // ^ on korean server
  };
  date?: {
    [Server.tw]?: Date; // If implemented earlier/later on taiwan server
    [Server.en]?: Date; // ^ on english server
    [Server.kr]?: Date; // ^ on korean server
  };
};

export type UpdateType = {
  version: string; // Version Number. e.g. "3.0.0"
  description: string;
  features: FeatureType[];
  date: {
    [Server.jp]: Date;
    [Server.tw]?: Date; // Date all the features of this update were implemented by in taiwan server
    [Server.en]?: Date; // ^ on english server
    [Server.kr]?: Date; // ^ on korean server
  };
};
