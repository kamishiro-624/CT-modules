# HousingQOL
A Hypixel Housing module with (eventually) tons of QOL features. Updating semi-regularly. Any and all contributions are welcome and recommended.
This module is still in development, so please report any bugs in the issues section of the GitHub. **Star and/or watch this project** to show your support and be notified of the latest updates!

## Feature List
- Color Code References [/colorcodes, /cc]
- Hide the "Unable to locate sign at..." error message
- Command Aliases
- View Variable Values [/viewvariable, /vv]
  - /vv &lt;scope&gt; &lt;player&gt;
- Sound Logger
- Hide asterisks from incoming housing messages
- Safe Creative - Block list [here](util/scBlockArrays.js).
  - [BLOCK]:[METADATA], ... (eg. Dirt, Grass Block, Wool:3, Stone:A)
  - [BLOCK]:A will filter all blocks in that metadata group.
- Chat Utilities
  - Teleport To Player
  - Copy Chat Message
    - Copy with formatting tags
  - Display formatting tags in chat (Previews all &. tags in the chat)
  - Will add more next commit!
- Coming soon...

## How to Configure and Use
Run `/housingqol` or `/hqol` in-game to open the configuration GUI. Features in the feature list with commands next to them will not be present here, run the command to activate them.

## Command Aliases
| Hypixel | HousingQOL |
| --- | --- |
| /h kick &lt;player&gt; | /hk &lt;player1&gt; &lt;player2&gt; ... |
| /h ban &lt;player&gt; | /hb &lt;player1&gt; &lt;player2&gt; ... |
| /h mute &lt;player&gt; | /hm &lt;player1&gt; &lt;player2&gt; ... |
| /h unban &lt;player&gt; | /hunban &lt;player1&gt; &lt;player2&gt; ... |
| /h unmute &lt;player&gt; | /hunmute &lt;player1&gt; &lt;player2&gt; ... |
| /testplaceholder &lt;message&gt; | /tph &lt;message/&gt; |
| /parkour reset | /pkr |
| /parkour checkpoint | /pkc |

## AI Usage
No generative AI was used on this project. All code was written by hand!!!

This module is provided "as is" without warranty of any kind, express or implied. 
The creator, _kamishiro, is not responsible for any bans, mutes, profile wipes, or data loss 
resulting from the use or misuse of this module on any server (including Hypixel). 
Use entirely at your own risk.
