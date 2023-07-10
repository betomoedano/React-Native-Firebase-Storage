## React-Native-Firebase-Storage

Check this video [Uploading videos and images to Firebase Storage](https://codewithbeto.dev/projects/firebase-storage) using the blur effect.

```
 git clone https://github.com/betomoedano/React-Native-Firebase-Storage.git
```

```
 cd React-Native-Firebase-Storage
```

```
yarn install
```

```
yarn start
```

## Known issues

Expo SDK and libreries are always updating their versions and deprecating others. So, you have to work to work with compatible dependencies. So, before installing the libreries run.

```
    yarn add expo@latest
```

Next you can run:

```
    npx expo install  --fix
```

Expo will show you what dependencies need to be updated. Install the dependencies expo suggested you. It is possible that there is cache and you have to run.

```
    yarn start --reset-cache
```

if you did this thing and it didn't run. Delete node_modules and yarn.lock and run

```
    yarn install
```
