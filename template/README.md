## Environment:

```
System:
  OS: macOS 14.3.1
  CPU: (12) arm64 Apple M2 Max
  Memory: 85.52 MB / 32.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 21.3.0
    path: ~/.nodenv/versions/21.3.0/bin/node
  Yarn:
    version: 3.6.4
    path: /opt/homebrew/bin/yarn
  npm:
    version: 10.2.4
    path: ~/.nodenv/versions/21.3.0/bin/npm
  Watchman:
    version: 2023.11.27.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.14.3
    path: /Users/ultimatequestioncoding/.rubies/ruby-2.7.4/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.5
      - iOS 17.5
      - macOS 14.5
      - tvOS 17.5
      - visionOS 1.2
      - watchOS 10.5
  Android SDK: Not Found
IDEs:
  Android Studio: 2023.1 AI-231.9392.1.2311.11076708
  Xcode:
    version: 15.4/15F31d
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 21.0.3
    path: /Users/ultimatequestioncoding/.sdkman/candidates/java/current/bin/javac
  Ruby:
    version: 2.7.4
    path: /Users/ultimatequestioncoding/.rubies/ruby-2.7.4/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.74.2
    wanted: 0.74.2
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: true
  newArchEnabled: false
  ```

## setup of environment
I'm using Ruby On Mac for ruby, nodenv for node, SDKMAN! for java. my default ruby of 2.7.4 works fine, app was initially built with 3.3.1

## libraries!

### navigation
using @react-navigation v6

### state
Using redux-toolkit! it's a little more confusing but it requires less boilerplate. ultimately i think using typescript will help to understand the shape of the application state

the template is also using ```redux-persist``` for state management. currently, only the auth portion is set up as persistent state.

### animation
using reanimated v3 which is a dependency of @react-navigation.

### api
redux toolkit provides a nice fetch wrapper. this is kind of barebones set up.  There are provided methods to deal with token refreshing. it's a complicated API but it's robust!

## Directory Structure

```
api
  - config setup for redux
 navigation
  - stacks
    - stack files (AuthStack.js)
    links.js // setup for react-navigation linking
    screens.js // file containing screen names
screens
  - directories containing screens for the app
state
  - api
    - apis (RKT query)
  - slices
    - state slices for redux-toolkit
  store.js // store setup for redux
utility
  - helper files like styles and theming files
components
  - various shared components for the app
```

### navigation
this folder contains the constants, and the deep-linking files for the app

### screens
this folder contains the various screens for the app. ```index.js``` is where the ```NavigationContainer``` and main stack are exported from. Logically if there is only one stack, each screen gets a folder. otherwise, there should be a stack directory with each screen having a folder. within the screen folder a ```index.js``` file will export the screen component

### components
shared component files for use throughout the app

### utility
theme setup, icon import / exports

### services
API setup. 

### state
redux setup files separated into ```api``` and ```slices``` 
