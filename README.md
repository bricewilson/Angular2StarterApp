# Angular2StarterApp
A starter template for building Angular 2 apps with Typescript and Visual Studio Code.

### Getting Started
I assume you already have [nodejs](https://nodejs.org/) and [Visual Studio Code](https://code.visualstudio.com) installed. You will need the latest version of [Typescript](http://www.typescriptlang.org) (1.5.0-beta), the [tsd](https://www.npmjs.com/package/tsd) NPM package for managing Typescript definitions and a simple web server. I like the very easy to use [http-server](https://www.npmjs.com/package/http-server), but feel free to use whatever you like. All three of these can be installed globally with the command below.

Here are the steps to get the app running:
* Clone this repository
* From a terminal type *npm install -g tsd typescript http-server*
* Open the project folder in Visual Studio Code
* <kbd>CMD</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> on a Mac or <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> on Windows and Linux
* Type *Run Task* and select the *tsc* task
* Open a terminal in the *app* folder of the project root
* Type *http-server* to start a webserver with all of the default options
* Visit **http://localhost:8080** in a browser
* If you see *Welcome to My Starter App* then everything is working.
* Enjoy learning and hacking on Angular 2, Typescript, and Visual Studio Code!

### Angular 2
The index.html file contains a reference to an early version of Angular 2 on [https://code.angularjs.org](https://code.angularjs.org).

### Typescript Definitions
The project uses the [tsd](https://www.npmjs.com/package/tsd) package to manage the [DefinitelyTyped](http://definitelytyped.org/) definitions that provide Intellisense in Visual Studio Code. The tsd package combines all of your type definition references into a single file named *tsd.d.ts*. That file is inside the *typings* folder in the project along with folders containing all of the actual definition files added with the *tsd* command. You can then simply reference that file in each of your Typescript files to get Intellisense for your included definitions. You can see an example of including the *tsd.d.ts* file at the top of the *app.ts* file inside the *app* folder.

The *tsd.json* file in the root of the project contains references to the specific versions of the definition files used in the project. New references can be added by using the [tsd](https://www.npmjs.com/package/tsd) command from a terminal.

### Visual Studio Code Tasks
Visual Studio Code includes a task runner. I have included the default *tsc* task for compiling Typescript code. The task definitions are stored in a file named *tasks.json* inside the *.settings* folder in the root of the project. The Visual Studio Code docs [explain tasks](https://code.visualstudio.com/Docs/tasks) very well.

I'm a big fan of Gulp which is also supported and may configure it to use that in the future.

### Compiling Typescript Code
The latest 1.5.0-beta release of Typescript allows the compiler to be configured with options specified in a *tsconfig.json* file. I have included that file in the root of the project and specified a few options for the compiler. It is configured to compile all Typescript files to ES5 and store them and their associated map file in a folder named *js* inside the projects *app* folder. Running the default *tsc* task as described in the *Getting Started* section above will invoke the Typescript compiler with the options specified in the *tsconfig.json* file.

### Application Structure
Since this is just a starter template there is not much of a structure already in place. The app's main component is in the *app.ts* file and it gets its associated template from a file located in the *templates* folder inside the *app* folder.
