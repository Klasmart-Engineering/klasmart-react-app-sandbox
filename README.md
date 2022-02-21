# KidsLoop React App Sandbox

This app currently tests the [KidsLoop Audio Player](https://bitbucket.org/calmisland/kidsloop-audio-player) which uses the [KidsLoop Audio Service](https://bitbucket.org/calmisland/kidsloop-audio-service).

## Local Development

In package.json, change proxy to be the base address of the KidsLoop Audio Service.
For example, if you have the audio service running locally at `http://localhost:8080/audio-storage/graphql`,
change proxy to `http://localhost:8080/`. Or if you're trying to test alpha environment, set it to
`https://api.alpha.kidsloop.net/`.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
