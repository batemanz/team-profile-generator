// template for README.md  to be filled out by user
function HTMLmarkdown(managersCards, engineerCards,  internCards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <div class="container">
  ${managersCards.map((card) => {
    return card;
  })}
  ${engineerCards.map((card) => {
    return card;
  })}
  ${internCards.map((card) => {
    return card;
  })}
  </div>
</body>
</html>
`;
}
  
module.exports = HTMLmarkdown;