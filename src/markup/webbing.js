var webbings = require('./webbing.json');

module.exports = function(){

    let webbingsMarkup = '';
    webbings.finds.forEach(function(web) {
        webbingsMarkup += html`
            <article class="margin-bottom">
                <header>
                    <h3><a href="${web.url}">${web.title}</a></h3>
                </header>
                <p>${web.description}</p>
            </article>
        `;
    });

    return html`
        <div class="margin-bottom">
            <h2>Web</h2>
            <p>The things I pull from the Internet, and my opinions</p>
        </div>
        ${webbingsMarkup}
    `;
};
