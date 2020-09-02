module.exports = {
    HTML:function(title, list, body, control, authStatusUI=`<a href="/api/session/login">login</a>`){
        return `
        <!doctype html>
        <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        <head>
        <body>
            ${authStatusUI}
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        </html>
        `
    }
}