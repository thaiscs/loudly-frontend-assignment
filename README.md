# Development Flow

- setup environment by installing creat-react-app
- had an issue with react not providing Templates
- uninstalled the global installation there was on my computer, cleared npm cache, but it didn't solve it
- found a solution that worked by using [npx --ignore-existing create-react-app] probably because of an older version I still had on my computer
- installed Flow.js for typing as the community said it was lightweight and more flexible than Typescript
- went through Flow.js documentation to understand how it worked with react
- however, as I've never coded with it before, decided to prioritize getting an MVP running instead
- an MVP, in my understanding, meant building a Music Player with audio funcionality, the ability to like the song plus a nice interactive UI

# Retrospective

- setting up tests, ideally before even starting to develop a feature, is a practice I've been aiming to get acquainted with. In this case, as the requirements were losely defined, I decided to play around first to find the best architecture for data management and UI.
- but I think it'd be an interesting process to create test cases based on what I have to back trace back what I've built [will continue working on it as a side project :)].
- getting used to coding with Types is also one of my main goals for the near future as it assists catching errors early on while also triggering a deeper understanding of the application itself.
- there seem to be an issue with your endpoint to post the likes as cors policy blocked the request for containing an api-key in preflight response and when api-key is removed from the header, response returns 401 as non valid credentials.
