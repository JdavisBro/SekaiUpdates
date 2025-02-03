import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_3_0: UpdateType = {
  version: "3.3.0",
  description: "",
  features: [
    {
      name: "Event Ranking Highlight",
      description: `
# HIGHLIGHT
- The new feature "Highlight" will let players check specific ranking borders during events (such as players in 100th place, 200th place, and so on)
- The "Highlight" tab will be added in-between the "TOP 100" and "Nearby Rankings" tabs
- Highlight rankings will be updated at certain fixed periods/intervals (not in real-time) and may differ from the rankings displayed on the "TOP 100" and/or "Nearby Rankings" screens.

![Highlight Event Ranking Tab](https://pjsekai.sega.jp/master-data/image/news/news_thumb_434_hwdsKasVqW.jpg)
      `,
      tags: ["tiering", "borders"],
    },
    {
      name: "UI Visibility Fix",
      description: `
Background Transparency & Text Colors
- After the 3rd Anniversary's complete overhaul, some texts have become rather difficult to read, therefore, background transparency and text colors in certain in-game screens have been adjusted.

![Song select screen after the UI changes](https://pjsekai.sega.jp/master-data/image/news/news_thumb_435_mgXpyYasAi.PNG)
      `,
      tags: [],
    },
    {
      name: "Trace Notes Appearance",
      description: `
## Overview;Overview

Some of the trace notes in several songs seem to be difficult to see and overall confusing for players to understand. Therefore, the appearances of these trace notes will be adjusted so that they'll be easier to see/understand, such as adding transparent guidelines that connect the trace notes together.

## Affected Songs;Songs

- APPEND
  - Tell Your World
  - More! Jump! More!
  - Cinema
- MASTER
  - Buta ni Natte yeah yeah
  - Koi wa Sensou
  - NEO
  - I'm Mine
  - Kamippoi na
  - Dear
  - Devil Janai Mon
- EXPERT
  - NEO
  - Kamippoi na

## Note;Note

Please note that this will NOT change the actual notes themselves, only their appearance will change

## Image;Image

![NEO chart with updated note visibility](https://pjsekai.sega.jp/master-data/image/news/news_thumb_436_uzihrojeLH.PNG)
      `,
      tags: [],
    },
    {
      name: "Coop Show Song Difficulty Selection",
      description: `
- Up until now, players can only select a song's difficulty once a song has been picked.
- After the update, players can now select song difficulties from the song selection screen.
![Difficulty selection on the song selection screen in coop show](https://pjsekai.sega.jp/master-data/image/news/news_thumb_439_hOSHfjUiue.PNG)
      `,
      tags: [],
    },
    {
      name: "Side Story Ticket",
      description: `
- A new item called "Side Story Ticket" will be added in the next update. This item can be used as material substitutes to unlock cards' side stories.
- 1 Side Story Ticket will be able to unlock 1 side story.
- In order to unlock part 2 of a card's side story using Side Story Ticket, you will still need to train and level up the card first.
- They'll be available for purchase at the Crystal Shop. 3 Side Story Tickets will cost 500 PAID Crystals.

![Using a side story ticket to unlock a side story part 2](https://pjsekai.sega.jp/master-data/image/news/news_thumb_437_FauGEXbNAF.PNG)
      `,
      tags: [],
    },
    {
      name: "Skip Status shown for Side Stories",
      description: `
- Just like main/event stories, read/skip status will now be shown for card/side stories.
- When you have skipped and/or fast-forwarded a side story, a small "SKIP" mark will now be shown next to it.

![Miku's side story list showing skipped side stories](https://pjsekai.sega.jp/master-data/image/news/news_thumb_438_ZKaIcGZwCT.PNG)
      `,
      tags: [],
    },
    {
      name: "Connection Loss Penalty Reduction",
      description: `
- Additional adjustments will be made for connection-related penalties (such as connection problem, etc.)
- Penalties will be made lighter/more laxed.
      `,
      tags: [],
    },
    {
      name: "Device Compatability Changes (Chromebook)",
      description: `
- After the "3.3.0 Update", the game will no longer be compatible for the following device: some Chromebooks models.
- Please make sure to transfer your data to another device that works better/well with the game.
      `,
      tags: [],
    },
    {
      name: "Bug Fixes",
      description: `
- [Mission] Fixed a notif bug where the notif for the mission "Exchange 1 song from the Music Shop" won't disappear despite already being cleared.
- [World Link] Fixed a bug where certain actions would cause a portion of the Home screen to remain displayed on the Event TOP screen.
- [Multi Live/Cheerful Live] Fixed a bug where skill levels displayed were fixed to only one of the members even when two or more players had the same member set as leader.
- [Multi Live/Cheerful Live] Fixed a bug where certain members/cards cut-in display were fixed to trained art regardless of the art set by players.
- [Virtual Live] Fixed a bug where the "Welcome Live" banner doesn't appear and can't be accessed from the list of Virtual Lives available.
- [Multi Live] Fixed a bug where the difficulty of song was fixed to "EASY" every time.
- [Rank Match] Fixed a bug where Rank Point Bonus was not displayed on the Rank Match screen.
- [Auto Live] Fixed a bug where sometimes the song set for continuous auto live changed.
- [Live Rewards] Fixed a bug where SUPER FEVER rewards were combined with regular live rewards. (display-only)
- [My List] Fixed a bug where songs can't be saved or deleted in players' My List.
- [Event] Fixed a bug where event banners could be displayed on the Live TOP screen, despite the featured event hasn't started yet.
- Other minor bug fixes.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 0, 31),
    [Server.en]: new Date(2025, 0, 31),
  },
};

export default v3_3_0;
