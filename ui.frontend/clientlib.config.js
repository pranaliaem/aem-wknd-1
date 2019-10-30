module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/wknd/clientlibs",

    libs: [
        {
            name: "clientlib-site",
            allowProxy: true,
            categories: ["wknd.site"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/clientlib-site/vendors~site.*.js",
                    "dist/clientlib-site/site.*.js"
                ],
                css: [
                    "dist/clientlib-site/vendors~site.*.css",
                    "dist/clientlib-site/site.*.css"
                ],
                resources: [
                    {src: "dist/clientlib-site/resources/fonts/*.*", dest: "fonts/"},
                    {src: "dist/clientlib-site/resources/images/country-flags/*.svg", dest: "images/country-flags"}
                ]
            }
        }
    ]
};
