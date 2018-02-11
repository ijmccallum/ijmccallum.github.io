var webbings = require('./webbing.json');

module.exports = function(){

    let webbingsMarkup = '';
    webbings.finds.forEach(function(web) {
        webbingsMarkup += html`
            <article>
                <header>
                    <h3><a href="${web.url}">${web.title}</a></h3>
                </header>
                <p>${web.description}</p>
            </article>
        `;
    });

    return html`
        <div class="margin-bottom grid">
            <div>
                <h2>Tools</h2>
                <p>A few of the development tools I use or have used, and some thoughts on them. It' not a full list, I've only included the tools that left a particularly good impression.</p>
            </div>
        </div>
        <div class="grid">
            ${webbingsMarkup}
        </div>
    `;
};
