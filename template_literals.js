function makeGreeting(name, email, id) {
  return (
    "Hello, " +
    name +
    ". We've emailed you at " +
    email +
    '. Your user id is "' +
    id +
    '".'
  );
}
console.log(makeGreeting('Peizhi', 'zpz@gmail.com', '23232'))

// Hello, Peizhi. We've emailed you at zpz@gmail.com. Your user id is "23232".
// add quotes using  backticks

function makeGreeting1(name, email, id) {
  return (
    `Hello, ${name}. We've emailed you at "${email}". Your user id is '${id}'.`
  );
}
console.log(makeGreeting1("Peizhi", "zpz@gmail.com", "23232"));

//Hello, Peizhi. We've emailed you at "zpz@gmail.com". Your user id is '23232'.

function makeGreetingTemplate(name, email, id) {
  return `
    <div>
      <h1>Hello, ${name}</h1>
      <p>
        We've email you at ${email}.
        Your user id is "${id}".
      </p>
    </div>
  `;
}