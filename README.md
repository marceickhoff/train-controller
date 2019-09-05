# Train Controller
This Node.js app allows you to control locomotives in Train Simulator 2019 using your tablet device as a remote. It utilizes the [​TS2017 Raildriver and Joystick Interface](http://forums.uktrainsim.com/viewtopic.php?f=361&t=139830&st=0&sk=t&sd=a#p1727411) by [CobraOne](http://forums.uktrainsim.com/memberlist.php?mode=viewprofile&sid=e8373e15e999669198eb2373eea8f3a6&u=282626) as an interface between the Node server and the TS2019 application.

## Setup
1. Download and install the [​TS2017 Raildriver and Joystick Interface](https://www.dropbox.com/sh/cbwyvjrt3x6gxat/AAB5WALzXgIqxADDO1ST-rBqa?dl=0)
2. Run ``npm install``
3. Open ``config.json`` and make sure the path to your Train Simulator 2019 installation under ``tsInstallPath`` is correct
3. Run ``npm start``
4. Go to ``http://localhost:3000`` and choose a control panel
5. Launch the *​TS2017 Raildriver and Joystick Interface* apllication and click the button "*Start Callback*"
6. Launch Train Simulator 2019
7. Control your train!

## Control Panels
Since different locos have different controls, you need a matching controller for each loco. This is especially true since the internal naming and handling of buttons and levers may vary from loco to loco.

This is a list of locos with pre-built control panels:

* Work in progress

### Create your own Control Panels
There probably no pre-built control panel for your favourite loco. But with a bit of JavaScript, HTML and CSS knowledge, you can create your own control panels to match the controls of your loco. Here is how:

Work in progress.