function calculateTax(income, expenses) {
  if (
    income < 0 ||
    expenses < 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  } else {
    let totalPorfit = income - expenses;
    let tax = totalPorfit * 0.2;
    return tax;
  }
}

function sendNotification(email) {
  if (
    email.indexOf("@") === -1 ||
    typeof email !== "string" ||
    email.indexOf("@") !== email.lastIndexOf("@")
  ) {
    return "Invalid Email";
  } else {
    let parts = email.split("@");
    let username = parts[0];
    let domainName = parts[1];
    return `${username} sent you an email from ${domainName}`;
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  let checkValidatin = /\d/.test(name);
  if (checkValidatin) {
    return true;
  } else {
    return false;
  }
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean" ||
    testScore > 50 ||
    schoolGrade > 30
  ) {
    return "Invalid Input";
  }

  let totalScor = testScore + schoolGrade;
  if (isFFamily) {
    totalScor += 20;
  }
  if (totalScor >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totalTimes = 0;
  for (const waitingTime of waitingTimes) {
    totalTimes += waitingTime;
  }

  let mySeriaCount = serialNumber - waitingTimes.length - 1;
  if (mySeriaCount <= 0) {
    return 0;
  }
  let avarageTime = totalTimes / waitingTimes.length;
  return mySeriaCount * Math.round(avarageTime);
}
