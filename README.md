#Ionic Todo App Lab

In this lab we will be creating an application to store your Todo list.  

Objectives:

1. Get your machine setup for Ionic
2. Create a working application 


##Section 1: Setup

###Section 1.1: Install Git (Windows Only)

The default Ionic templates are downloaded from git when you start a new project.

1. Download git at [https://git-scm.com/download/win](https://git-scm.com/download/win)
1. Run the installer and keep all of the defaults
1. After the install completes, open a command prompt and run the following command

		git --version

###Section 1.2.a: If Node already installed then Just Update

In this section we will be installign NodeJs is you do not have it already installed.  To check to see if you have node install or not, open a command prompt or terminal and run the following command:    
		
		$ npm update npm -g
	
1. Check the new version number:

		$ node -v

###Section 1.2.b: Fresh NodeJS Install

1. If you do not have nodejs installed, download it from [http://nodejs.org](http://nodejs.org)
1. After the installer downloads, run it and keep all of the defaults
1. To verify the node install, open a new command prompt or terminal and the run the following command:

		$ node -v


###Section 1.3: Configure Npm [SKIP THIS.....]

We are going to turn off the npm spinner and turn on http messages so that you will be able to see that npm is actually doing something 

1. Open a Command Prompt or Terminal
1. Run the following commands:

		$ npm config set spin false [SKIP THIS.....]
		$ npm config set loglevel http [SKIP THIS.....]

1. Verify that the settings are set

		$ npm config ls

###Section 1.4.a: Installing Ionic
	
1. Install the following npm packages

		$ npm install -g ionic gulp bower  

###Section 1.4.b: Installing Ionic Icons (used by this project)
	
1. Install the following npm packages

		$ npm install ionic-contrib-icon 
   
###Section 1.4.c: Installing NGCordova (used by this project)
	
1. Install the following command 

  $ bower install ngCordova
   
###Section 1.4.d: Installing Cordova (Ubuntu)
	
1. Install the following npm packages

		$ sudo apt-add-repository ppa:cordova-ubuntu/ppa
		$ sudo apt-get update
		$ sudo apt-get install cordova-cli
		$ npm install -g cordova
		
To build an application for the Ubuntu platform, the following extra packages are required

		$ sudo apt-get install cmake debhelper libx11-dev libicu-dev pkg-config qtbase5-dev qtchooser qtdeclarative5-dev qtfeedback5-dev qtlocation5-dev qtmultimedia5-dev qtpim5-dev qtsensors5-dev qtsystems5-dev

###Section 1.5: Installing a Text Editor

You can use any text editor to developer your ionic project.  I personally am using Visual Studio Code right now but any text editor will do.

* Visual Studio Code (free) - [https://code.visualstudio.com](https://code.visualstudio.com)
* Brackets (free) - [http://brackets.io](http://brackets.io)
* Webstorm (paid)  - [https://www.jetbrains.com/webstorm](https://www.jetbrains.com/webstorm)
* Sublime Text (paid) - [http://www.sublimetext.com](http://www.sublimetext.com) 

###Section 1.6: Installing Andriod Emulator Genymotion

You can use several andriod emulators. But recommonded don't use the iconic provided emulator. 

* GenyMotion Install Video - [https://egghead.io/lessons/angularjs-install-the-genymotion-android-emulator-for-ionic](https://egghead.io/lessons/angularjs-install-the-genymotion-android-emulator-for-ionic)
* GenyMotion(free for peronsal) - [https://www.genymotion.com](https://wwww.genymotion.com)

###Section 1.7: Installing Android Studio SDK 
* Android Studio SDK (REQUIRED) - [https://developer.android.com](https://developer.android.com)
* modify the Android Studio  file 'AndroidManifest.xml' to default to a Android OS
	$ preference name="android-minSdkVersion" value="8" //android 2.2
	$ preference name="android-targetSdkVersion" value="15" //android 4.0
    
* Updated Windows Enviroment setting PATH to include the following adb.exe file
	$ PATH=OTHER STUFF;C:\Users\<aName>\AppData\Local\Android\sdk1\platform-tools



###Section 1.8a: Installing Ionic Android and iOS Emulation support

	$ ionic platform add android
	$ ionic platform add ios

###Section 1.8b: Installing Ionic Android and iOS Emulation support

	$ ionic run android
	$ ionic run ios

##------------------------------------------------------

##Section 2: Creating the Project

In this section we will be creating the initial ionic project.
 
1. Open a command prompt or terminal
1. Navigate where you normally keep your source code.  I keep mine at c:\projects

		
		$ mkdir c:\git
		$ cd c:\git 

1. Run the ionic start command to create your project

		$ ionic start todoApp1 https://github.com/tucsonSun/iconic-examples-todo-v1

1. You should see output like this screenshot if everything is working correctly.    
		![Ionic Start Output](images/IonicStart.png)
1. Running our todoApp

		$ cd todoApp && ionic serve 

1. You should see a web browser open and the page will look like the following
		![Ionic Serve Output](images/IonicServeAfterProjectCreate.png)


##------------------------------------------------------



 

##Conclusion

Congratulation on completing your first Ionic application.  This is just a start though as there are several features that are missing from the application that you would want to add in if you were to release this application.  

Possible Additional Features:

* Delete a project
* Complete a task
* Delete a task
* Re-order task
* Re-order project list
* Expand task to have more than just a title with stuff like due date, notes, label, background color, etc.    

 
