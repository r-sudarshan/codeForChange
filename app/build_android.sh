#point to the Java 8 or lower on your machine
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_172.jdk/Contents/Home
#after you install Android Studio and the SDK, etc from that point this to the location of emulator;note we should not use emulator from the tools folder
export PATH="/Users/hari/Library/Android/sdk/emulator":$JAVA_HOME:$PATH
ionic cordova build --release android
