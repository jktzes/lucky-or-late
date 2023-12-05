oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g late-or-lucky
$ lol COMMAND
running command...
$ lol (--version)
late-or-lucky/0.0.0 darwin-arm64 node-v18.19.0
$ lol --help [COMMAND]
USAGE
  $ lol COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lol hello PERSON`](#lol-hello-person)
* [`lol hello world`](#lol-hello-world)
* [`lol help [COMMANDS]`](#lol-help-commands)
* [`lol plugins`](#lol-plugins)
* [`lol plugins:install PLUGIN...`](#lol-pluginsinstall-plugin)
* [`lol plugins:inspect PLUGIN...`](#lol-pluginsinspect-plugin)
* [`lol plugins:install PLUGIN...`](#lol-pluginsinstall-plugin-1)
* [`lol plugins:link PLUGIN`](#lol-pluginslink-plugin)
* [`lol plugins:uninstall PLUGIN...`](#lol-pluginsuninstall-plugin)
* [`lol plugins reset`](#lol-plugins-reset)
* [`lol plugins:uninstall PLUGIN...`](#lol-pluginsuninstall-plugin-1)
* [`lol plugins:uninstall PLUGIN...`](#lol-pluginsuninstall-plugin-2)
* [`lol plugins update`](#lol-plugins-update)

## `lol hello PERSON`

Say hello

```
USAGE
  $ lol hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/awx-ezo-tang/late-or-lucky/https://github.com/awx-ezo-tang/late-or-lucky/blob/v0.0.0/src/commands/hello/index.ts)_

## `lol hello world`

Say hello world

```
USAGE
  $ lol hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ lol hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/awx-ezo-tang/late-or-lucky/https://github.com/awx-ezo-tang/late-or-lucky/blob/v0.0.0/src/commands/hello/world.ts)_

## `lol help [COMMANDS]`

Display help for lol.

```
USAGE
  $ lol help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lol.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `lol plugins`

List installed plugins.

```
USAGE
  $ lol plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lol plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/index.ts)_

## `lol plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lol plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lol plugins add

EXAMPLES
  $ lol plugins add myplugin 

  $ lol plugins add https://github.com/someuser/someplugin

  $ lol plugins add someuser/someplugin
```

## `lol plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lol plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lol plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/inspect.ts)_

## `lol plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lol plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lol plugins add

EXAMPLES
  $ lol plugins install myplugin 

  $ lol plugins install https://github.com/someuser/someplugin

  $ lol plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/install.ts)_

## `lol plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ lol plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lol plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/link.ts)_

## `lol plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lol plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lol plugins unlink
  $ lol plugins remove

EXAMPLES
  $ lol plugins remove myplugin
```

## `lol plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ lol plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/reset.ts)_

## `lol plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lol plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lol plugins unlink
  $ lol plugins remove

EXAMPLES
  $ lol plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/uninstall.ts)_

## `lol plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lol plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lol plugins unlink
  $ lol plugins remove

EXAMPLES
  $ lol plugins unlink myplugin
```

## `lol plugins update`

Update installed plugins.

```
USAGE
  $ lol plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
