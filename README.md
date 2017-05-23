<img src=http://bogapp.solsort.com/icon.png width=96 height=96 align=right>

[![Riot.io](https://img.shields.io/badge/riot.im-chat-blue.svg)](https://riot.im/app/#/room/#mobibl:matrix.org)
[![Waffle.io](https://img.shields.io/waffle/label/solsort/bogapp/in%20progress.svg)](https://waffle.io/solsort/bogapp)
[![Travis](https://img.shields.io/travis/solsort/bogapp.svg)](https://travis-ci.org/solsort/bogapp)

BogApp is an open source literature web/app *under development*. The initial focus is the danish libraries as a starting point. The intention is to make it international, and extend to wider literary communities than just the libraries.

You are [welcome to join](CONTRIBUTING.md), see [CONTRIBUTING.md](CONTRIBUTING.md)

First version is a rewrite of the functionality from <https://mobibl.solsort.com> changing the following:

- ISBN barcode scanner
- use JavaScript/React to make it easier for other developers to work on
- use Material Design to have a clear design direction / guidelines. (possibly reuse part of DDB-app when it gets released, and if design is good).
- only take core functionality, i.e. most likely skip experimental facet browser from [mobibl](https://mobibl.solsort.com) etc.
- server-side rendering, - for better ranking of bibliographical pages (with semantic markup) in search results.
- better documentation about joining, more contributor/community oriented
- more unit testing, add code coverage
