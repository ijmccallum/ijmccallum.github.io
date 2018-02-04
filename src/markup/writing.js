var writings = require('./writing.json');

module.exports = function(){

    let writingsMarkup = '';
    writings.articles.forEach(function(write) {
        writingsMarkup += html`
            <article class="margin-bottom">
                <header>
                    <h3><a href="${write.url}">${write.title}</a></h3>
                </header>
                <p>${write.description}</p>
            </article>
        `;
    });
    
    return html`
        <div class="margin-bottom">
            <h2>Writing</h2>
            <p>The things I add to the Internet</p>
        </div>
        ${writingsMarkup}
    `;
};
