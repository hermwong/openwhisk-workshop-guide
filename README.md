# OpenWhisk-Workshop Guide

- example files for [OpenWhisk-Workshop](https://www.npmjs.com/package/openwhisk-workshop) and also additional set up info.

## Installing OpenWhisk CLI

- Download from [OpenWhisk's GitHub](https://github.com/apache/incubator-openwhisk-cli/releases) or from the IBM BlueMix Console, look for the ["Looking for the wsk CLI"](https://console.bluemix.net/openwhisk/learn/cli) link at the bottom of the page.

### wsk set up

- set as `PATH` environmental variable

```
# example for macOS, in .bash_profile add

export PATH="path/to/wsk:$PATH"
```

## Docs for using JavaScript with OpenWhisk

- creating OpenWhisk actions in [JavaScript](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md#creating-and-invoking-javascript-actions)

## Requirements for using Java with OpenWhisk:

- need [Java JDK 8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- need to download Google [gson-2.8.2.jar](http://repo1.maven.org/maven2/com/google/code/gson/gson/2.8.2/)

### Google gson set up

- set as `CLASSPATH` environmental variable

```
# example for macOS, in .bash_profile add

export CLASSPATH="path/to/gson-2.8.2.jar"
```

## Docs for using Java with OpenWhisk

- creating OpenWhisk actions in [Java](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md#creating-java-actions)
