import { Server } from "./ServerType"

export type FeatureType = {
    name: string, // Does affect search results
    description: string, // Supports markdown. Does not affect search results
    tags: string[], // Terms for this to show up when searched
    date: {
        [Server.tw]: Date | null, // If implemented earlier on taiwan server
        [Server.en]: Date | null, // ^ on english server
        [Server.kr]: Date | null, // ^ on korean server
    } | null,
}

export type UpdateType = {
    version: string, // Version Number. e.g. "3.0.0"
    description: string,
    features: FeatureType[],
    date: {
        [Server.jp]: Date,
        [Server.tw]: Date | null, // Date all the features of this update were implemented by in taiwan server
        [Server.en]: Date | null, // ^ on english server
        [Server.kr]: Date | null, // ^ on korean server
    },
}