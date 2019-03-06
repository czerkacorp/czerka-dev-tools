# Czerka Developer Tools

A command line interface (CLI) used to aid in the development of applications made by Czerka Corporation."

# Installation

There are two ways czerka-dev-tools can be installed.

## NPM Install

```bash
npm i -g czerka-dev-tools
```

This will install the package globally on your machine so that you can use the commands in any directory, at any time.

## NPX

```bash
npx <command>
```

If you have a version of NPM that comes with NPX, you can run the commands without having to install the package globally. Just prefix the command with `npx` and it will locate the package and run the command for you without the need to run `npm i -g`.

# Current Commands

- czerka:generatekey

Generate a secret key to be used for signing JWT, password hashing or any number of other reasons you may need a secret key for. Jedi and Sith flavored for extra security.

```bash
$ czerka:generatekey 10
 -------------------------------
 -- Generating secret key
 -- Length: 10
 -------------------------------
 darth-WrbUbEmMvx
```

# Contributing

If you would like to contribute towards Mainframe's development, please follow these steps:

- Fork the Mainframe repository on Github
- Make your changes, commit and push to your fork's master
- Open a pull request against the Mainframe repository

# Other

If you have any feature requests, questions or concerns, please open an issue in the Mainframe repository.
