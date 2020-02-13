# Tic Tac Toe
This is a Tic Tac Toe game played against a computer. The computer has two different difficulties, easy and hard. Easy is just a naive player that picks randomly. Hard is unbeatable and uses the [minimax](https://en.wikipedia.org/wiki/Minimax) algorithm to find the best worst possible outcome. Meaning it will play defensively if it sees a possible loss before a possible win. The algorithm recursively tries every possible choice and scores each decision tree once it terminates. Scoring favors blocking a humans win over it's own victory. Scoring also is weighted toward the fast possible victory.

## Structure
```
./src
├── App                     # Loads the game and is essentially a container
├── components              # React Components
    ├── Game                # Handles game state, turns, etc
    ├── Board               # Displays board, spaces, and allows users to click
    ├── Tile                # Makes up the tiles of the board
    ├── Announcements       # Displays win, loss, and draw info
    ├── Options             # Displays game options
├── utils                   # Non React helper functions
    ├── computer            # Functions to make the computer work
    ├── helpers             # Miscellaneous functions that don't belong anywhere else
    ├── scoring             # Functions to handle scoring and checking for wins
    ├── types               # Any miscellaneous types I might need
```
