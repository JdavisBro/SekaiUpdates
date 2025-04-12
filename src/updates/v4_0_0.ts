import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v4_0_0: UpdateType = {
  version: "4.0.0",
  description: "",
  features: [
    {
      name: "Gacha Tickets & Crystals for Reading Stories",
      description: `
# Mission;Reading Missions

- A mission will be added that allows you to earn rewards by reading stories without skipping or fast forwarding.
- The total completion will be displayed as a percentage main story screen.
- You will accumulate 1 stamp for each story episode read.
- These can be claimed at the main story screen:
  - Every 10 stories (excl. every 100): 1 Mission Gacha Ticket
    - These can only be used on the Mission Gacha
  - Every 100 stories: 100 Crystals
- Stories that have already been read will count and you'll be able to recieve the rewards after the update on the main story screen.

![Main story screen showing the new completion percentage and reading rewards.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_565_0y04UV7GJd.jpg)

# Filter;Filtering Options

With the addition of the reading missions, the option to filter by skipped/fast forwarded stories will be added to the following story screens.

- Main/Event Story Screen
- Side Story > Character Screens
- Card List

# Title;"Read It All" Title Update

Limit raised from 1100 -> 2600.
`,
      tags: [
        "story",
        "episode",
        "skip",
        "fast forward",
        "gacha",
        "crystals",
        "filtering",
        "title",
      ],
    },
    {
      name: "Trust Ranks for All Combinations",
      description: `
- Previously you could not raise the Trust Rank of two characters if they didn't have a set of unique rewards.
- After the update you will be able to raise trust rank between any two characters even if they don't yet have unique rewards (title text, cut-ins, stamp).
- If this character pairing is given those rewards in the future you will get the rewards for the trust rank you've done.
- Note that some pairing may not be given unique rewards depending on the depth and progress of their relationships in the story.

# New Title and Reward Changes

- For every pair a new title will be added, "XX & XX Fan", as a reward for trust rank 5.
- "Wish Pieces x10" will also be added as a reward for reaching Trust Rank 16, 26, 36, 46, 56, 66.
- After the update compensation will be given for trust ranks that are already at these levels.
`,
      tags: ["fan title", "kizuna rank"],
    },
    {
      name: "New Rhythm Game Missions for Gacha Tickets",
      description: `
New Missions have been added. Clearing these missions gives you Mission Gacha Tickets to be used in the Mission Gacha.

- *Clear* a song with Song Level 15 - 37 or higher
- *Full Combo* a song with Song Level 15 - 37 or higher
- These missions are not retroactive and must be completed again after the update.
- If you compelte a mission for a higher level it will count for the lower level missions.
- The following amount of Mission Gacha Tickets are given for each levels full combo and clear missions:
  - Levels 15 - 19: 1 Mission Gacha Ticket
  - Levels 20 - 24: 2 Mission Gacha Tickets
  - Levels 25 - 29: 3 Mission Gacha Tickets
  - Levels 30 - 37: 5 Mission Gacha Tickets
`,
      tags: [],
    },
    {
      name: "Challenge Show Auto and Cap Increase",
      description: `
- Auto Show will be added to challenge live.
  - Challenge Auto Show does not count towrads solo show daily limit.
- Challenge Rank Limit: 100 -> 150
  - If EX level was already reached, challenge exp to the next EX level will be saved for if you reach EX level again.
- High Score Limit: 2,000,000 -> 2,500,000
  - Rewards from 2,020,000 -> 2,480,000: 10 Wish Pieces every 20,000
  - Reward for 2,500,000: 250 Crystals
`,
      tags: ["high score", "challenge rank"],
    },
    {
      name: "Official Crystal Store Opening",
      description: `
The "Project SEKAI" official store will open soon on 9/28!

This store will allow you to buy Crystals straight from the website! In addition, you will also receive extra Crystals as bonus for buying from the official store!

![Project Sekai Store Announcement](https://pjsekai.sega.jp/master-data/image/news/news_thumb_569_nCw1GIKPgo.jpg)
`,
      tags: [],
    },
    {
      name: "Show Energy Bonus Usage and Max",
      description: `
# Changes

The upper limit of energy regenerated over time (nats) has been increased from 10 -> 15.

Colorful+ limit has been increased from 20 -> 30.

Maximum total energy has been increased from 99 -> 999.

# Multipliers

|             | 0 | 1 | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 |
|-------------|---|---|----|----|----|----|----|----|----|----|----|
| Rewards/EXP | 1 | 5 | 10 | 15 | 20 | 25 | 26 | 27 | 28 | 29 | 30 |
| Event Pts   | 1 | 5 | 10 | 15 | 20 | 25 | 27 | 29 | 31 | 33 | 35 |

For reward/energy 5x is most efficient now.

# Image

![Graphic Showing New Show Energy Changes](https://pjsekai.sega.jp/master-data/image/news/news_thumb_570_PPCFJ4uDJT.jpg)
`,
      tags: [],
    },
    {
      name: "Uprate Bloomfes Give 70% Bonus",
      description: `
Bloom Festival exclusive cards will give the same 70% (+ bonus from mastery) event bonus as featured event cards during the event they were introduced in.  
`,
      tags: [],
    },
    {
      name: "Cover Card Cost Adjustment",
      description: `
# Usage;Change in Cover Card Usage

The cost of a solo cover for each character will change from 1 character cover card to 2 character cover cards.

The cost of a duet cover will stay as 1 of each character's cover cards.

# Obtaining;Cover Card Obtaining Changed

- Event Exchange
  - The cost of one "(Unit) Cover Card Voucher" has been changed from 30,000 -> 15,000 event tokens.
  - The limit has been increased from 1 -> 2.
- Wish Piece Exchange
  - The cost of one "Cover Card Voucher" has been changed from 2,000 -> 1,000 wish pieces.
- Birthday/Anniversary Virtual Show
  - Changed the number of Cover Cards distributed from 1 -> 2
- Character Rank Reward
  - Changed the number of Cover Cards acquired for the target character from 1 -> 2
- Beginner Set B
  - Changed the number of "Cover Card Vouchers" included in the set from 2 -> 4 

# Compesnation;Compensation

- The number of Cover Cards in your posession will be doubled.
- Compensation of "Cover Card Vouchers" for the number of two-person covers exchanged before the update.
- Compensation will be reflected and given directly when logging in after the update, not as a gift. 

# Image;Image

![Graphic Showing Cover Card Changes](https://pjsekai.sega.jp/master-data/image/news/news_thumb_572_EDjjcmNC3q.jpg)
`,
      tags: [],
    },
    {
      name: "Rank, Title, and Mission Limits Increase",
      description: `
# Ranks;Ranks

- Character Rank Limit: 135 -> 160
- Player Rank Limit: 600 -> 700
  - Rank rewards from 600+ will be the same as 400+

# Titles;Titles

- Old Skool Title Limit Increase
  - 1460 -> 1825 days
  - "Always by your side" title.

# Character;Character Missions

- Collect XX cards of Character
  - Every 2 from 78 - 90
- Collect XX costumes for Character
  - Every 10 from 650 - 800
- Read XX area conversations including Character
  - Every 10 from 210 - 300
- Get XX stamps of Character
  - Every 1 from 36 - 40
- Do XX shows with Character as the Leader
  - Every 500 from 30,500 - 40,000
- Have Character in the Green Room XX times
  - Every 20 from 720 - 900
- Read Part 1 of XX different Character Side Stories and Read Part 2 of XX different Character Side Stories
  - Every 1 from 51 - 55
`,
      tags: ["character rank", "player rank", "cr"],
    },
    {
      name: "Tutorial Completion Rewards",
      description: `
After the update, rewards for completing the tutorial are changed.

- Music Card: 200 -> 1000 (+800)
- Practice Score (Intermediate): 50 -> 100 (+50)
- Miracle Gem: 50 -> 300 (+250)
- Attribute Gems: 100 -> 1500 (+1400)
- Attribute Charms: 100 -> 5000 (+4900)

Compensation of the difference will be given to players who've already completed the tutorial.
`,
      tags: [],
    },
    {
      name: "Song Difficulty Level Revisions",
      description: `
The difficulty level of the following songs will be revised in consideration of thne current difficulty of the songs.
> Please note that this will change only the difficulty levels written for the songs, there will be no changes to the actual charts.

# Append;APPEND

## Append24to25;24 ↗ 25
- Tell Your World

## Append26to27;26 ↗ 27
- The Vampire

## Append27to28;27 ↗ 28
- Charles
- Heart Forecast

## Append28to29;28 ↗ 29
- Cinema

## Append29to30;29 ↗ 30
- Aoku Kakero!
- MORE! JUMP! MORE!
- The Bubble Future
- Regulus
- Empurple

## Append30to31;30 ↗ 31
- Stella
- Gehenna
- Pheles
- Opera! Space Opera!
- Bad Apple!! feat. SEKAI

## Append31to32;31 ↗ 32
- Chikyuu Saigo no Kokuhaku wo	

## Append32to33;32 ↗ 33
- I am You
- Tondemo Wonderz

## Append35to36;35 ↗ 36
- Sage
- Jouou

## Append36to37;36 ↗ 37
- MarbleBlue

# Master;MASTER

## Master30to31;30 ↗ 31
- Non-breath oblige

## Master31to32;31 ↗ 32
- Bitter Choco Decoration
- Fixer
- Silver Collector

## Master34to35;34 ↗ 35
- Kusare-gedou and Chocolate

## Master32to31;32 ↘ 31
- Tokyo Teddy Bear

# Expert;EXPERT

## Expert24to25;24 ↗ 25
- Retainer Supplanting His Lord

## Expert31to30;31 ↘ 30
- Marble Blue
`,
      tags: [],
    },
    {
      name: "Limited Gacha Voucher Exchange",
      description: `
You will be able to exchange 1x Limited Gacha Voucher for 50x Wish Pieces 
`,
      tags: [],
    },
    {
      name: "Character Rank Unit Claim All",
      description: `
A "Claim All" button will be added for each unit on the character rank screen. Clicking it will claim all character's unclaimed EXP. An animation will still be shown for each character.
`,
      tags: [],
    },
    {
      name: "Virtual Shows Every Hour",
      description: `
Virtual Shows held after September 30th will have a performance held every hour from the start to the end.

The start of Welcome Show performances will be changed from XX:30 to XX:00
`,
      tags: [],
    },
    {
      name: "Beginner Login Campaign Updated",
      description: `
After 12:00 on October 11th the Beginner Support Login Campaign

- Before
  - Day 1: 3* Character Select Ticket, 300 Crystals
  - Day 2 - 13: 300 Crystals
- After
  - Day 1 - 5: 4* Guarenteed Gacha Ticket, 300 Crystals
  - Day 6 - 13: 300 Crystals
`,
      tags: [],
    },
    {
      name: "Limited Rerun Gachas Reduced",
      description: `
From October, the numver of revivals of limited-time gachas will be reduced from three to two per month.
`,
      tags: [],
    },
    {
      name: "Other Changes",
      description: `
- Full voice for non-main characters in event stories and side stories
  - Past events will be updated when they are ready
- Bonus Missions can be checked on event page
- Removal of Ranked Match rank demotion
- Connect Show performance and bug countermeasures.
- The "Your SEKAI Set" will be on sale from 0:00 on September 30th. This product will be sold as a beginner's set from now on.
  - In addition, due to the sale of this set, the sale of the "Renewal Commemorative Beginner Support Set", "Beginner Support Set A", "Beginner Support Set B", and "Beginner Support Set C" will end at 11:59 on October 11th.
- Show Pts purchasing changed.
  - 1000 Show Pts:  ¥1800 → 1800 Paid Crystals
  - 100 Show Pts: ¥320 → 320 Paid Crystals
- Numerical inputs changed to use keypad.
`,
      tags: ["full voice", "va", "voice", "ranked", "demotion"],
    },
    {
      name: "Bug Fixes",
      description: `
- A bug where, under certain conditions, a communication error could prevent a normal exchange at the exchange shop.
- A bug where, when viewing a pamphlet for the first time, pressing "View" multiple times while it is loading would display the pamphlet for each press.
- A bug where, under certain procedures, a communication error would be displayed when attempting to enter a venue without a Connect Show performance ticket.
- A bug where player names were displayed during Virtual Show even when "Other Players' Names" was set to "Do not display."
- A bug where, under certain conditions, the heads of tall characters would be unnaturally cut off during story playback.
- A bug where, under certain procedures, it was not possible to switch tabs on the Character Mission screen.
- Other minor bug fixes
`,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 8, 28),
  },
};

export default v4_0_0;
