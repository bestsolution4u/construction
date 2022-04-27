# construction-react Instructions

A short description of the project.

---

## How to run the App (locally)
1. Install Nodejs if you don't have it already
2. Install reactNative and dependencies from [ReactNative Website](https://facebook.github.io/react-native/docs/getting-started.html) (Building Projects with Native Code).
3. Install The React Native CLI `npm install -g react-native-cli` (use `$sudo` if needed).
4. Switch to `dev` repository `git checkout dev`.
5. Install Dependency `npm i` or `yarn install`.

    5.1. If you dont have yarn, install it from [Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable) (Choose the corresponding OS).
    
    5.2. `cd ios` in order to install the iOS Pods with `$pod install`.
   
6. Do Dependency Linking with native code base `react-native link`.
7. Start the app `react-native run-ios` or `react-native run-android`.
    
    7.1. If it is giving you errors you might want to open Xcode and accept a few things.
    
---

### How to Run App Xcode

1. Do all previous steps(1-5)
2. Switch to `dev` repository.
3. Install Dependency `npm i` on root.
4. Do Dependency Linking with native code base `react-native link`.
5. Start the app `react-native run-ios` or `react-native run-android`.

#### Before running/building on Xcode

1. Do all previous steps(1-5) within the `/ios` folder.
2. Open repo/ios/Pin.xcodeproj.
3. Clean and build the project (Product -> Clean and Build Folder).
4. Select a device to run application.
5. Just run build.

Note: If you receive error such as in Xcode
  -->  "#import <React/RCTRootContentView.h> not found"
  in file RNGestureHandlerManager.m than replace the line with
  --> #import "RCTRootContentView.h"

### How to Run App on Android

1. Do all previous steps(1-5)
2. Open android project in Android studio and wait for the project to sync completely.
3. Update Android gradle plugin if Android Studio prompts.
4. Go back to react native project.
4. Install Dependency `jetifier` from [Install Jetifier](https://www.npmjs.com/package/jetifier).
5. Run command on root `npx jetify`.
7. Start the app `yarn android`.

---


## Credentials

#### Demo Login User

```
you can write any user name  and password to login as user
(this is just for now , without backend)
```

#### Demo Login Admin

```
username : 'Admin' or 'admin'
password : you can write any password up to 4 characters 

```

## Tests
* WRITE HERE HOW TO DO UNIT TESTS?
* WRITE HERE HOW TO DO UI TESTS?