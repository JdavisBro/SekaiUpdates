import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v2_4_0: UpdateType = {
  version: "2.4.0",
  description: "",
  features: [
    {
      name: "Report Players",
      description: `
## Overview;Overview
- After the update, a new feature that will let you report malicious players to the game devs will be added. You will be able to report players by using the "Report Form."
- This use of this feature isn't to immediately or automatically ban players who get reported, but rather to help the game devs to identify malicious players by looking at the number of reports the player(s) receive and investigating them, so that the devs can take the appropriate actions faster.
- Please note that things such as penalties or bans may take some time to do, as everything will be done manually and carefully by the devs so that no false bans/penalties will take place.
## Where;Where Reports Can Be Made
- Friend Request List Screen
- Player's Profile Screen (X)
- Virtual Live / Connect Live Waiting Lobby Chat
- Player's Virtual Live / Connect Live's Cheering Message(s)
NOTE: Starting from the next update, you will be able to view other players' profiles from the Live Result screen.
## What;What Can Be Reported From the Report Form
- Harassments and/or offensive remarks towards you
- Harassments and/or offensive remarks towards other players
- Harassments and/or offensive remarks towards characters and/or units
- Obscene, indecent, and/or sexual remarks
- Cheatings and/or other fraudulent or illegal activities
- Other violations of the game's terms of use and service
## Penalties;Penalties

Players who have received certain number of reports and are confirmed to be malicious will be subject to one of the following penalties:
- 5 minute suspension (Warning)
- 1 day suspension (24 hours)
- 3 day suspension (72 hours)
- 1 week suspension (168 hours)
- Permanent suspension (BAN)
A player's penalty will increase every time they receive one penalty, and the stage of penalty a player can receive will vary according on either the number of the penalties the player has received, or the player's case, which means, depending on how heavy the case is, a player can be banned immediately.

## Note;Note

Players who have been banned once in the past can and will be banned again immediately as soon as the devs identify them as the same player with the original banned data/account, even if said players made a new account with a new data.

## Image;Image

![Image showing player profile reporting](https://static.miraheze.org/projectsekaiwiki/thumb/5/52/Update_Notes_2.4.0_1.png/1000px-Update_Notes_2.4.0_1.png)
      `,
      tags: ["reporting", "cheating"],
      notIncluded: {
        [Server.en]: true,
      },
    },
    {
      name: "Block Players",
      description: `
## Overview;Overview
- In addition to the "Report" feature, a new feature called the "Block" feature will be added to the game.
- This feature will let you block other players. This feature is meant to act as a "self-defense" and to reduce the chance of contacts with malicious players.
- The block button will be added to other players' profile screen, and you can immediately block a player by pressing the button. This will hopefully reduce your contact with the players you block in the game.
## When;When You Block a Player
- You can no longer receive friend requests from players you've blocked. The blocked players will also not be notified of the status of their friend requests to you.
- When you meet a player you've blocked in Multilives or Virtual Lives, the blocked player's name will be displayed as default name, their titles won't also be displayed, as well as the stickers they use, chat messages, cheering messages, etc. They will not be displayed to you.
- The player(s) you have blocked will not be able to enter a private room you have created.
- You will be able to block a total of 200 players, and you will be able to view your block list from [Option] --> [Communication] --> [Blocked Players List] [Manage List].

## Image;Image

![Player profile showing block button](https://static.miraheze.org/projectsekaiwiki/thumb/e/ee/Update_Notes_2.4.0_2.png/1000px-Update_Notes_2.4.0_2.png)
      `,
      tags: ["blocking"],
    },
    {
      name: "Friend Request Preferences",
      description: `
- After the update, you will now be able to set your Friend Request preferences as well.
- You will be able to set it to either [Accepting All Friend Requests], [Accepting Friend Requests Through Player IDs only], or [Not Accepting Friend Requests].
      `,
      tags: [],
    },
    {
      name: "Player Profile from Live Result Screen",
      description:
        "Starting from the next update, you will be able to view other players' profiles from the Live Result screen.",
      tags: ["show result"],
    },
    {
      name: "Account Transfer Restriction",
      description: `
- In order to prevent players from doing "account sharing" during events (basically where several players are sharing and take turns playing on one account), which is considered as a form of cheating, the number of times an account's game data can be transferred will be limited.
- This restriction will be applied to players who have reached the top 1000 in ranking AT LEAST ONCE in the first 24 hours after the start of an event.
- These players will only be able to transfer their accounts TWICE during the period of the event regardless of the methods, such as transferring between the same/different OS, how they backup/link their game data, etc.
- This restriction will be lifted every time an event has ended.

In addition, the devs also apologized to players who have been using the data transfer feature
properly, and asking for everyone's understanding and cooperation in order to build a fair gaming
environment.
      `,
      tags: ["account sharing", "account syncing", "game data"],
    },
    {
      name: "Live Mission Adjustments",
      description: `
# Overview;Overview
- Several adjustments will be made to the "Live Mission" feature, including the ways players can acquire Live Points, revamping how the missions are designed, etc.
- Your Live Mission progress will also now appear in the Live Results screen. 
# Addition;Addition of [Daily Bonus] and [Bonus Missions]
## DailyBonus;Daily Bonus
- You will be able to earn bonus 10 Live pts up to 3 times per day through Multi Lives/Cheerful Lives.
- If you have purchased "Colorful Pass", you will earn double the amount of pts.
## BonusMissions;Bonus Missions
- During an event, special missions will be available where you will be able to earn 50 Live pts for every mission you have cleared.
- You will also earn 150 Live pts for clearing all missions.
- List of Bonus Missions
  - Play & clear 1 song per day for a total of OO days
  - Play & clear 50 songs
  - Play & clear songs in Lives while getting FULL COMBO 10 times
  - Play & clear 10 different songs
  - Read the featured event story up until chapter 00
  - Spend 20,000 Event Badges during the period of the featured event
  - Attend the featured event's After Live
  - Clear all missions
- Bonus Missions will be reset for every event.
- Bonus Missions will be implemented starting from the event that will start on December 31st 2022.
# LiveMission;Live Mission Design Revamp
- The Live Mission's design and balance will be revamped to allow more means of acquiring Live pts.
- The max number of Live pts you have to earn will be increased, however, the devs hope that all players will continue to play at their own pace and playing style.
- The way Live Mission is designed will still allow players who play the game casually/normally to gain certain amount of Live pts by playing the game daily.
- The addition of [Daily Bonus] and [Bonus Missions] will also help players in their Live Mission progress.
- Adjustments & Changes
  - Max Live pts you have to earn: 8,000 pts 10,000 pts
  - Live pts required to obtain each reward: every 25-200 pts --> every 100 pts
  - Premium Pass costume nodes: 25 pts / 6000 pts / 7000 pts / 8000 pts 100 pts / 5000 pts / 7500 pts / 10000 pts
- This adjustments & changes will be implemented starting from January 2023.
- There will be no changes to the kinds, types, and amounts of other items you can get through Live Mission (both Regular & Premium).

# Image;Result Screen Image

![Image showing adjustments to the live/show result screen](https://static.miraheze.org/projectsekaiwiki/thumb/1/13/Update_Notes_2.4.0_3.png/1000px-Update_Notes_2.4.0_3.png)
      `,
      tags: ["battle pass", "mission pass"],
    },
    {
      name: "Music Mylist",
      description: `
- A new feature called "Music Mylist" will be added to the game.
- This will be a feature that allows players to create their own personal lists of songs, which can also be used during Lives and viewing MVs.
- Mylists can be created and edited trough [Menu].
- You will be able to create up to 5 lists, and there is no limit of the number of songs you can add to 1 list. However, you will not be able to add songs that you haven't bought/acquired.

![Image showing Music Mylist in the choose song menu](https://static.miraheze.org/projectsekaiwiki/thumb/1/10/Update_Notes_2.4.0_4.png/1000px-Update_Notes_2.4.0_4.png)
      `,
      tags: ["playlist", "favorite", "favourite"],
    },
    {
      name: "Focus Camera",
      description: `
- A new feature called "Focus Camera" will be added to the game.
- This will be a feature you can use during Virtual Lives / Connect Lives. It's a feature that will allow you to automatically keep the focus of your camera to a certain character during a Virtual or connect Live.
- The Focus Camera can also be set to 3 zoom-in levels. You can increase the zoom-in level by tapping the focus character's face.
- Focus Camera may be interrupted during MC talks or during scene changes, but the focus will be back automatically once the focus character is back on stage/screen.

![Image showing focus camera being used during a virutal live](https://static.miraheze.org/projectsekaiwiki/thumb/7/70/Update_Notes_2.4.0_5.png/1000px-Update_Notes_2.4.0_5.png)
      `,
      tags: ["focus", "zoom", "virtual show", "virtual live", "vlive"],
    },
    {
      name: "Always Change Challenge Show Teams",
      description: `
- After the update, you will now be able to check and change the setup of each character for Challenge Live at any times, even after you have finished your daily Challenge Live.
      `,
      tags: ["challenge show", "challenge live"],
    },
    {
      name: "3DMV Viewer Character Costume Select",
      description: `
- When in the 'View MVs" feature, you will now be able to set the costumes each character wears in the unit/member selection screen.
- With the addition of this update, members' Rarity, Level, Leader/Sub-Leader, etc. will be hidden when you're in the "View MVs" feature/screen.

![Image of the 3DMV viewer costume select](https://static.miraheze.org/projectsekaiwiki/thumb/d/d3/Update_Notes_2.4.0_6.png/1000px-Update_Notes_2.4.0_6.png)
      `,
      tags: ["outfit select"],
    },
    {
      name: "Original MV and 2DMV in the MV Viewer",
      description: `
- In the "View MVs" feature, you can now not only watch 3DMVs, but the songs' "Original MV" and "2DMV" as well.
- Please do note that in order to reduce the size of the game, the quality of the MVS will be lower than the ones uploaded on the official YouTube channel and/or other sites.

![Image showing 2DMV in the MV Viewer](https://static.miraheze.org/projectsekaiwiki/thumb/2/2e/Update_Notes_2.4.0_7.png/1000px-Update_Notes_2.4.0_7.png)
      `,
      tags: ["ogmv", "movie", "video"],
    },
    {
      name: "Batch Download Song and MV Data",
      description: `
- The option to batch download all songs and MVS data in the game will be added.
- Since batch download can be quite big, please make sure to start the download process with a good internet connection to avoid any errors mid-download.
- Another Vocal versions are not included in the batch download.
- Batch download for 3DMVs data doesn't include stages and live costumes data.
- When you batch download the MVS data, the Songs & MVS settings in "Data Management" option will be automatically set to "Save/Keep All Data", so please do watch your device's remaining space.
      `,
      tags: ["2dmv", "3dmv", "preload", "ogmv", "video"],
    },
    {
      name: "Adjustments to FES Scorer Skill",
      description: `
- Adjustment will be made to the fes cards with the Fes Scorer skill.
- BEFORE: Score is increased by 70% for 5 seconds, and by 120% until you score a GREAT or lower.
- AFTER: Score is increased by 70% for 5 seconds, and by 120% until you score a GOOD or lower.
- Adjustment is applied to skill Level 1 until Level 4.
- There will be no change in skill effect value.
      `,
      tags: ["colofes", "colorful festival"],
    },
    {
      name: "Adjustments and Bug Fixes",
      description: `
- Players who are in "waiting" status during Multi Lives / Cheerful Lives will be automatically removed from the room after a certain period of time.
- Modify the "Regular Missions" tab so that it will be hidden when all regular missions have been cleared.
- Display the percentage of gacha rates to four decimal places.
- Improvements & adjustments to other detailed features/functions, direction, logic, etc.
- Other minor bug fixes.
      `,
      tags: [
        "waiting",
        "multi live",
        "multi show",
        "coop live",
        "coop show",
        "cheerful live",
        "cheerful show",
        "gacha rates",
        "decimal",
      ],
    },
  ],
  date: {
    [Server.jp]: new Date(2022, 11, 19),
    [Server.en]: new Date(2023, 11, 20, 11),
  },
};

export default v2_4_0;
