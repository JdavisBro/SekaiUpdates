import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_4_0: UpdateType = {
  version: "3.4.0",
  description: "",
  features: [
    {
      name: "Ads",
      description: `
- Ads will be added to the game after the new update.
- Players can receive various rewards from watching ads. There are limits to the number of ads a player can watch per day. When a player reach that limit, the choice to watch the ads will be hidden.
- Watching ads is completely optional.
- Ads are reset every day at 4:00 JST.
- Ads are viewable in various locations but most ads are available from the big screen in Scrable Crossing.

## Ad Menu Images
![Ad Menu in Scramble Crossing](https://pjsekai.sega.jp/master-data/image/news/news_thumb_457_xynIgNJGJn.PNG)

## Rewards;Rewards
- Crystals
  - Limit: 1 time per day
  - Available at: Crystal Shop
  - Amount: 10 Crystals / 100 Crystals
- Special Gift
  - Limit: 2 times per day
  - Available at: Present Box
  - Available Rewards: 
    - 4* Card
      - [List Here](h#FourStars)
    - 3* Card
    - 2* Card
    - Available 3* and 2* cards players can get from ads are PERMANENT cards that are available in gachas by September 20th 2023.
    - Players can check which cards they can get from watching ads via "Reward Details" that appears right before watching an ad.
    - Live Bonus Drinks (S) x2 / 1 Random Type Attribute Gems x30 / Miracle Gems x20 / Magic Cloth x50 / Magic Thread x5 / Mysterious Seeds x5
- Event Tokens
  - Limit: 1 times per day
  - Available at: Event Exchange
  - Amount: 1000 / 1500 / 2000 / 3000 / 5000
  - The event token or world link chapter badge that can be earned is for the current event or chapter that is being held at the time you view the ad.
  - Outside of event periods the option will be hidden and cannot be viewed.
- x5 Bonus Energy Recovery
  - Limit: 2 times per day
  - Available at: Bonus Recovery Screen
- Mission Points & Wish Pieces
  - Limit: 1 time per day
  - Available at: Mission Pass Screen
  - Amount: 30 Points & 5 Fragments of Feelings
- Songs
  - Limit: 1 time per day
  - Available at: Music Shop (not at scramble crossing)

### FourStars;Possible 4* List
#### LN;Leo/need
- Ichika - Starpiece Connection (Knock the Future)
- Saki - The Feelings We've Realized (Unnamed Harmony)
- Honami - Because You're Our Dear Friend (Unwavering Feelings, Now Put Into Words)
- Shiho - An Old Wish (That day, the Sky was Far Away)
#### MMJ;MORE MORE JUMP!
- Minori - Let's Do a Fan Meeting! (MORE MORE Making Christmas)
- Haruka - In The Face Of "What I Love" (You Deserve It! Break Time!)
- Airi - Full Power! Happy Everyday! (Happy Lovely Everyday!)
- Shizuku - I'm Not Just Anyone, I'm "Me" (My Color)
#### VBS;Vivid BAD SQUAD
- Kohane - Awakening My Inner Strength (Awakening Beat)
- An - Despite Being Partners (Singing in Sync)	
- Akito - Newfound Enthusiasm (THE POWER OF UNITY)
- Toya - Outdoor Cooking! (Same Dreams, Same Colors)
#### WXS;Wonderlands x Showtime
- Tsukasa - The Outcome Of My Choice (Wonder Magical Showtime!)
- Emu - Private Emu's Investigating! (Popping in My Heart!)
- Nene - Celebrate With Fireworks (Mermaid Admiration)
- Rui - Longing for the Old Days (Revival My Dream)
#### N25;Nightcord at 25:00
- Kanade - Faintly Glowing Elpis (Someday, From the Depths of Despair)
- Mafuyu - Memories of Warm Affection (Mirage of Light)
- Ena - Through Pain And Misery (On This Blank Canvas, I Paint)
- Mizuki - Feelings That I've Realized (Secret Distance)
#### VS;Virtual Singer
- Miku - Vivid BAD SQUAD - Powerful Smile (SEKAI Happy New Year!)
- Rin - Leo/need - A Tomboyish Melody (Unnamed Harmony) 
- Len - MORE MORE JUMP! - Prince Of The Stage (Happy Lovely Everyday!)
- Luka - Wonderlands x Showtime - What Do Kappas Like? (The Climax! Kamiyama Cheer Squad!)
- MEIKO - Nightcord at 25:00 - Necessary Distance (Secret Distance)
- KAITO - Leo/need - Conversing Through Sound Alone (Knock the Future)
      `,
      tags: [],
      date: {
        [Server.en]: new Date(2023, 10, 30),
      },

    },
    {
      name: "Voicelines in Character Archive",
      description: `
- A new section called "Voicelines" will be available in the Character Archive after the update.
- As the name suggest, this new section will let you listen to various character voicelines in the game, such as Show voicelines, Gacha voicelines, Seasonal voicelines, etc.
- Certain voicelines will need to be unlocked first before players can listen to them.
# Voicelines;Voiceline List

## Show;Show Voicelines
Show cut-in voices / Live results voices
How to Unlock: Play the voicelines during lives/after lives
- You can still unlock cut-in voicelines even when you set cut-in setting to [OFF].
- Live results voicelines BEFORE the v.3.0.0 update will already be unlocked, however the live results voicelines AFTER the v.3.0.0 update will still be locked. Please replay them again during lives to unlock them.

## SmallTalk;Small Talk
Login bonus voices / Home screen voices (via Show/Character button)
- All "Small Talk" voicelines will automatically be unlocked after the update.
- "Small Talk" voicelines are NOT included in the list of Character Missions.
- Certain limited "Small Talk" voicelines such as April Fool's, collab, etc. will not be included in the voiceline list.

## Training;Training
Card level up voices / Card upgrading voice / Card skill up voices / Card mastery rank voices
- All "Training" voicelines will automatically be unlocked after the update.
- "Training" voicelines are NOT included in the list of Character Missions.

## Gacha;Card Gacha Lines
Voicelines: 3* / 4* / BD/AN cards
How to Unlock: Played when you first pull the cards through gachas
- All "Gacha" voicelines of cards that you already have will automatically be unlocked after the update.
- Event reward 3* cards "Gacha" voicelines will be added when those 3* are added to the list of gacha/character exchange.

![Card Gacha Line Menu for Miku](https://pjsekai.sega.jp/master-data/image/news/news_thumb_456_qvLfAswhgF.PNG)
      `,
      tags: [],
    },
    {
      name: "Change 3DMV 6th Character Slot",
      description: `
- After the update, an extra slot for a 6th member in the "View MVs" mode will be added.
- This slot will be available for certain songs only, such as "Gunjo Sanka", "Journey", and 'INEO"
- Please note that the 6th member slot is only available in the "View MVs" mode and is NOT available in rhythm game mode.
![3DMV Viewer settings menu for I'm Mine showing the 6th member slot](https://pjsekai.sega.jp/master-data/image/news/news_thumb_461_PhpDLmBKQw.PNG)
      `,
      tags: [],
    },
    {
      name: "New Cut-In Lines for Sekai Virtual Singers",
      description: `
- Each SEKAl-Variant VIRTUAL SINGERs other than Miku will now have their own special cut-in voicelines during lives.
- There will be a total of 390 voicelines, including voicelines between "VIRTUAL SINGERs from the same unit", as well as voicelines between "SEKAl-Variant VIRTUAL SINGERs and their corresponding unit members"
- In addition, with this update, the algorithm for selecting which voicelines to play during lives will be adjusted:
  - Kizuna Rank voicelines that have never been played before will be put as priority.
  - In the case that there are no unplayed Kizuna Rank voicelines left, priority will be shifted to other unique voicelines, such as new voicelines between characters.
  - In the case that there are no unplayed unique voicelines left, priority will be shifted to Kizuna Rank and unique voicelines that have been played before.
  - If all voicelines have been played, then other voicelines will be played instead.
      `,
      tags: [],
    },
    {
      name: "Outfit Selection Updates",
      description: `
- After the update, when selecting a costume, accessories that are part of a set with the costume will now be listed/shown first in the accessory list. These accessories will also be marked with "Set" to show that they're part of a set with the selected costume.
- In addition, accessories that can't be worn with the selected costume will now be listed last on the accessory list.

![Hatsune Miku in the dressup screen showing the accessories of a costume being listed first.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_459_miHGtRsJQw.PNG)

- Another update is that players can now freely adjust/move around the position of the costume preview models. This way, players can now look closely at the costume details that can't be seen before.

![Kagamine Len in the dressup screen showing the ability to move the position of the preview.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_460_LrIXkYGacI.PNG)
      `,
      tags: [],
    },
    {
      name: "New Character Missions and Adjustments",
      description: `
# NewMission;New Character Mission
- Unlock a certain amount of [featured character's] Live & Gacha voicelines
  - 10 voicelines / 20 voicelines / 30 voicelines / 40 voicelines / 50 voicelines / ...and so on until 250 voicelines
# Cap;Cap Increase
- Unlock a certain number of Live Costumes for [featured characterl
  - 530 costumes / 540 costumes / 550 costumes / 560 costumes / 570 costumes / 580 costumes / 590 costumes / 600 costumes / 610 costumes / 620 costumes / 630 costumes / 640 costumes
- Collect a total number of [featured character's] stamps
  - 26 stamps / 27 stamps / 28 stamps / 29 stamps / 30 stamps / 31 stamps / 32 stamps / 33 stamps / 34 stamps / 35 stamps
      `,
      tags: [],
    },
    {
      name: "Device Compatibility",
      description: `
- After the "v.3.4.0" update, the game will no longer be playable for the following devices: Android devices for car navigation, TVs, etc. that do not have portrait display function.
- Please make sure to transfer your data to another device that works better/well with the game.
      `,
      tags: [],
    },
    {
      name: "Bug Fixes",
      description: `
• [BOOKMARK] Fixed a bug where bookmarks couldn't be placed in certain scenes/episodes.
• [BOOKMARK] Fixed a bug where character motions may be displayed incorrectly upon accessing a story episode through the bookmark function.
• [MV] Fixed a bug that caused Mikuls hairstyle thumbnails to be displayed incorrectly under certain conditions when viewing MVs.
• [MV] Fixed a bug in "Sekai o Terasu Tetrad" MV where Emu and Nene's accessories can be seen floating during a certain part in the MV.
• [MV] Fixed a bug where some 3DMV backgrounds and props/effects may be rendered fully pink on certain devices.
• Other visual bug fixes
• Other minor bug fixes
      `,
      tags: [],
    },

  ],
  date: {
    [Server.jp]: new Date(2024, 2, 29),
  },
};

export default v3_4_0;
