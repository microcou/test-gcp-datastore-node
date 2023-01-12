# Node - GCP datastore

Test the GCP Datastore with node. It is now called «Firestore in Datastore mode».  
It is straightforward to use but the access to auto generated id is weird.

## Docs

- quickstart and code snippets: https://cloud.google.com/datastore/docs/how-to
- the reference: https://cloud.google.com/nodejs/docs/reference/datastore/latest
- a good comparison of the Native vs Datastore modes on SO: https://stackoverflow.com/questions/51805687/does-firestore-in-datastore-mode-have-any-advantages-native-mode

## Run locally

Start the datastore emulator:

```
gcloud beta emulators datastore start --data-dir .
```

Set the env variables needed to connect to the emulator:

```
gcloud beta emulators datastore env-init --data-dir .
# Then copy/paste to set the env variables
```

Build the server:

```
npm run bw
```

Start the server:

```
npm run s
```
