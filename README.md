# Train Controller
This Node.js app allows you to control locomotives in Train Simulator 2019 using your tablet or smartphone device as a remote. It utilizes the [TS4J Train Simulator Java Interface](https://github.com/marvk/ts4j) by [marvk](https://github.com/marvk) to allow communication between the Node server and the TS2019 application.

*Work in progress.*

## Setup
1. Download and build the [TS4J Train Simulator Java Interface](https://github.com/marvk/ts4j).
2. Move the resulting ``.jar`` file into the Train Controller root directory.
2. Run ``npm install``
3. Open ``config.json`` and make sure the path to your Train Simulator 2019 installation and the name/location of the ``ts4j.jar`` is correct
3. Run ``npm start``
4. Go to [http://localhost:3000](http://localhost:3000)
6. Launch Train Simulator 2019
7. Control your train!

## Control Panels
Since different locos have different controls, you need a matching controller for each loco. This is especially true since the internal naming and handling of buttons and levers may vary from loco to loco.

This is a list of locos with pre-built control panels:

* *Work in progress.*

### Create your own Control Panels
There probably no pre-built control panel for your favourite loco. But with a bit of JavaScript, HTML and CSS knowledge, you can create your own control panels to match the controls of your loco. Here is how:

*Work in progress.*
