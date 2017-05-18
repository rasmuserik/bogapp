<img src=http://bogapp.solsort.com/icon.png width=96 height=96 align=right>

The goal for this project is to become the best open source literature web/app.

The initial focus is the danish libraries as a starting point. The intention is to make it international, and extend to wider literary communities than just the libraries.

Tasks / subprojects currently in progress

- Setup project infrastructure
- Merge core functionality of <a href="https://github.com/solsort/mobibl">MoBibl</a> and <a href="https://github.com/solsort/rdf">solsort/RDF</a> into the project
- Document decisions / approach

**Join the project** You can help:

- **developers:** <!--  -->
- **librarians:** <!-- -->
- **designers:** <!-- -->
- **generalists:** <!-- -->
- **organisations:** <!-- -->

TODO: link to starter issues, for each category of collaborator.

# Contributing

TODO: introduction: how to make a pull request (fork|feature-branch)

# Roadmap

## v0.1.0 

Core functionality:

- rewrite basic functionality from <a href="https://github.com/solsort/mobibl">MoBibl</a> 
- rewrite basic functionality from <a href="https://github.com/solsort/rdf">solsort/RDF</a>
- sections
    - *bogapp* general information about books (and the app)
    - *bibdata*  bibliographic data 
    - *biblioteksapp* information about / from the libraries
- serverside rendering / search engine optimised, to encourage discovery of literature through organic search

Non-functional requirements:

- new design(Material), probably partly based on DDB-App when it becomes open source
- unit testing/coverage
- made with mainstream technologies: JavaScript/React to make it easy for other developers to get into the code
- as contributor friendly as possible (contributing guide, get-started-issues, etc.), and start building community around the app development

# Steering

- Keep number dependencies low
- Choose mainstream technologies
- Keep it simple
- Major decisions is documented here, with underlying reason. Choices are always up for wall-arguet discussions.

List of decisions with motivation/reason:

<details>
  <summary><b>Design:</b> <a href="https://material.io/guidelines">Material</a> 
  </summary>
  Material gives a common foundation and language for reasoning about the design.
  Following Material Design guidelines, also makes easier to collaborate on components etc. with other projects.

  It also feels more native on android, - and is a design language that is being used all across platforms, so users are getting used to it.
</details>

<details>
  <summary><b>Design framework:</b> *undetermined*
  </summary>
  Currently using react-md, - tried material-ui earlier, which didn't play well.
</details>


<p><details>
  <summary><b>Working language:</b> English</summary>
The vision is that the project should be usable internationally.
The first version of the app is made in english, and then i18n to danish.
</details></p>

<p><details>
  <summary><b>Build framework:</b> next.js</summary>
  Simple way to get server-side rendering, and has a large community momentum.
</details></p>

TODO: add more design  choices here

TODO: describe motivation for each dependency in project
TODO: describe design choices

# Community

TODO: join, core team, collaborators, etc...

# History

TODO add details here

BogApp builds upon the followin projects

- 2017 *BogApp* 
- 2016 Response to *Request for Tender* for danish public library app.
- 2016 *MoBibl*
- 2016 *Den Åbne Platform*
- 2015 *BibApp*
- 2015/2016 Semantic markup of bibliographic data (*RDF*)
- 2014/2015 *Related-webservice*
- 2014 *Visualisering-af-relationer*

