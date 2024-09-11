function sendNotification(email) {
  if (
    email.indexOf('@') === -1 ||
    typeof email !== "string" ||
    email.indexOf('@') !== email.lastIndexOf('@')
  ) {
    return "Invalid Email";
  } else {
    let parts = email.split("@");
    let username = parts[0];
    let domainName = parts[1];
    return `${username} sent you an email from ${domainName}`;
  }
}
