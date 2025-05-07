# Draft Queue

A Fantasy Draft Front-End.

# Setup Workflow

Uploads from Ottoneu and Fangraphs are generally in csv format

An Ottoneu rosters export is about a 60kb

The Ottoneu player universe is about 620kb (about 10,000 players)

Fangraphs Steamer Projections, Batters and Pitchers are each about 2 MB (~ 4,000 to ~5,000 players)

# Library Choices

For grid presentation

https://www.npmjs.com/package/ag-grid-community 
https://www.npmjs.com/package/react-table

For data fetching and caching

https://redux-toolkit.js.org/tutorials/rtk-query

