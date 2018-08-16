document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

let data = {
  firstName: 'Patrick',
  lastName: 'Scully',
  printName: function() {
    console.log(this.firstName)
  },
  
};

data.printName();
