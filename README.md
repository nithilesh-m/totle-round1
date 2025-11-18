# Topic Retrieval API
This is a simple Node.js + Express API that simulates a catalogue lookup 
similar to TOTLE’s /api/catalogue/ endpoint. The API lets you search through 
a set of pre-defined topics stored in a JSON file.

--- Install node modules using command : npm install and then run npm start to start the server

# Features
- GET /api/topics?search=<query>
- Case-insensitive search
- Optional sorting using ?sort=name
- Error handling for invalid queries or file issues
- Clean folder structure and readable code

---

## Project Structure

topic-retrieval-api/
│
├── server.js
├── package.json
├── README.md
│
├── data/
│   └── topics.json
│
└── routes/
    └── topics.js

---
GitHub Repo: https://github.com/nithilesh-m/totle-round1
