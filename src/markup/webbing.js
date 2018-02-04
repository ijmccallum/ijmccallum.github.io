var webbings = require('./webbing.json');

module.exports = function(){

    let webbingsMarkup = '';
    webbings.finds.forEach(function(web) {
        webbingsMarkup += html`
            <div class="margin-bottom">
                <a href="${web.url}">
                    <h3>${web.title}</h3>
                </a>
                <p>${web.description}</p>
            </div>
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
