var writings = require('./writing.json');

module.exports = function(){

    let writingsMarkup = '';
    writings.articles.forEach(function(writing) {
        writingsMarkup += html`
            <a href="${writing.url}">
                <h3>${writing.title}</h3>
            </a>
            <p>${writing.description}</p>
        `;
    });

    return html`
        <div class="margin-bottom">
            <h2>Writing</h2>
            <p>The things I add to the Internet</p>
        </div>
        <div class="margin-bottom">
            ${writingsMarkup}
        </div>
    `;
};
