var podcasts = require('./podcasts.json');

module.exports = function(){

    let podcastsMarkup = '';
    podcasts.casts.forEach(function(podcast) {
        podcastsMarkup += html`
            <div class="margin-bottom flex-wrap-grid__cell">
                <a href="${podcast.url}">
                    <h3>${podcast.title}</h3>
                </a>
                <p>${podcast.description}</p>
            </div>
        `;
    });

    return html`
        <div class="margin-bottom">
            <h2>Podcasts</h2>
            <p>These things have become such a big part of my dev learning, they had to have their own section. There are non dev podcasts in my feed too but to list them would reveal the extent of my podcast addiction and I can't be having that! It seems like a lot when listed out like this, but that 2x button really makes them fly :)</p>
        </div>
        <div class="flex-wrap-grid">
            ${podcastsMarkup}
        </div>
    `;
};
