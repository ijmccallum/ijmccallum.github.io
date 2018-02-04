const writings = require('./markup/writing.js');
const webbings = require('./markup/webbing.js');
const podcasts = require('./markup/podcasts.js');

module.exports = function(){
    const writingMarkup = writings();
    const webbingMarkup = webbings();
    const podcastingMarkup = podcasts();
    
    return html`
        <!DOCTYPE html>
        <html>
            <head>
                <title>←?</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFF0lEQVR42mVVXW8TRxQdm9/AT0CoDyjYFAiEBJKQD4KEUNMfALKEIpr+gEgGgYBA+0AA0TxA4vSpCAECBPEDCqASIfFSIZDIgxEFQoiTxpQUAvbuzJ3Tcze7LinHPpqRPXPOvXfvzBoFvP+CkgJgyFXe24z3khfx4+KkZG34AYCyVKvVxmtBLe/hM7qWNOJ9SkRMwggutMbZiCmBpD1gyHUUHnPOVZwInHX09lDMzs5iYmIC9+/fw/zcnP5e4boxjusAb2iYdk5STrxxamLDwIizqd/fzWsGaS7MkbMkrLWeFMXHjx/9L8PD2Lt3L4aHh325XJZqtSpe9CsQ7nFecqghPYlPxjqXChm4CQJvACjVfYBjoOKkIyQIAhAqitWrV0ejQkUVuoZBOEL3cK8MJHpaJp2kI3Fnc5S1IDwRZ4DE4OnTp+js7MS+ffuwsLCQiCvVTEfPL+feOnE5QIxnyQ0D0Fo1ML0yliEqrpvUIDYES4InT56gv78fe/bsqZvoOqX3Sgip8zJ1G0hjpsxfxnlfsFxAWMRIIlPhoaEhjI6OIgxD3Lx5Ez09PZifn08M6kEASlide5HC0TSMoU6WThVmphHop26guH79OjKZDKanp6MOKhQKePPmzX9rvoaPDSvWuqwRQT5y9E50TAy0PJ8/f9aoo+gPHjyImZmZSJRnAEtLS/XIv0a9zHnDSZFz3ciWrD8wNain//r1a4yMjIBtiQTJOhWKxVZmQU0rUjScP4+D8CqqmzRqxdu3b/HgwQNcuXIFxWIRt27dwp07dzA5OanlUmE11WB0z5fZqK2m8dzo0Y//WCF+9+5dnDhxApcvX8bt27cj3rhxI3rIly5dwvHjx/Hw4cMkG923IovY4INmoAYrSqMYGBiI+OzZMy2RdpN2DrOaidr12LFj2L9/Py5cuKBZJtHrGBPLBpw8F/EgvZroXHHo0CGsXfsNmpu3o7W1jYesC11d3Whra8fWrduwaVMjduxoRXv7TmSzG2h0sV4FT1AOVqyWyBfjDHzirjh8+DC+/XYTBTvQ1NSCbduaOTZzbKFhOzZubGQQRygoOH16iIabUSqVkg70zjsauKIRcfnYQP5vkMlsQEdHF6PsWMGdOzv1Px7As1C8fPkKW7Y04erVqyD0ehHtSErljXVBltoVkeQOSkoUGaggS9GmUSt1zqy0LBtx6tTPULx48SfL1oRr166B8HpO9PBSKmt+O2MMDQqsGiyRdEI+n48NOrXWKqysG6xfn8XZs+egGBv7lSXbjKmpKRA2DC0cNd0BGENJoxeTiC1rq6kHiCNHjqpIkoGynkFLy46oJAcO9LGVB9HQkMHJkz+BkOU7zJetBA2kRq8vGXB0OUuoCeHZopoBu6f7C/FWjT56Bm2t7TTaju7uHpw/P8y6h9o7WhrrQsnZQIwNXNoEQbX+wqH4QECAGBwcdGvWrJXGxq0arbZr1EVN7CJtUW3hM2fOwertT2hpOQu8W37hCGltTW/TkNHb1KNHizRxaedsDsBsZaGCixdHfV9fn/T29squnh6/e9du9H73Pfp/+NGPjhRkcXFRNFtGz8K7Wbrklv75Ow1EFUkxI6Pixnu3/IPzaWFq5Dp4jAGo1GpVzM2VeZpfYZoneq48hzhJrbUKV7zIGCz3ODGghg1tijRhEBqFite59GkpNXHvnvnj8eNV796/zzjv8wDGyRL5QSkipWotGA9D4RlCJpTaKkHVOAZJmoSKfwHmDEZaVNa/DQAAAABJRU5ErkJggg==">
                <link rel="stylesheet" type="text/css" href="css/main.css">
                <link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet">
                <link rel="manifest" href="manifest.json">
            </head>
            <body class="pad">
                <div class="margin-bottom">
                    <h1>Iain J McCallum</h1>
                </div>

                <div class="margin-bottom">
                    <h2>Work</h2>
                    <p>I'm a <a href="http://www.delphicdigital.com/blog/author/iain-mccallum">Front End Developer at Hero Digital</a> and a core contributor to the <a href="http://www.wikilogicfoundation.org/about-wikilogic/">WikiLogic Foundation</a>.</p>
                    <p>To get in contact with me, try <a href="https://twitter.com/IJMcCallum">Twitter</a> which I check semi-regularly, or (if you're up for something more interesting) use a <a href="https://github.com/ijmccallum/ijmccallum.github.io">pull request</a>!</p>
                </div>
                    
                <div class="margin-bottom columns">
                    <div class="columns__col">
                        ${writingMarkup}
                    </div>
                    <div class="columns__col-gap"></div>
                    <div class="columns__col">
                        ${webbingMarkup}
                    </div>
                </div>
                <div class="margin-bottom columns">
                    <div class="columns__col">
                        ${podcastingMarkup}
                    </div>
                </div>

                <div id="footer">
                    <div class="margin-bottom">
                        <a class="margin-right" href="https://github.com/ijmccallum">GitHub</a>
                        <a class="margin-right" href="http://codepen.io/ijmccallum/">CodePen</a>
                        <a class="margin-right" href="https://www.linkedin.com/in/iainjmccallum">Linkedin</a>
                        <a class="margin-right" href="ttps://twitter.com/IJMcCallum">Twitter</a>
                    </div>
                    <p>What's that weird thing in the tab of your site? It's a question. Or an invitation. Either way it's aimed at you.</p>
                </div>
            </body>
        </html>
    `;
}
