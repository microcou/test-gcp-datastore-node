# Test GCP datastore

## Docs

- https://cloud.google.com/datastore/docs/how-to
- https://cloud.google.com/nodejs/docs/reference/datastore/latest

## Run locally

Start the datastore emulator:

```
$ gcloud beta emulators datastore start --data-dir .
```

Set the env variables needed to connect to the emulator:

```
$ gcloud beta emulators datastore env-init --data-dir .
# Then copy/paste to set the env variables
```

Build the server:

```
npm run bw
```

Start the server:

```
$ npm run s
```
