import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_0_0: UpdateType = {
  version: "5.0.0",
  description: "",
  features: [
    {
      name: "MySekai",
      description: `
# what;What is MySekai?
"MySekai" is a mode that allows you to create your own SEKAI by collecting various materials, crafting furniture, and decorating. You can access MySekai from the home screen.

![A house with a decorations around, and a garden with an avatar sitting on a bench](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_lljkakdn.jpg)

# gameplay;Basic Gameplay

![Three images showcasing material collection, furniture crafting, and decorating](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_lnuhqq.jpg)

## materials;Collecting Materials

Materials can we collected in the "Gathering Area" of MySekai.

Different matierals will be collected depending on what you gather. Some materials are only available or have a boosted appearance rate in certain "Gathering Areas" or "Weather".

In addition to MySekai materials, you can also earn Player Rank EXP, Show Points, Event Points, and Event Badges by gathering.

"Stamina" is consumed when gathering. There are two types of stamina:
- Normal Stamina, which is filled at 5:00.
- Boost Stamina, which can be recovered by consuming Bonus Energy, Bonus Energy Drink, or Crystals.
  - Boost stamina increases the gathering speed and the rewards you can earn.

![Image of an avatar mining some rocks](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_mnvmzm.png)

## crafting;Crafting Furniture

Furniture can be crafted on a "Working Table" by using collected materials and the furniture's blueprint. A furniture's blueprint can be used any numbers of times.

Furniture blueprints can be obtained from "treasure chests" and "transforming machines" that appear once a day in the gathering area.

A working table will be given during the tutorial.

![The working table UI, showing the items the user can craft, and color variations for a table](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_jbczjz.png)

## placing;Furniture Placement

Depending on the purpose, size, and where it can be placed, furniture is devided into the following categories: General, Small Items, Wall Hangings, Goods, Canvas, Plush Toys, Walls, Floors, Rugs, Houses, Paths, Fences, and Plants

There are many different types of furniture, including home appliances, ornaments, and houseplants, so why not collect as many as you can and try to create your ideal layout?

# character;Characters

## gates;Gates and Character Interactions

There's a gate for each of the five units. Two to five characters from the corrosponding units will come to play twice a day.

![Each of the five unit gates with the unit representative in front of it. As well as the Nightcord at 25:00 gate with all four members and Miku in front of it.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_nsnan.jpg)

The visiting characters will change every day at 5:00 and 17:00 (5pm)

The characters who come to play will react in various ways to the weather and furniture installed in your MySekai.

The virtual singers that appear in MySekai are the virtual singers that appeared in each Sekai initially.

Once you change the gate to another unit, you won't be able to change it for 24 hours.

![Characters interacting with furniture.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_pkoakn.jpg)

## memoria;Character Memoria

By talking to a visiting character you can recieve one "Memoria" of that character once a day (resets at 5:00).

Memoria are special materials needed to create furniture realated to the character and level up the gate.

You cannot recieve memoria from a character immediately after changing gates.

![Ichika talking to an avatar resulting in gaining an Ichika Memoria](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_njanjab.jpg)

## gatelevel;Gate Level Up and Talent Bonus

Gates have levels and can be leveled up using materials. Leveling a gate does the following:
- Increases the chance of more people coming to play at once.
- Increases the gate's talent bonus, whihc increases the talent of unit member cards.
  - For virtual singers cards with sub-units the talent bonus value of the target unit is applied.
  - For virtual singer cards without sub-units the talent bonus value of the gate with the highest level out of all units is applied.

![Leo/need Miku coming out of a gate with Ichika standing outside](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_qwrsfa.jpg)

# photo;Photo Mode

In MySekai, you can take photos using Photo Mode. You can switch between taking a regular photo, or a selfie.

Photos you take are saved in your MySekai album and can be used later or displayed with the Photo Frame furniture.

To take photos you will need Photo Film, which can be gained from the Transform Machine.

Photos are different from screenshot functions such as the one in Virtual Shows, and are not saved as images on your device.

![Haruka and Shizuku being photograhped in Photo Mode, and that same picture in the MySekai album](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_mxcnano.jpg)

# specialfurniture;Furniture with Special Functions

Some pieces of furniture have special functions that can be used.

## recordplayer;Record Player (Background Music)

The Record Player allows you to set the background music for your home to music that appears as playable songs, in event BGMs, and in stories.

To set a song you'll need to obtain the record for it, which can be obtained in treasure chests in the gathering area.

To be able to obtain a record you'll need to own the song from the Gift Box or Music Shop.

![Record Player UI, showing Tell Your World being selected as background msuic.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_uqheqb.jpg)

## transformation;Transformation Machine (Material Transformation)

The Transformation Machine allows for the transformation of various surplus items into other items. Including items from MySekai and items from the rhythm game.

Blueprint Scraps collected in MySekai and from duplicate blueprints can be transformed to raindomly obtain different Furniture Blueprints.

Transforming materials requires Coins and takes a certain amount of time, which can be sped up using Crystals..

The Transformation Machine has levels, which can be increased by clearing MySekai missions. Higher levels increases the number of items that can be transformed.

List of available transformations, not including transformations for MySekai items.

Level 1 Transformations:
- 100 Wish Stones, 3 Sparkling Quartz, 1000 Coins -> 15 Wish Pieces
- 3 Batteries, 1000 Coins -> 3 Bonus Energy Drinks S
- 2000 Charms, 1000 Coins -> 100 Gems
- 100 Magic Cloth, 10000 Coins -> 10 Magic Thread
- 10 Magic Thread, 10000 Coins -> 10 Magic Cloth
- 500 Practice Score (Beginner), 10000 Coins -> 10 Practice Score (Intermediate)

Level 2 Transformations:
- 100 Gems of all attributes, 5000 Coins -> 10 Miracle Gems
- 10 Miracle Gems, 5000 Coins -> 100 Gems of all attributes
- 200 Music Cards, 3 Stamp Vouchers, 500000 Coins -> 2 Cover Card Vouchers

Limited Time Transformations:
- 30 Practice Score (Intermediate), 200 Miracle Gems, 100000 Coins -> 1 Skill-up Score (Intermediate)

This will be available for a limited time from January 10th to the 17th at 23:59 to celebrate the release, future availiblity will be irregular.

![The UI for the Transformation Machine, showing an in progress transformation of Attribute Gems to Miracle Gems. As well as the recipe for a random Blueprint](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_ganjanj.jpg)

## pc;PC (Secret Shop)

Using the PC, if you have the World Pass, you can access the "Secret Shop" where you can purchase Furniture Blueprints for Crystals.

Some slots will change daily, some will change weekly. Furniture blueprint you don't own are guarenteed to appear.

![The PC and its UI, showing daily Furniture Blueprints for sale.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_nbcnmz.jpg)

## display;Display (Memorabilia)

Items such as titles, song record covers, photos from your MySekai album, penlights, and memorabilia can be displayed as furniture by combining them with display items, such as stands and boards.

Some items may not be able to be displayed

Types of display that can be used depends on what items are being displayed

![A display stand and board featuring memorabilia items.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_uyuwyu.jpg)

## canvas;Canvas (Card Display, Talent Bonus)

The Canvas allows you to paint and display a card you own on a canvas, to create a canvas you will need one memoria of the charcter.

The first time you paint a card on a canvas, it will have its Talent increased permanently. The talent increases for each rarity are:
- 4 Star: 1500
- Birthday: 1200
- 3 Star: 900
- 2 Star: 600
- 1 Star: 300

The number of memoria required to make a canvas is the same regardless of the type or size of the canvas, or the rarity of the card.

![Showcase of the creation of a Canvas](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_iuyqhnn.jpg)

## plushies;Character Plushies (Talent Bonus)

Creating a plushie of a character requires memoria as a material. The character will recieve a talent bonus, like the area decoration bonuses.

Memoria required and talent bonus given depend on the size of the Plushie.
- S: +0.1%
- M: +0.3%
- L: +0.6%

Talent bonus is only gained when crafting each size of plushie of a character for the time. So if you create multiple plushies of the same size for the same character the effects will not stack.

Talent bonus will not occur when creating plushies without memoria.

Plushies in the initial release will be the default costume (before promotion/3rd anniversary) series.

Blueprints are obtained:
- S: from the tutorial
- M: randomly in the gathering area
- L: randomly in the secret shop

![Rin, Miku, and Luka plushies, each in ascending size](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_adjjka.jpg)

# missions;MySekai Missions

MySekai Missions will be abailable, where you can earn rewards by completing various actions in MySekai.

You can earn rewards such as:
- The special interaction furniture
- Limited Show Costumes
- Limited Virtual Show Avatars
- Increased furniture and material maximum counts.
- 4000+ Crystals.

![The rewards from the MySekai missions, including Rin and Len in an exclusive outfit.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_iyoyiqh.jpg)

# rank;MySekai Rank

MySekai Rank indicates the growth of that Sekai. By increasing MySekai Rank you can unlock and expand various functions of MySekai.

You can increase your MySekai Rank by earning MySekai Rank EXP by crafting furniture you don't own and clearing MySekai Missions.

Rank Rewards:
- Rank 2: Unlocks more of the Gathering Area
- Rank 3: Expands rooms size, increases amount of furniture that can be placed.
- Rank 4: Unlocks more of the Gathering Area
- Rank 5: Unlocks more of the Gathering Area
- Rank 6: Expands rooms size, increases amount of furniture that can be placed.
- Rank 7: Expands garden size, increases the amount of furniture that can be placed.
- Rank 8: Increases the number of rooms, increases the amount of furniture that can be placed.
- Rank 9: Expands garden size, increases the amount of furniture that can be placed.
- Rank 10: Increases the number of rooms, increases the amount of furniture that can be placed.

Rank 2 is reached during the tutorial. In the initial release, rank 10 is the max rank.

![Showcase of MySekai level increasing, and the rewards that can be obtained](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_puuoha.jpg)

# visiting;Visiting other MySekais

Through the gate or the visit MySekai button on a player's profile, you can visit other player's MySekais from your friends list or through Player ID. You can also visit a random player's MySekai or an uninhabited MySekai based on one of six themes.

You can change MySekai visit settings from MySekai > MySekai Settings > Options to accept "Anyone", "Friend Only", or "Reject". By selecting "Reject" your MySekai will be private.

You can visit player's MySekai even if they're offline.

The Sightseeing feature that can be viewed in the visiting screen will not be unlocked in the initial release. Please wait for further information.

![Showcase of visiting another MySekai, featuring three avatars in a garden](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_iyirqih.jpg)

## sketch;Sketch

In other player's MySekais, you'll able able to Sketch to acquire blueprints for furniture you don't own. To Sketch you need a Blank Blueprint.

Some furniture can't be sketched.

# notice;Notice

It's recommended to have a stable connection and use a device that meets the recommended specifications.

# future;Future Updates

- Addition of 3 character rank missions for MySekai:
  - Create X types of furniture with this character's tag.
  - Create X types of canvases with this character's cards.
  - Create furniture in MySekai that creates conversations with this character and watch X kinds of them.
- Rerun of previous memorabilia collection boxes.
  - Since memorabilia items can now be used with display furniture, Connect Show collection boxes will be reran.

We also plan to add various other content. Please stay tuned for further information on future updates to My World.
`,
      tags: [],
    },
    {
      name: "World Pass + MySekai Mission Pass",
      description: `
# worldpass;World Pass (￥1500)

The World Pass will unlock various MySekai functions for 30 days after purchase.

## worldpasscontents;Contents

- 1380 Paid Crystals
- Gate "Invitation" function.
  - At the MySekai gate you can invite specific characters to come play in MySekai every day.
  - After slecting a character, won't be able to change the selected character for three days.
  - The invitation function will be hidden if you haven't purchased the World Pass.
- Stamina Enhancement
  - MySekai stamina, which recovers at 5:00 every day, will be enhanced to be Boost Stamina.
- Enhanced Transformation Machine
  - The number of transformation slots will increase from 1 to 3
  - Transformation time will be halved
  - Crystals required to shorten transformation time will also be halved
  - After the World Pass expires, the number of slots and time will return to normal, but transformations started during the World Pass will be kept until completed.
- Unlocking the Secret Shop
- Increases the number of furniture layout presets saved from 3 to 10.

![Preview of the World Pass features.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_yuhqjn.jpg)

# missionpass;MySekai Mission Pass

The MySekai Mission Pass will be introduced as a new Show Reward that is updated every month. You can earn various items such as MySekai furniture blueprints and tools.

## missioncontents;Contents

- Upon purchase:
  - 1850 Paid Crystals
  - 300 Wish Pieces
- From Pass (total):
  - The month's character plushie blueprint
  - 20 Seven-colored memoria
    - 1 Seven-colored memoria can be exchanged for 1 character memoria at the Wish Piece/Memoria exchange.
  - 2 Blank Blueprints
  - 1 Chainsaw
    - Collection Tool
  - 1 Jackhammer
    - Collection Tool
  - 700 Wish Pieces
  - 50 Bonus Energy Drink (L)

![Preview of the MySekai Mission Pass contents](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_eriohq.jpg)

## missionset;Set Discount

If you purchase the MySekai Mission Pass along with the Premium Mission Pass, the second pass will be 25% off.

This discount applies to the second pass, whether purchased simultaneously or separately. This discount is only valid for the month of purchase.

## missioncompensation;Compensation

All players will be directly given 100 Show Points upon logging in from 11:30 on January 10th to January 31st.

# note;Note

For details and precautions regarding these products, please check the in-game details at the time of sale.
`,
      tags: [],
    },
    {
      name: "Event Avatar Item Discontinuation",
      description: `
Starting with the event to be held from January 11th, events will no longer add items to the Virtual Avatar item shop.

Future sales of new items will be irregular.
`,
      tags: [],
    },
    {
      name: "New World Link Event Announcement",
      description: `
A small tree sprouts in the world that has expanded due to a change in feelings, and a "story that could have been" is depicted.

# schedule;Schedule

From April to September, World Link Events for each unit will be held in sequence, along with a new "Finale Chapter."

The Finale Chapter is a special "general chapter" that will be held after all chapters have concluded, and all characters will contribute to event bonus.

In the Finale Chapter, the rewards at the Event Exchange will be more generous, and new special rewards are planned for the top ranking winners.

- April: Vivid BAD SQUAD
- May: Wonderlands x Showtime
- June: Nightcord at 25:00
- July: Leo/need
- August: MORE MORE JUMP!
- September: Virtual Singer + Finale Chapter

![New World Link Schedule](https://pjsekai.sega.jp/master-data/image/news/news_thumb_310_twuwww.jpg)

# changes;Changes

- Support Unit Slots 12 -> 20
- Additional Support Unit Bonus from Unit Limited (World Link) cards.
  - Bonus only applies if the character also matches.
- High ranking titles for World Link chapters will give a bonus effect in the Finale Chapter.
  - The bonus effect will only be valid for this World Link rotation's finale chapter.

# otherevent;Adjustment to other event schedules

Due to the holding of the World Link events, adjustments will be able to the other events.
- January to March
  - One unit events and two mixed events will be held each month.
- April to September
  - There will be no mixed events.
`,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 0, 9),
  },
};

export default v5_0_0;
