var writings = require('./writing.json');

module.exports = function(){

    let writingsMarkup = '';
    writings.articles.forEach(function(write) {
        writingsMarkup += html`
            <div class="margin-bottom">
                <a href="${write.url}">
                    <h3>${write.title}</h3>
                </a>
                <p>${write.description}</p>
            </div>
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
