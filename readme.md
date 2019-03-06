# Czerka Developer Tools

A command line interface (CLI) used to aid in the development of applications made by Czerka Corporation.

# Installation

There are two ways czerka-dev-tools can be installed.

## NPM Install

```bash
$ npm i -g czerka-dev-tools
```

This will install the package globally on your machine so that you can use the commands in any directory, at any time.

## NPX

```bash
$ npx -p @czerkacorp/czerka-dev-tools -c "<command>"
```

If you have a version of NPM that comes with NPX, you can run the commands without having to install the package globally. Run the command above, replacing `<command>` with one of the commands below and NPX will locate the package and run the command for you without the need to install via `npm i -g`.

# Current Commands

- `czerka:generatekey <length>`
- `npx -p @czerkacorp/czerka-dev-tools -c "czerka:generatekey <length>"`

Generate a secret key to be used for signing JWTs, password hashing or any number of other reasons you may need a secret key for. Jedi and Sith flavored for extra security.

```bash
$ czerka:generatekey 10
 -------------------------------
 -- Generating secret key
 -- Length: 10
 -------------------------------
 darth-WrbUbEmMvx
```

# Contributing

If you would like to contribute towards czerka-dev-tools development, please follow these steps:

- Fork the czerka-dev-tools repository on Github
- Make your changes, commit and push to your fork's master
- Open a pull request against the czerka-dev-tools repository

# Other

If you have any feature requests, questions or concerns, please open an issue in the czerka-dev-tools repository.
