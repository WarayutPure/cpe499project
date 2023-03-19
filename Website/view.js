const model = require("./model");

function render(contents){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mali|Comfortaa">
    <style>
        body{
            font-family: Mali;
        }
        li{
            font-family: Comfortaa;
            color: yellowgreen;
        }
    </style>
    <title>About Me</title>
</head>
<body>
        ${contents
            .map ((content) => `<div class="slideshow-item"><h2>${content.title}</h2><p>${content.desc}</p></div>`)
            .join('')
        }
    </div>
</body>
<footer>
    <section class="ft-main">
        <div class="ft-main-item">
            <h2 class="ft-title">Socail</a></h2>
            <ul>
            <li><a href="https://www.facebook.com/Warayout.hansuwan13/">Facebook</a></li>
            <li><a href="https://www.instagram.com/p.pure_wh/">Instagram</a></li>
        </ul>
        </div>
        <div class="ft-main-item">
            <h2 class="ft-title">Subject : CPE499-Node JS</a></h2>
        </div>
    </section>
</footer>
</html>
`
}

module.exports = render;