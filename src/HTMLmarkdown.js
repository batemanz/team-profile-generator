// template for README.md  to be filled out by user
function HTMLmarkdown(data) {
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
      <div class="cardContainer">
        <p class="name">${data.name}</p>
        <p class="id">${data.id}</p>
        <p class="email">${data.email}</p>
        <p class="officeNumber">${data.officeNumber}</p>
        <p class="github">${data.github}</p>
        <p class="school">${data.school}</p>
      </div>
    </div>
</body>
</html>
`;
}
  
  module.exports = HTMLmarkdown;