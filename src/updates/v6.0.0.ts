import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v6_0_0: UpdateType = {
  version: "6.0.0",
  description: "",
  features: [
    {
      name: "MySekai Character Birthday / Anniversary Events",
      description: `
New events will be held in MySekai where you can celebrate character's birthdays/anniversaries.

![Demonstration of Haruka's birthday event](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_yTZiABn88Z.jpg)

## Dewdrops;Collect Celebration Dewdrops

- To obtain [Celebration Flowers], you will first need to collect [Celebration Dewdrops].
- [Celebration Dewdrops] can be obtained through Shows (rhythm game) and/or MySekai.
- In MySekai, [Celebration Dewdrops] will drop from any harvestable spots (rocks, trees, barrels, etc.).
- [Celebration Dewdrops] will also drop from a special spot called [Sprout].
  - Unlike regular harvestable spots, [Sprouts] can re-appear again outside of the daily reset times (5:00 & 17:00 server time) if specific conditions are met.
- Collecting [Celebration Dewdrops] from [Sprouts] will consume 2.5 stamina.
- Show P, Player Rank EXP, event pts, and event tokens gained from picking [Sprouts] will be less than regular harvestable spots.

## Garden;Visit the Limited-time Area: Celebration Garden
- During birthday/anniversary event period, a special limited-time area called [Celebration Garden] will be available for you to visit.
- In here, you will be able to water the [Celebration Tree] that's growing there using the [Celebration Dewdrops] you have gathered beforehand.
- Watering the [Celebration Tree] will cause flowers to bloom. You will be able to collect [Celebration Flowers] from here.
- Certain amount of [Celebration Dewdrops] (in pts) are required to make the flowers bloom.
- If you own any of the featured character's Birthday/Anniversary cards, you will gain special effect that increases the amount of pts you earn.
  - New Birthday/Anniversary Card: +50%
  - Old Birthday/Anniversary Cards: +15%
  - The bonus applied for each BD/AN cards you have.
  - Any doubles/multiple copies of the same BD/AN cards will NOT give bonus.

## Furniture;Craft Special Birthday/Anniversary Furniture
- During birthday/anniversary event period, you will be able to craft special birthday/anniversary furniture.
- [Celebration Flowers] are required to craft these furniture.
- You will be able to hold a party as well by crafting the furniture [Birthday/Anniversary Cake] and placing it in the room however you like.
- Special celebration scene will also play when you hold a party. You will be able to view this scene again by using the "Recollection" feature. However, you will not be able to change the layout of the party.
- After a character's birthday/anniversary event has ended, you will no longer be able to craft that character's birthday/anniversary furniture.
- Birthday/anniversary furniture blueprints will be given to you.
- Even if you have crafted [Birthday/Anniversary Cake], you will not be able to hold a party unless the cake has been placed in the room.
- A certain amount of space around the [Birthday/Anniversary Cakel is also required for you to start the party. You will not be able to hold a party if other furniture are placed within the designated space for the [Birthday/Anniversary Cake].

![Haruka's birthday furniture showcase](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_x0JNcxPrFK.jpg)


## Rewards;Other Rewards

- Other than crafting birthday/anniversary furniture and holding a party, you can also earn rewards from birthday/anniversary events.
- By collecting certain amount of [Celebration Flowers], you will be able to earn various rewards such as [Birthday Title], [Wish Pieces], [Mission Gacha Tickets], and more.
- The design of the [Birthday Title] you get will also change depending on the amount of [Celebration Flowers] you have collected.
- You will be able to check the list of rewards from the birthday/anniversary event page.

![Haruka's birthday title and other rewards](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_YLIxBUAk4O.jpg)
`,
      tags: [],
    },
    {
      name: "Birthday / Anniversary Schedule Changes",
      description: `
The schedule for birthday/anniversary events will be split in phases. Please note that what you can do will vary depending on each character's birthday or anniversary.

# Schedule;Schedule

- Birthday / Anniversary Gacha:
  - Starts 4 days BEFORE the featured character's birthday/anniversary (0:00 server time)
  - Ends 2 days AFTER the featured character's birthday/anniversary (23:59 server time)
- Celebration Dewdrops:
  - Starts 3 days BEFORE the featured character's birthday/anniversary (0:00 server time)
  - Ends 1 day BEFORE the featured character's birthday/anniversary (23:59 server time)
  - During the beginning and end of the [Celebration Dewdrops Availability] period, all areas in MySekai will be reset at 0:00 server time.
  - Weather changes will not occur during the [Celebration Dewdrops Availability] period.
- Celebration Flowers:
  - Starts 3 days BEFORE the featured character's birthday/anniversary (0:00 server time)
  - Ends 2 days AFTER the featured character's birthday/anniversary (23:59 server time)
- Birthday/Anniversary Furniture:
  - Starts 3 days BEFORE the featured character's birthday/anniversary (0:00 server time)
  - Ends 2 days AFTER the featured character's birthday/anniversary (23:59 server time)
- Birthday/Anniversary Party:
  - Starts On the day of the featured character's birthday/anniversary (0:00 server time)
  - Ends 2 days AFTER the featured character's birthday/anniversary (23:59 server time)

![Birthday Schedule](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_wwniJkdf4C.jpg)

# Changes;Other Changes

Due to the addition of Birthday/Anniversary event and the increase of number in Birthday/Anniversary cards, the following will be adjusted:

## Gacha;Gacha

- Birthday/Anniversary Gachas
  - New Birthday/Anniversary Gacha
  - Period: Start 4 days before the character's birthday/anniversary and runs for 7 days.
  - [Limited Gacha Voucher x5] can now be used for card exchange.
  - Gacha Limit: Max 100 pulls No limits
- Birthday/Anniversary Gacha Reruns
  - Period: Start 4 days before the character's birthday/anniversary and runs for 7 days.
  - All past birthday/anniversary cards will now be put into 1 gacha instead of having individual/separate gachas.
  - Birthday/anniversary card rates: 3% rates divided equally for each birthday/anniversary card.
  - [Limited Gacha Seals x5] can now be used for card exchange.
  - Gacha Limit: Max 100 pulls * No limits
- [Gacha Seals] are shared between the new birthday/anniversary gacha & the birthday/anniversary rerun gacha.

## VirtualShow;Virtual Show Rewards

- Birthday/Anniversary Stamp x1 -> Featured character's Wish Vial x1
- Birthday/Anniversary Title xl -> Featured character's Wish Pieces x100
`,
      tags: [],
    },
    {
      name: "MySekai Hundred Sights",
      description: `
# About;About MySekai Hundred Sights

- After the new update, a new option called [MySekai Hundred Sights] will be available via the [Going Out] menu.
- This option will allow you to post your very own themed [MySekai].
- [MySekai Hundred Sights] works similarly to an event where players can post MySekai layouts based on a fixed theme and under a fixed duration/deadline.
- Player-submitted [MySekai] can be viewed from [Going Out] --> [Contest]. Here, you can view MySekai layouts other players have submitted as well as giving them a visit.
- You will also be able to show your support by giving the MySekai layouts you like a [Like]. MySekai layouts that receive a lot of [Likes] will be recognized as part of the featured theme's [MySekai Hundred Sights] (30 MySekai layouts will be picked per theme).
- Players whose MySekai layout got picked will then be given a special [Best Creator] title based on the featured theme. Their MySekai layouts will also be archived as an entry in the [MySekai Hundred Sights] collection, which can be accessed by all players anytime.
- Themes for the contests will be announced in advance via monthly live streams and/or other means.
- Players will be able to submit ONE entry per theme.
- Players can re-submit their entries, however, re-submitting your entries will discard the previous entries you have submitted, including the number of likes they have.
- The layout data for the entries you have submitted will be saved as they are, meaning that they will not affect the current layout of your own [MySekai].

![Hundred Sights demonstration](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_jnYjiqgCUV.jpg)

# Themes;October's Themes

- Your Very Own MySekai
  - 30th Sept 17:00 - 6th Oct 16:59
- Haruka's Birthday Party
  - 5th Oct 00:00 - 11th Oct 23:59
- Honami's Birthday Party
  - 27th Oct 00:00 - 2nd Nov 23:59

![October's theme schedule](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_gF5HFj0luV.jpg)
`,
      tags: [],
    },
    {
      name: "Area Items Level Cap Raised",
      description: `
After the update, the max level cap for area items will be raised to Lv.20.

![Item level raising](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_tQj5lsgsXG.jpg)

# Bonus;Bonus Increase
- Character Area Items: +2% increase per level (up to 10%)
- Unit Area Items: +0.5% increase per level (up to 2.5%), +1% increase when unit matches (up to 5%)
- Type Area Items: +0.5% increase per level (up to 2.5%), +1% increase when type/attribute matches (up to 5%)

# DreamJewel;Dream Jewel

- A new item called [Dream Jewel] will also be required to level up your area items from Lv.15 to Lv.16.
- There are 6 types of Dream Jewels, one for each unit. The types of Dream Jewels required to level up area items will vary depending on the area items themselves.
- Dream Jewels can be obtained via event rankings and/or the [Conversion Machine].

## JewelsRequired;Area Items & Required Dream Jewels
- Character & Unit Area Items
  - VIRTUAL SINGER: Dream Jewel (White)
  - Leo/need: Dream Jewel (Blue)
  - MORE MORE JUMP!: Dream Jewel (Green)
  - Vivid BAD SQUAD: Dream Jewel (Red)
  - WonderlandsxShowtime: Dream Jewel (Orange)
  - Nightcord at 25:00: Dream Jewel (Purple)
- Attribute Area Items
  - At Miyamasuzaka Girls' Academy: Dream Jewel (White)
  - At Kamiyama High School: Dream Jewel (White)

![Dream Jewels required for leveling each item type](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_T7kPg6aaua.jpg)

## JewelsObtain;How to obtain Dream Jewels

As mentioned before, Dream Jewels can be obtained via event rankings and/or via the [Conversion Machine] in My SEKAI.
- Unit-specific Dream Jewels can be obtained by placing in TOP 10,000 in unit events.
- [White] Dream Jewels can be obtained by placing in TOP 50,000 in unit events. Even more can be obtained via mixed events.
- Unit Events:
  - TOP 10,000 (1 - 10,000): Featured Unit Dream Jewel x5; Dream Jewel (White) x5
  - TOP 50,000 (10,001 - 50,000): Dream Jewel (White)
- Mixed Event
  - TOP 10,000 (1 - 10,000): Dream Jewel (White) x25
  - TOP 50,000 (10,001 - 50,000): Dream Jewel (White)
- Conversion Machine
  - Dream Jewel (White): Wish Drops x15 + Coins x1,000,000
  - Dream Jewel (Unit-Specific): Dream Jewel (White) x5 + Coins x1,000,000

![Dream Jewels gained from ranking](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_07I2uGlfQN.jpg)
`,
      tags: ["dream jewels"],
    },
    {
      name: "Mission Pass Max Raised",
      description: `
After the update, the max cap for Live Mission (Normal, Premium, My SEKAI) will be raised from 10,000 to 12,000.

Additional rewards for each pass will also be added with this change. Rewards will be added per 100 P from 10,100 P onwards.

- Normal Show Mission Additional Rewards
  - 1O,1OO P - 10,400 P: Coins X10,000 per 100 P
  - 10,500 P: Wish Pieces x 100
  - 10,600 P - 1O,900 P: Coins X10,000 per 100 P
  - 11,000 P: Vocal Card Exchange Ticket x2
  - 11,100 P - 11,400 P: Coins X10,000 per 100 P
  - 11,500 P: Mysterious Seeds x30
  - 11,600 P - 11,900 P: Coins X10,000 per 100 P
  - 12,000 P: Wish Drops x3
- Premium Mission Pass Additional Rewards
  - 10,100 P - 10,900 P: Skill-Up Score (Intermediate) x1 per 100 P
  - 11,000 P: Skill-Up Scores (Intermediate) x2
  - 11,100 P - 11,900P: Skill-Up Score (Intermediate) x1 per 100 P
  - 12,000 P: Wish Jewel x1
- My SEKAI Mission Pass Additional Rewards
  - 10,100 P - 10,300 P: Prism Memoria x1 per 100 P
  - 10,400 P: Brand New Tone x1
  - 10,500 P - 10,700 P: Prism Memoria x1 per 100 P
  - 10,800 P: Brand New Tone x2
  - 10,900 P - 11,100 P: Prism Memoria x1 per 100 P
  - 11,200 P: Four-Leaf Clover x1
  - 11,300 P - 11,500 P: Prism Memoria x1 per 100 P
  - 11,600 P: Afterglow Log x1
  - 11,700 P - 11,900 P: Prism Memoria x1 per 100 P
  - 12,000 P: Diamond x1

![New rewards](https://pjsekai.sega.jp/master-data/image/news/news_thumb_353_yg7nMxMJqR.jpg)
`,
      tags: [],
    },
    {
      name: "Character Rank Missions Cap Increase",
      description: `
The character rank cap will be increased from 160 to 175.

# Character Rank Missions

- Collect [amount] of [featured character's] cards
  - 92 cards / 94 cards / 96 cards / 98 cards / 100 cards / 102 cards / 104 cards / 106 cards / 108 cards / 110 cards
- Unlock [amount] of Costumes for [featured character]
  - 810 costumes / 820 costumes / 830 costumes / 840 costumes / 850 costumes / 860 costumes / 870 costumes / 880 costumes / 890 costumes / 900 costumes / 910 costumes / 920 costumes / 930 costumes / 940 costumes / 950 costumes
- Collect [amount] of [featured character's] Another Vocals
  - 26 / 27 / 28 / 29 / 30
- Collect [amount] of [featured character's] Stickers
  - 41 stickers / 42 stickers / 43 stickers / 44 stickers / 45 stickers / 46 stickers / 47 stickers / 48 stickers / 49 stickers / 50 stickers
- Play Shows by having [featured character] as the leader in the team for [amount] of times
  - 40,500 times / 41,000 times / 41,500 times / 42,000 times / 42,500 times / 43,000 times / 43,500 times / 44,000 times / 44,500 times / 45,000 times / 45,500 times / 46,000 times / 46,500 times / 47,000 times / 47,500 times / 48,000 times / 48,500 times / 49,000 times / 49,500 times / 50,000 times
- Have [featured character] in the Green Room a [amount] of times
  - 920 times / 940 times / 960 times / 980 times / 1,000 times / 1,020 times / 1,040 times / 1,060 times / 1,080 times / 1,100 times

- Read [amount] of [featured character's] Side Story part 1
  - 56 stories / 57 stories / 58 stories / 59 stories / 60 stories / 61 stories / 62 stories
- Read [amount] of [featured character's] Side Story part 2
  - 56 stories / 57 stories / 58 stories / 59 stories / 60 stories / 61 stories / 62 stories
- Level up [featured character's] Character Area Items [amount] of times
  - 16 times / 17 times / 18 times / 19 times / 20 times
- Level up Unit Area Items [amount] of times
  - 32 times / 34 times / 36 times / 38 times / 40 times
- Level up Type Area Items [amount] of times
  - 155 times / 160 times / 165 times / 170 times / 175 times / 180 times / 185 times / 190 times / 195 times / 200 times
- Level up [featured character's] 4* / BD/AN cards' Skill Level [amount] of times
  - 92 times / 94 times / 96 times / 98 times / 100 times / 102 times / 104 times / 106 times / 108 times / 110 times
- Raise [featured character's] 4* / BD/AN cards' Master Rank [amount] of times
  - 142 times / 144 times / 146 times / 148 times / 150 times / 152 times / 154 times / 156 times / 158 times / 160 times / 162 times / 164 times / 166 times / 168 times / 170 times / 172 times / 174 times / 176 times / 178 times / 180 times
- Raise [featured character's] 1* / 2* / 3* cards' Master Rank [amount] of times
  - 145 times / 150 times
`,
      tags: [],
    },
    {
      name: "Other Cap Increases",
      description: `
- Player Rank
  - After the update, the max rank cap for Player Rank will be raised from 700 to 800.
  - The title [Emerald] will also be added.
  - Rank-up rewards after rank 700 will be the same as the rank-up rewards for rank 400 onwards.
- Titles
- After the update, the max cap for the [Total Login Days] title achievement will be raised from 1825 days to 2190 days.
  - The title [Always by Your Side] will also be added.
- Challenge Show High Score Cap
  - After the update, the high score max cap for each character's Challenge Live will be raised from 2,500,000 to 3,000,000
- Bonus Energy Usage
  - After the update, players can now use up to x10 bonus energy even outside of event periods.
`,
      tags: [],
    },
    {
      name: "Other MySekai Updates",
      description: `
# ConversionMachine;Conversion Machine

## Adjustments;Adjustments

- Time Balance Adjustment
  - Wish Pieces x15: 48 hours -> 44 hours (24 hours -> 22 hours)
  - Bonus Energy Drinks (L) x3: 48 hours -> 44 hours (24 hours -> 22 hours)
  - Times in "()" brackets are for players who have purchased or have an active [World Pass].
- Material Requirements & Quantity Balance Adjustment
  - Diamond x1: Brand New Tone x15 -> Brand New Tone x8
    - Additionally, players who have used the [Conversion Machine] to create Diamonds before the update will receive "Brand New Tone" as compensation. The amount each player get will be based on the amount they have used + number difference before and after the update.
  - Weather-Specific Materials x1 -> x2: Coins x50,000 -> Coins x5,000
- There are no other changes other than the ones listed above

## NewItems;New Items

- Diamond x1
  - Materials Required: Blue Sky Sea Glass x16 + Moonlight Stone x16 + Shooting Star Fragments x16 + Snowflakes x16 + Coins x50,000
- Supreme Pickaxe Head xl
  - Materials Required: Supreme Axe Blade x1 + Iron x3 + Coins x10,000
- Supreme Axe Blade x1
  - Materials Required: Supreme Pickaxe Head xl + Iron x3 + Coins x10,000
- Mysterious Seeds x3
  - Materials Required: Flower Petals x30 + Coins x10,000
- Charms (Attribute / Type-Specific) x2,OOO
  - Materials Required: Gems (Attribute / Type-Specific) x100 + Coins x1,000
- Dream Jewel (White) x1
  - Materials Required: Wish Drops x15 + Coins x1,000,000
- Dream Jewel (Unit-Specific excl. White) x1
  - Materials Required: Dream Jewel (White) x5 + Coins x1,000,000

# Weather;Weather

After the update, the following will now occur during [FINE] weather in My SEKAI:
- The number of flowers in the [Colorful Flower Field] area will be doubled.
- [Brand New Tone] will always appear in the [Forgotten Place] area.

# MissionPass;Mission Pass Rewards
After the update, the amount of [Chainsaw] and [Stone Drilling Machine] you can get from [My SEKAI Mission Pass] will be increased to 3 each.

# Tutorial;Tutorial Completion Rewards
After the update, the following items will now be given to players who have cleared the tutorials:
- Supreme Axe x1
- Supreme Pickaxe x1
- Blank Blueprint x1
Players who have cleared the tutorials before the update will also receive the items above (they will be sent to your present box after the update).
`,
      tags: [],
    },
    {
      name: "Event Shop & Challenge Show Rewards Changes",
      description: `
# EventShop;Event Shop

After the update, the cost of [Wish Drops] in event exchange shop will be reduced from 50,000 to 30,000 event tokens per 1 Wish Drop.

# ChallengeShow;Weekly Challenge Show rewards

After the update, [Music Cards x10] from the list of Weekly Challenge Stamp rewards will be removed and changed to [Wish Drop xl].
`,
      tags: [],
    },
    {
      name: "Virtual Show Discontinuation",
      description: `
Starting from October 2025, the following Virtual Shows will be discontinued:
- Halloween (October)
- Christmas (December)
- Valentine's Day (February)
- White Day (March)
- Tanabata (July)
Title rewards for the Virtual Shows above will also be discontinued, however, if there's a login campaign running at the same time, the amount of "Limited Bonus Energy Recovery Items" distributed will be increased from 1 to 3.
`,
      tags: [],
    },
    {
      name: "Bug Fixes",
      description: `
- [Character Archive] - Fixed the issue where the game would become unplayable when viewing VIRTUAL SINGER's MySekai convos from Character Archive.
- [Story] - Fixed the issue where episode 19 of [25-ji, Nightcord de.]'s Main Story couldn't be viewed properly.
- [Rhythm Game] - Fixed a display issue where player's clear status wouldn't be reflected on the song selection screen after clearing a song with ALL PERFECT.
- [Virtual Live] - Fixed the issue where tapping [Enter ID] for any Virtual Live's room will cause data downloads for all currently ongoing Virtual Lives.
- [MySekai] - Fixed the issue where a character's reaction might occur repeatedly for the same piece of furniture.
- Other minor bug fixes.
`,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 8, 30),
  },
};

export default v6_0_0;
