import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v2_6_0: UpdateType = {
  version: "2.6.0",
  description: "",
  features: [
    {
      name: "Favorite Stories",
      description: `
- A new feature called "Favorite Stories" will be added to the game. This will be shown in your profile.
- You will be able to put the "Favorite Stories" section in your Custom Profile.
- This will be a feature where players will be able to pick and display their favorite Main and/or Event Stories.
- You will also be able to write comments on your favorite stories. You can use this section to list out the good things or what you like about the stories. There is also options to mark whether your comments contain spoilers or not.
- Please do note that you will NOT be able to put an ongoing event's story in the Favorite Stories list.

![Image showing favorite stories in a user's profile](https://static.miraheze.org/projectsekaiwiki/thumb/d/d1/Update_Notes_2.6.0_1.png/1000px-Update_Notes_2.6.0_1.png)
![Image showing writing a comment about a story](https://static.miraheze.org/projectsekaiwiki/thumb/9/9b/Update_Notes_2.6.0_2.png/1000px-Update_Notes_2.6.0_2.png)
![Image showing a story recommendation on the Leo/need main story](https://static.miraheze.org/projectsekaiwiki/thumb/8/80/Update_Notes_2.6.0_3.png/1000px-Update_Notes_2.6.0_3.png)
      `,
      tags: ["favourite story", "favorite story"],
    },
    {
      name: "Story Bookmark",
      description: `
- A new feature called "Bookmark" will be added to the game.
- Just as the name suggested, you will be able to bookmarked parts of Main and/or Event Stories you like, in case you'd like to reread them or just simply marking that one part of the story.
- You can put a bookmark during a story from the menu.
- You can put up to 20 bookmarks per 1 Main/Event Story.

![Image showing the making of a bookmark in a story](https://static.miraheze.org/projectsekaiwiki/thumb/2/22/Update_Notes_2.6.0_4.png/1000px-Update_Notes_2.6.0_4.png)
      `,
      tags: [],
    },
    {
      name: "Story Recommendation",
      description: `
- A new small feature called "Story Recommendation" will be added to the game.
- This tab will be shown in the Story page and will show you story recommendations, such as which story to read next.

![Image showing story recommendations on the story screen](https://static.miraheze.org/projectsekaiwiki/thumb/c/c7/Update_Notes_2.6.0_5.png/1000px-Update_Notes_2.6.0_5.png)
      `,
      tags: [],
    },
    {
      name: "Reward for reading past events.",
      description: `
- Up until now, you will only be able to receive Crystals from event stories when you read the stories DURING the event.
- After the update, you will now receive 50 Crystals for reading an event story fully, IF you have not read **EVEN A SINGLE CHAPTER** of the event story when the related event was being held.
- If you have read the event stories before when the events were being held, most likely you will NOT receive the 50 extra Crystals.
- A small "SKIP" icon will be displayed on chapters you have skipped / fast-forwarded.
- Please note that if you close the game while reading a chapter of an event story, you will be considered skipping the chapter.
- You will also be considered skipping when you read a chapter starting from a part you have bookmarked.
- In addition, if you have met the above criteria AND have read the event stories fully without skipping/fast-forwarding before, you will receive 50 Crystals at a later date.

![Image of an event screen showing the reward and SKIP icon](https://static.miraheze.org/projectsekaiwiki/thumb/9/98/Update_Notes_2.6.0_6.png/1000px-Update_Notes_2.6.0_6.png)
      `,
      tags: ["crystals", "event story", "50 crystals", "story"],
    },
    {
      name: "Story Page Changes",
      description: `
- "Story Summary" will be added. You will be able to read each event story's synopsis, as well as all the characters featured in each story.
- Change to how event banners are shown in the "Unit" tab: Up until now, if a character appeared in an event, even for just a little, the story will still be featured in that unit's event story tab. After the update, this will be changed and only the featured unit's focus events will be shown in that unit's story tab.
- Changes to how characters are shown in the featured characters list:
  - If a dialogue is said by more than one person, the characters who said that line will not be shown in the featured characters list. 
  - Even if a character only appears in a flashback scene, they will be shown in the featured characters list.
- "Key Stories" and "Bookmarked Stories" will be added to the sorting option.
- The display order of event story banners can now be switched between "ascending" and "descending" order.
- Improved the scrolling function in the Event Story page.

![Image showing a story summary](https://static.miraheze.org/projectsekaiwiki/thumb/a/a9/Update_Notes_2.6.0_7.png/1000px-Update_Notes_2.6.0_7.png)
      `,
      tags: ["event story", "unit focus", "unit story", "event sorting"],
    },
    {
      name: "Main Story Requirement (Unit Rank) Removal",
      description: `
- In order to allow new players to immediately read and enjoy each unit's Main Stories without stopping midway, all of them will now be unlocked without having to level up each unit's Rank.
- In addition, as the VIRTUAL SINGER main stories follow the progress of each unit, the requirement to unlock their stories will not be changed.
      `,
      tags: ["unit rank", "main story", "unlocked"],
    },
    {
      name: "All Perfects Displayed in Profile",
      description: `
- In custom profiles, the componant which shows Songs Cleared and Full Combo'd will be modified to include All Perfects.
- It will change to have three tabs for each, which show the number of songs Cleared/FC'd/AP'd on each difficulty.
      `,
      tags: ["custom profile"],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 2, 30),
    [Server.en]: new Date(2024, 2, 28, 11, 30)
  },
};

export default v2_6_0;
