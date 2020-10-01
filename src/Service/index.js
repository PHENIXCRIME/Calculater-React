function calculater(setGroupNum1, groupNum1, operators, groupNum2) {
  switch (operators) {
    case "+":
      setGroupNum1(parseInt(groupNum2) + parseInt(groupNum1));
      break;
    case "-":
      setGroupNum1(parseInt(groupNum2) - parseInt(groupNum1));
      break;
    case "*":
      setGroupNum1(parseInt(groupNum2) * parseInt(groupNum1));
      break;
    default:
      setGroupNum1(parseInt(groupNum2) / parseInt(groupNum1));
      break;
  }
  return setGroupNum1;
}
export default calculater;
