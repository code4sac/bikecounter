# bikecounter
A bicycle (and pedestrian) traffic counter, designed in partnership with SABA.

## Setup
Mac Terminal/Linux

The following assumes you have git and npm installed and correctly configured.

1. Clone this repository: `git clone https://github.com/code4sac/bikecounter.git`
2. Install dependencies and build the app: `npm install`
3. Start the server: `npm start`
4. [Try it out!](http://localhost:3000)

## Contributing
We welcome all contributions, but we ask contributors to follow a few simple guidelines to promote a code base that will be understandable for future contributors.

1. Stay as consistent as possible with the style conventions used in the project. We're happy to hear suggestions or corrections on matters of style, and even happier to merge pull requests implementing style improvements.
2. Please check the [Project Roadmap](https://github.com/code4sac/bikecounter/blob/master/meta/roadmap.md) before issuing a feature request, or striking out on your own to implement new functionality.
3. Please keep commits as small as is reasonable, and please include detailed commit messages.
4. Commit messages should be a one line summary expressing the purpose of the commit's contents, followed by a more detailed description. These commit messages will be used to create a tutorial for future contributors, so please be as descriptive as time allows

Example commit message:
```
Add Traffic Event data model

- Define the Traffic Event data model, which extends from Backbone model.

- Define a parse function that munges Traffic Event data retrieved from the server.

- Define a save function that munges Traffic Event data before sending it to the server.

- Consolidate existing unencapsulated data and operations dealing with traffic events into the Traffic Events model.

- Replace that unencapsulated code with the Traffic Events model.
```
