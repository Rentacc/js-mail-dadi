let emails = [
    "email1@gmail.com",
    "email2@hotmail.com",
    "email3@yahoo.com",
    "email4@outlook.com",
    "email5@live.com"
  ];

  var insert_email = prompt("Inserisci la tua email");

  if (emails.includes(insert_email)) {
    alert("Accesso consentito!");
  } else {
    alert("Accesso non autorizzato!");
  }

