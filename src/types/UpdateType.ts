export type FeatureType = {
    name: string, // Does affect search results
    description: string, // Supports markdown. Does not affect search results
    tags: string[], // Terms for this to show up when searched
    date: {
        jp: undefined,
        tw: Date | undefined, // If implemented earlier on taiwan server
        en: Date | undefined, // ^ on english server
        ko: Date | undefined, // ^ on korean server
    },
}

export type UpdateType = {
    version: string, // Version Number. e.g. "3.0.0"
    description: string,
    date: {
        jp: Date,
        tw: Date | undefined, // Date all the features of this update were implemented by in taiwan server
        en: Date | undefined, // ^ on english server
        ko: Date | undefined, // ^ on korean server
    },
}