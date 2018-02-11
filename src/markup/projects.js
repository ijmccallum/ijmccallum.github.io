var projects = [
    {
        title: 'WikiLogic',
        url: 'http://www.wikilogicfoundation.org/',
        description: 'An open source project that graphs arguments and their permises. React on the front end calls a node API backed by a graph database (ArangoJS) and fronted by an nginx proxy. All of it running in Docker.'
    },
    {
        title: 'Mini Site Generator',
        url: 'https://www.npmjs.com/package/mini-site-generator',
        description: 'A very simple JavaScript template string literal based static site generator. I wanted a simple solution without the complexity, quirks, and expectations that I\'ve found in other generators. This site is built with it!'
    },
    {
        title: '30 Days of MDN',
        url: 'https://github.com/ijmccallum/30-days-of',
        description: 'A self imposed learning challenge to get to know more of the available Web APIs. '
    }
];

module.exports = function(){

    let projectsMarkup = '';
    projects.forEach(function(project) {
        projectsMarkup += html`
            <article>
                <header>
                    <h3><a href="${project.url}">${project.title}</a></h3>
                </header>
                <p>${project.description}</p>
            </article>
        `;
    });

    return html`
        <div class="margin-bottom grid">
            <div>
                <h2>Projects</h2>
                <p>These are personal projects only. If you wish to know the commercial projects I've worked on, say hello! Lets grab a coffee.</p>
            </div>
        </div>
        <div class="grid">
            ${projectsMarkup}
        </div>
    `;
};
