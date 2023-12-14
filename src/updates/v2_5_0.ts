import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v2_5_0: UpdateType = {
  version: "2.5.0",
  description: "",
  features: [
    {
      name: "Disk Shop & Theater",
      description: `
      - 2 new features, "Disk Shop" and "Theater" are now available in the Virtual Live Lobby, near the Mini Live (2DMV showcase) stage.
      - Disk Shop lets you buy past special Virtual Lives, such as Birthday/Anniversary Lives, Seasonal Lives, and also past Connect Lives.
      - Theater lets you watch these past Virtual/Connect Lives.
      
      The price of the currently available disks in the Disk Shop are as follows:
      
      ## Connect Live - Vivid BAD SQUAD 1st: CRASH
      - All performance (3 in total): 5000 PAID Crystals
      - 1 performance: 2000 PAID Crystals 
      ## Virtual Lives
      - 1st Anniversary Special Live: 1000 Crystals
      - Birthday / Anniversary Lives: 300 Crystals per Virtual Live
      - Seasonal Lives: 300 Crystals per Virtual Live
      - Welcome Lives: 100 Crystals per Virtual Live

      # NOTES:
      - Seasonal Lives: Halloween, Christmas, Countdown, New Year's, Valentine's Day, White Day, Tanabata
      - In the future, prices of similar type of Lives may vary depending on the content of the live.
      - Watching past Virtual Lives will reward you with the corresponding special Titles (if you've never gotten them). You will also be given Fragments of Feelings (S) when using items during the Lives.
      - However, you will NOT receive other rewards such as Crystals, streamer from Connect Lives, or another Vocal Cards.
      - Other Virtual Lives are expected to be added to the Disk Shop approximately 3 months after the corresponding lives/events has ended.
      - Connect Lives take longer time to archive, so they will be added to the Disk Shop irregularly.
      - Any problems/glitches/error that happened during the Lives may be fixed or edited in the archives.
      - Connect Live Performances that are deemed to difficult to archived (due to technical difficulties etc.) may not be added to the Disk Shop.

      ![Image of disk shop](https://static.miraheze.org/projectsekaiwiki/thumb/0/0f/Update_Notes_2.5.0_2.png/1000px-Update_Notes_2.5.0_2.png)

      ![Image of Crash connect live in the theater](https://static.miraheze.org/projectsekaiwiki/thumb/7/76/Update_Notes_2.5.0_1.png/1000px-Update_Notes_2.5.0_1.png)
      `,
      tags: [
        "theatre",
        "virtual live",
        "virtual show",
        "vlive",
        "replay",
        "connect live",
        "disc",
      ],
      date: {
        [Server.tw]: null,
        [Server.en]: new Date(2023, 8, 10),
        [Server.kr]: null,
      },
    },
    {
      name: "Colorful Pass Upgrade & Renewal",
      description: `
      - Colorful Pass has now been renewed. The new Colorful Pass is now split into 3 types: BASIC, DELUXE, PRECIOUS.
      - Colorful Pass: BASIC will be similar to the old Colorful Pass, with additional benefits.
      - You can only buy 1 type of Colorful Pass per month. Once you've made a purchase, the other Colorful Pass types you didn't buy will be locked until the current Colorful Pass you have expires.
      # Passes
      ## Colorful Pass: BASIC - 480 Yen / month
      - Paid Crystals (upon purchase) x440
      - Daily (Free) Crystals x25 (for 30 days)
      - FREE x1 pull in Colorful Pass Gacha per WEEK
      - Daily paid Solo Pull x2
      - Doubled Challenge Points
      - Doubled Live Points
      ## Colorful Pass: DELUXE - 1500 Yen / month
      - Paid Crystals (upon purchase) x1,380
      - Daily (Free) Crystals x50 (for 30 days)
      - FREE x1 pull in Colorful Pass Gacha per WEEK
      - Daily paid Solo Pull x2
      - Doubled Challenge Points
      - Doubled Live Points
      - Max Live Bonus Energy: 10 --> 20
      - Priority Pass for IRL event lotteries (after 6 months of purchase)
      ## Colorful Pass: PRECIOUS - 3000 Yen / month
      - Paid Crystals (upon purchase) x2,760
      - Daily (Free) Crystals x100 (for 30 days)
      - FREE x1 pull in Colorful Pass Gacha per WEEK
      - FREE x1 pull in ongoing EVENT GACHAS per DAY
      - Daily paid Solo Pull x2
      - Doubled Challenge Points
      - Doubled Live Points
      - Max Live Bonus Energy: 10 --> 20
      - Auto Lives: 10 per day --> 99 per day
      - Priority Pass for IRL event lotteries (after 6 months of purchase)
      # NOTES
      - With the renewal of the Colorful Pass, sales of the old Colorful Pass will be discontinued.
      - If you purchase any of the new Colorful Pass, you will receive 1000 Crystals as first-time purchase bonus. The amount of first-time purchase bonus will be the same for all Colorful Passes, and when you buy a different pass the next month, you will NOT receive this bonus again.
      - If you still have the old Colorful Pass active after the update, you will still receive the Daily Crystals bonus from the old Colorful Pass, however, if you buy the new Colorful Pass while having an active old Colorful Pass, benefits such as "Daily x2 Paid Solo", "Doubled Challenge Pts", and "Doubled Live Pts" will not be stacked.

      ![Image of the new colorful pass in the shop](https://static.miraheze.org/projectsekaiwiki/thumb/5/57/Update_Notes_2.5.0_3.png/1000px-Update_Notes_2.5.0_3.png)

      # Benefits Details
      ## Daily (Free) Crystals
      - Now, even when you don't / can't log in to the game, you will still receive the Daily Crystals from any of the Colorful Pass.
      ## Colorful Pass Gacha
      - Colorful Pass Gacha is a WEEKLY gacha that you can pull in for FREE if you've purchased any of the Colorful Pass types.
      - This gacha is a 3* guaranteed OR ABOVE gacha, meaning you can only pull 3* or 4* in this gacha (excluding limited members).
      - Members lineup will be those who appeared approximately one year prior to the month in which the corresponding events were held.
      ## Max Live Bonus
      - When you buy Colorful Pass: DELUXE/PRECIOUS, your max Live Bonus will be increased from 10 to 20.
      - However, the amount of Live Bonus you recover when ranking up your Player Rank will NOT change.
      - After your Colorful Pass: DELUXE/PRECIOUS expires, your max Live Bonus will return to normal (10), however, the amount of Live Bonus you have right before the Pass has expired will be retained.
      ## IRL Events Lotteries Priority Pass
      - When you buy Colorful Pass: DELUXE or PRECIOUS continuously for more than 6 months, you will be able to apply for priority place in the ticket lottery sales for IRL events. (such as live concerts, stage events, exhibitions, etc.)
      - Please do note that the number of continuous months required may change from event to event.
      - During the "Eligibility Evaluation Period" when applying for priority place in the ticket lottery sales, the specified number of consecutive months must have been reached.
      - This benefit also has a 10-day grace period after the validity period ends. If you buy a Colorful Pass again within the grace period, it'll be considered a new continuous purchase.
      - The length of your continuous purchase, as well as the type of Colorful Pass you have purchased will not affect your chances in the lottery.
      ## Free Daily Solo Pull in Event Gachas
      - When you buy Colorful Pass: PRECIOUS, you will be able to do one free daily pull in an ongoing event gacha every day, up until your Colorful Pass expires.
      - However, doing this free daily solo pull will NOT give you Gacha Bonus or Gacha Seals.
      - When available, the free daily solo pull button will replace the "daily paid solo pull" button.
      - If there are more than one event gachas ongoing or when an event gacha has been replaced with a new event gacha, you can only pull in ONE of them during that day.
      - You can't pull in gachas such as Select List Gacha, Birthday/Anniversary Gachas, Reprint Gachas, or any other Paid Gachas.
      ## Daily Auto Lives
      - When you buy Colorful Pass: PRECIOUS, the number of Auto Lives you can do per day will change from 10 to 99.
      - In addition, to reduce the weight on your device, when using Auto Lives continuously, the game will be put into "lightweight mode."
      - Please do note that depending on the device, if your device doesn't meet the requirement needed for the game, errors or crashing may happened due to heavy load on your device, which will also forcefully end the Auto Lives.

      ![Image of the weekly colorful pass gacha](https://static.miraheze.org/projectsekaiwiki/thumb/8/81/Update_Notes_2.5.0_5.png/1000px-Update_Notes_2.5.0_5.png)
      `,
      tags: ["colorful+", "colorful plus", "colourful+"],
      date: {
        [Server.tw]: null,
        [Server.en]: new Date(2023, 10, 29),
        [Server.kr]: null,
      },
    },
    {
      name: "Song Selection Screen Updates",
      description: `
      - The producer(s) for each song will now be shown in the Song Selection screen instead of just during the start of a Live.
      - A button called "Original Song" has also been placed in the top right of a song's cover art (see example pic). This button will open up a link to the original song uploads.
      - The "Original Song" button may not be available for some songs, or may be added at a later date.
      - Tapping on the "Original Song" button will automatically open up the video site on your device's browser or video streaming app (YouTube).

      ![Image of the updated song select screen](https://static.miraheze.org/projectsekaiwiki/thumb/7/7f/Update_Notes_2.5.0_7.png/1000px-Update_Notes_2.5.0_7.png)
      `,
      tags: ["song list", "producers name", "producer name"],
      date: null,
    },
    {
      name: "Limited Costume Sales Updates",
      description: `
      - From now on, limited costumes that are sold in Limited Costume Shop (through Crystal Shop) will be shown as a set instead of separately based on the colors. When tapping on a limited costume icon/button, you will be then shown the color sets you can buy (or buy all colors as a set).
      - The addition time for the limited costume sets to be available in the Limited Costume Shop will also be changed from 2 years after its first addition to the game, to 1 year after its first addition to the game.

      ![Image showing buying a costume in the updated shop](https://static.miraheze.org/projectsekaiwiki/thumb/3/3d/Update_Notes_2.5.0_8.png/1000px-Update_Notes_2.5.0_8.png)
      `,
      tags: ["costume", "shop"],
      date: null,
    },
    {
      name: "Other Updates and Changes",
      description: `
      - List of characters that appear in a card's Side Stories will now be shown even after you've unlocked that card's Side Stories.
      - You can now take screenshots in Virtual Live while having the Ul hidden.
      - The mission "Read 100 chapters of Main Stories and/or Side Stories without using the Skip button" is changed to "Read 100 chapters of Main Stories and/or Side Stories without using the Skip button and/or the Fast-Forward button". This change is due to the intention of the mission, that is to have players read the stories carefully and properly. Using the Fast-Forward button will defeat the purpose of the mission, just like using the Skip button.
      - Fixed the audio discrepancies in some songs: Greenlights Serenade, Roku-chou Nen to Ichiya Monogatari, Lost One no Goukoku, Lower, Goodbye. Other songs that have been confirmed to have similar problems will be addressed in due course.
      `,
      tags: [
        "side story",
        "virutal live screenshot",
        "story",
        "fast foward",
        "audio",
      ],
      date: null,
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 1, 21),
    [Server.tw]: null,
    [Server.en]: null,
    [Server.kr]: null,
  },
};

export default v2_5_0;
