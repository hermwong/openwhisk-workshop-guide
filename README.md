# OpenWhisk-Workshop Guide

- example files for [OpenWhisk-Workshop](https://www.npmjs.com/package/openwhisk-workshop) and also additional set up info.

## Installing OpenWhisk CLI

- Download from [OpenWhisk's GitHub](https://github.com/apache/incubator-openwhisk-cli/releases) or from the IBM Bluemix Console, look for the ["Looking for the wsk CLI"](https://console.bluemix.net/openwhisk/learn/cli) link at the bottom of the page.

### wsk set up

- set as `PATH` environmental variable

```
# example for macOS, in .bash_profile add

export PATH="path/to/wsk:$PATH"
```

## Sign up for IBM Bluemix OpenWhisk

- Signing up for [IBM Bluemix OpenWhisk](https://console.bluemix.net/registration/?target=/openwhisk&cm_mc_uid=41935541757615060554411&cm_mc_sid_50200000=1506537489&cm_mc_sid_52640000=&S_VCPI=Search_Google-_-Cloud_Cloud+Platform-_-WW_US-_-blue+mix+ibm_Exact_) will allow you to try out the exercises in the workshop.

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
