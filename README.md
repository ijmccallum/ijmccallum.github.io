 - Clone the repo, `npm install`, `npm install rollup http-server -g`.
 - Now begin: `npm start`

---

###Development (all in `/src`): 

 - `src/html` Metalsmith & Handlebars
     - `src/html/pages` the content
     - `src/html/layouts` the base layout (head / meta)
     - `src/html/components` reusable components are required within the pages using `{{> filename }}`
     - `src/html/helpers` js extensions for handlebars
 - `src/scss` same as usual, compiles to `dist/main.css`
 - `src/js` uses rollup to compile to `dist/bundle.js`
 - `dist/videos`, `dist/fonts`, `dist/images` - just static files. To add another folder of static assets you'll have to ignore it in the build.js `del.sync` function so it doesn't clear out your new files.
 
To change which pages get build into `/dist` look in build.js for `siteStructure` (you'll have to restarn `npm start`)

 ---

Delphic Staging links:

http://comcastdispute.linux.mydelphic.com/hub.html
http://comcastdispute.linux.mydelphic.com/hub-zip.html?zip=23002

http://comcastdispute.linux.mydelphic.com/hub-es.html
http://comcastdispute.linux.mydelphic.com/hub-zip-es.html

http://comcastdispute.linux.mydelphic.com/fox.html
http://comcastdispute.linux.mydelphic.com/fox-es.html

http://comcastdispute.linux.mydelphic.com/univision.html
http://comcastdispute.linux.mydelphic.com/univision-es.html

http://comcastdispute.linux.mydelphic.com/yes.html
http://comcastdispute.linux.mydelphic.com/yes-es.html