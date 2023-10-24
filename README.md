### Hexlet tests and linter status:

[![Actions Status](https://github.com/dvuro4ka/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/dvuro4ka/frontend-project-46/actions)
<a href = "https://codeclimate.com/github/dvuro4ka/frontend-project-46/maintainability"><img src ="https://api.codeclimate.com/v1/badges/511480d15febd22127bc/maintainability" /></a>
<a href = "https://codeclimate.com/github/dvuro4ka/frontend-project-46/test_coverage"><img src = "https://api.codeclimate.com/v1/badges/511480d15febd22127bc/test_coverage" /></a>
<a href = "https://github.com/dvuro4ka/frontend-project-46/workflows/build-gendiff.yml"><img src = "https://github.com/dvuro4ka/frontend-project-46/workflows/build-gendiff/badge.svg" /></a>

# Gendiff
Gendiff is a command line utility that compares two configuration files and shows the difference. 
The formats available for comparison are:
- **JSON,** 
- **YML,** 
- **YAML.**

It is also possible to display the differences in three formats:
- **Stylish,**
- **Plane,**
- **Json.**

## Installation
Make sure you have installed Node.js version 18 or higher.

```
$ git clone git@github.com:dvuro4ka/frontend-project-46.git
$ make install
$ npm link
```
## How to use
For help use 
```
$ gendiff -h.
```
A simple example of how to use. The standard outputs the differences in stylish format.
```
$ gendiff first/pathTo/file.yml second/pathTo/file.json
``` 

For change outputs format use --format / -f. You can use stylish/plain/json.
```
$ gendiff first/pathTo/file.yml second/pathTo/file.json -f plain
OR
$ gendiff first/pathTo/file.yml second/pathTo/file.json -f json
```

You can also use a relative path to your files.
```
$ genfiff __fixtures__/file1.json __fixtures__/file3.yml
```
## Gendiff plain JSON object

[![asciicast](https://asciinema.org/a/ezvchfRoivJvTuFeCczbKnD4M.svg)](https://asciinema.org/a/ezvchfRoivJvTuFeCczbKnD4M)

## Gendiff calculation between two JSON files and two YAML files, format plain

[![asciicast](https://asciinema.org/a/bnhP1rDoInW0EXqo5oTgQ3Ezp.svg)](https://asciinema.org/a/bnhP1rDoInW0EXqo5oTgQ3Ezp)

## Gendiff calculation between two JSON files, format JSON
[![asciicast](https://asciinema.org/a/JPIFyTZa0oKDWSwlyMKMTp4U4.svg)](https://asciinema.org/a/JPIFyTZa0oKDWSwlyMKMTp4U4)