import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v2_7_0: UpdateType = {
  version: "2.7.0",
  description: "",
  features: [
    {
      name: "Mad Skillz (Kaiden) Title Renewal",
      description: `
- The Titles "Kaiden" and "Shin Kaiden" will be getting a renewal in the next update. (Also known as "Mad Skillz" and "Madder Skillz" for Global players out there)
- Both Titles will be renamed to "Live Master"
- There will be a total of 6 types of "Live Master" Titles, 5 of them for each difficulty of songs (EASY/NORMAL/HARD/EXPERT/MASTER) and 1 for MASTER AP (similar to the old "Shin Kaiden" Title)
- Please note that the old "Kaiden" and "Shin Kaiden" will no longer be available after the update.
## Types;Title Types & how to get them
- Live Master - Beginner: Full Combo 5 songs in EASY difficulty
- Live Master - Intermediate: Full Combo 5 songs in NORMAL difficulty
- Live Master - Advance: Full Combo 5 songs in HARD difficulty
- Live Master - Expert: Full Combo 5 songs in EXPERT difficulty
- Live Master - Master (Kaiden): Full Combo 5 songs in MASTER difficulty
- Live Master - True Master (Shin Kaiden): All Perfect 5 songs in MASTER difficulty
## Requirements;Requirement for each Title level
- 5 songs / 10 songs / 20 songs / ... (the rest is every 10 songs)
## DesignChanges;Design Changes
- The number of songs you have FCed/APed is now shown on the Titles.
- The diamonds that are displayed on the Title will now be shown/lined up in a special way. One diamond will be added to a Live Master Title for every 10 songs Full Comboed/All Perfected.
- The designs of the scrolls, ribbons, etc that are displayed will change for every 100 songs Full Comboed/All Perfected.

## Images;Images
![Image showing new titles in the profile title select screen](https://pjsekai.sega.jp/master-data/image/news/news_thumb_212_nnaisa.png)

![Image showing a player achieveing the new Live Master - True Master title](https://pjsekai.sega.jp/master-data/image/news/news_thumb_212_jjasaa.png)
      `,
      tags: ["madder skillz", " shin kaiden"],
    },
    {
      name: "Character Rank Missions Cap Increase",
      description: `
## Character Missions Cap Increase
- Play lives by having [featured character] as the leader in the team for a certain number of times
  - 20500 times / 21000 times / 21500 times
- Have [featured character's] be sent to the Waiting Room a certain number of times
  - 420 times / 440 times / 460 times
- Unlock a certain number of Live Costumes for [featured character]
  - 370 times / 380 times / 390 times / 400 times / 410 times / 420 times / 430 times / 440 times / 450 times
- Collect a certain number of [featured character's] Another Vocals
  - 16 / 17 / 18 / 19 / 20
      `,
      tags: [
        "character missions",
        "leader live",
        "leader show",
        "green room",
        "waiting room",
        "costumes",
        "covers",
        "vocals",
        "",
      ],
    },
    {
      name: "Solo Show & Ranked Match Rewards Change",
      description: `
Due to the rewards players can earn from Solo Lives / Rank Match being so much less than the rewards players can receive from Multi Lives, adjustments will be made to balance them more.
- Solo Live
  - Adjusted from 50% --> 75% of the rewards from Multi Live
- Rank Match
  - Adjusted from 50% --> 100% of the rewards from Multi Live
      `,
      tags: ["solo live"],
    },
    {
      name: "Event Shop for Unit Arc Enders",
      description: `
- From now on, each unit will be holding their last unit events before advancing towards their next goal in the 3rd Anniversary.
- The lineup for the rewards you can exchange will be adjusted for these last unit-related events ONLY.
## NewItems;New Items for exchange
- Bonus Energy (L) x3: 5000 event tokens (can be exchanged 1 time)
- Practice Scores (Advance): 500 event tokens per 1 sheet (total of 20)
- Skill-Up Scores (Advance): 20000 event tokens per 1 sheet (total of 2)
## AjustedItems;Adjusted Items
- Magic Cloths x300: 10000 event tokens (can be exchanged once)
- Magic Threads x30: 10000 event tokens (can be exchanged once)
- Mysterious Seeds x30: 15000 event tokens (can be exchanged once)
- Miracle Gems x5: 1000 event tokens (can be exchanged 40 times)
- Coins x50000: 5000 event tokens (can be exchanged 6 times)
- Coins: 1 event token (No limit)
## RemovedItems;Removed Items
- Bonus Energy (S)
- Practice Scores (Intermediate)
- Skill-Up Scores (Intermediate)
- Attribute Gems & Charms

## Notes;Notes
Again, please note that everything above will be applied to the last Unit Events ONLY. The items that can be exchanged in other events will remain the same.
      `,
      tags: [],
    },
    {
      name: "Stamps in Custom Profiles",
      description: `
- You will now be able to add Stamps to your Custom Profiles.
      `,
      tags: [],
    },
    {
      name: "Wish Piece Shop Update",
      description: `
The following items will be available for exchange in the Wish Piece Exchange Shop:
- Stamp Voucher (No monthly limit)
  - 200 wish pieces per 1 ticket
- Cover Card Voucher (No monthly limit)
  - 2000 wish pieces per 1 ticket
      `,
      tags: [
        "fragments of feelings",
        "cover card voucher",
        "another vocal",
        "stamp voucher",
      ],
    },
    {
      name: "Title Missions Cap Increase",
      description: `
- Old School - Log in to the game for a total of X days
  - 730 days / 1095 days
- Cover Artist - Unlock a certain amount of Covers
  - 20 / 40 / 60 / 80 / 100 / 120 / 140 / 160 / 180 / 200 / 220 / 240 / 260 / 280 / 300 / 320 / 340 / 360 / 380
- Perfectionist - Clear a certain number of songs in ALL difficulties
  - 150 songs / 180 songs / 210 songs / 240 songs / 270 songs / 300 songs / 330 songs / 360 songs / 390 songs / 420 songs / 450 songs / 480 songs / 510 songs / 540 songs / 570 songs / 600 songs / 630 songs / 660 songs / 690 songs / 720 songs
- I Love them All! - Raise all characters to a certain Rank
  - 15 / 20 / 30 / 40 / 50 / 60 / 70 / 80 / 90 / 100
- Read It All - Read a certain number of chapters of the "Main Story" and/or "Side/Card Stories" without using the Skip and/or Fast-Forward Button
  - 200 chapters / 300 chapters / 400 chapters / 500 chapters / 600 chapters / 700 chapters / 800 chapters / 900 chapters / 1000 chapters / 1100 chapters
      `,
      tags: [
        "old school",
        "covers",
        "perfectionist",
        "character rank",
        "read it all",
        "story",
      ],
    },
    {
      name: "New Text Stamps",
      description: `
Based on the feedback the devs have received in the official Discord server, the following text stamps will be added to the game so that players can communicate easier with each other.
- Let's exchange Live Bonuses!
- No more Live Bonuses for me
- I'm gonna step out for a bit
- This is the last one!
- Congrats!
- I made a mistake!/I got it wrong!
- It's okay!
- Don't worry about it!
- Hold up!
- Sorry for the wait!
- Leo/need!
- MORE MORE JUMP!
- Vivid BAD SQUAD!
- Wonderlands×Showtime!
- Nightcord at 25:00!
      `,
      tags: ["stickers"],
    },
    {
      name: "Gacha Pity Details Page",
      description: `
Added a new tab in the Gacha details pop-up screen to display the percentage of the guaranteed 4* related to the Gacha Bonus gauge (pity).
      `,
      tags: [],
    },
    {
      name: "Colorful Plus Free Pull Notification",
      description: `
A notification mark will now be displayed whenever a free pull is available (for those who bought the Colorful Pass).
      `,
      tags: [],
    },
    {
      name: "MV Viewer Doesn't Use Main Team",
      description: `
Modified the team setup in the MV Viewing Mode so that it's no longer set to the main team setup.
      `,
      tags: [],
    },
    {
      name: "Feedback to the Dev Team Option",
      description: `
Added the "Feedback to the dev team" option to the Support/Inquiry category.
      `,
      tags: [],
    },
    {
      name: "Enhanced Penalty for Disconnecting",
      description: `
Penalty conditions for players who continuously lose communication in Multi Live (Cheerful Live) have been enhanced.
      `,
      tags: [],
    },
    {
      name: "Bug Fixes",
      description: `
- Fix the bug where audio lag may occur in Rank Match.
- Fix the bug where some character stickers may not be reflected properly in Connect Lives when a player choose the "Performers Only" sorting option.
- Fix the bug where data deletion cannot be performed properly under certain conditions.
- Fix the bug where the number of Crystals required to pull in a gacha may not be displayed correctly
- Other minor bug fixes
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 5, 20),
  },
};

export default v2_7_0;
