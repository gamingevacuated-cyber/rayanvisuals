## Summary
Text/link edits and thumbnail reliability fixes across Contact, Portfolio, and About sections.

## Contact (`src/components/portfolio/Contact.tsx`)
1. **Discord** — keep the ID visible, replace the "Copy Discord ID" button with an **"Open Discord" link button** that opens `https://discord.com/users/979589726250074152` in a new tab.
2. **Remove the "Direct hire" card** entirely (including "Hire Me Now" button).
3. **"Find me online"** — replace the 4-icon grid with a single **YouTube** link to `https://www.youtube.com/@nanexaep`.

## Portfolio titles & categories (`src/data/portfolio.ts`)
| ID | New title | Category |
|---|---|---|
| p1 | Alfie — Long Form Horror | Long Form |
| p2 | Motion Graphics Preview | Shorts |
| p3 | Cinematic Ronaldo Edit | Shorts |
| p4 | *(no change)* | Shorts |
| p5 | Cheezie — Short Form Meme Preview | Shorts |
| p6 | Telanthric — Gaming Long Form | Gaming |
| p7 | Telanthric — YouTube Long Form | Long Form |
| p8 | Telanthric — Featured Commentary | YouTube |

## Thumbnail fix (`src/data/portfolio.ts` + `Portfolio.tsx`)
Add an `onError` image handler in `Portfolio.tsx` so that if `maxresdefault.jpg` 404s it auto-falls back to `hqdefault.jpg`. Also update p6–p8 descriptions to mention Telanthric explicitly.

## About (`src/components/portfolio/About.tsx`)
Remove the Rayan profile picture card entirely — keep the text bio, expertise list, and goal quote. Remove the `rayan.jpg.asset.json` import.

## Out of scope
No visual style, layout, or animation changes.