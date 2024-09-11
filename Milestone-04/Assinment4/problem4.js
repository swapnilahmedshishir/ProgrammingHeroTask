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
  console.log(totalScor);

  if (totalScor >= 80) {
    return true;
  } else {
    return false;
  }
}
