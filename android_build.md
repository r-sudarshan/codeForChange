#Building/Testing with Android

## Java
The latest version of android studio works only with Java 8 or below.
If you are using Mac and have home brew then install "brew cask install java8".

Else there is always the installable from Oracle

## Android studio
The latest version will work. Once installed, follow the guidance to install the SDK and emulators.
Go to Tools=>SDK Manager and Tools=>AVD Manager and make sure you have at least one AVD setup and running.

AVD setup for Pixel is good enough.

## ionic run android
I have created a script that sets up the Java path and the emulator folder on the path before starting ionic run.
Please use this.

This will trigger gradle build which uses 100% of the CPU and might kill your battery