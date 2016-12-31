var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var inplace     = require('metalsmith-in-place');
var helpers     = require('metalsmith-register-helpers');
var debug       = require('metalsmith-debug');
var del         = require('del');


var siteStructure = {
    srcFile: "me.html",
    children: [
        { srcFile: "hub-pre-zip.html", distDir: "hub/pre/index.html" }
    ],
}

var builder = function(options){
    return function(files, metalsmith, done){

      //recurse through the site & build the pages
      console.log('BUILDER');
        /*
        Object.keys(files).forEach(function(fileName){
            //is this the index file
            if (fileName == siteStructure.srcFileEn) {
                files['index.html'] = files[fileName];
                delete files[fileName];
                return;
            }

            //so it's one of the children then
            var isChildPage = false;
            siteStructure.children.forEach(function(childPage){
                //if it's still false, check again. otherwise short circuit... ish could use some improvment
                if (!isChildPage) {
                    switch(fileName) {
                        case childPage.srcFileEn:
                            console.log('English page', fileName);
                            files[childPage.distDirEn] = files[fileName];
                            delete files[fileName];
                            isChildPage = true;
                            break;
                        default:
                            //meh, check the next child in the config again
                    }
                }
            });

            //it's not a child or the index. remove it
            if (!isChildPage) {
                files[siteStructure.draftDir + fileName];
                delete files[fileName];
            }
        });*/

        done();
    }
}

var distCleaner = function(options){
     return function(files, metalsmith, done){

         //clean out the dist folder (for sanity)
         del.sync(['dist/**', '!dist', //clear out dist, but not dist itself
            '!dist/bundle.js', '!dist/main.css', //don't clear the js or css'
            '!dist/fonts', '!dist/fonts/**', //don't clear the fonts'
            '!dist/images', '!dist/images/**',]); //and don't clear the images'

         done();
     }
} 

var hbsConfig = {
    engine: 'handlebars',
    directory: "src/html/layouts",
    partials: "src/html/components"
}

Metalsmith(__dirname)
  .metadata({
    sitename: "me",
    siteurl: "https://ijmccallum.github.io/",
    description: "All about me"
  })
  .source('./src/html/pages/')
  .destination('./')
  .clean(false)
  .use(distCleaner())
  .use(helpers({
      "directory": "src/html/helpers"
  }))
  .use(inplace(hbsConfig))
  .use(layouts(hbsConfig))
  .use(builder())
  .use(debug())
  .build(function(err) {
    if (err) {
        conole.log('metalsmith build error: ', err);
    };
  });
