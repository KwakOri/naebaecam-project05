export const validateInputs = ({ date, category, cost, description }) => {
  if (!date || !category || !cost || !description) {
    alert("모든 항목을 입력해주세요!");
    return { result: false, errorType: "empty" };
  }
  const trimedDate = date.replace(/(\s*)/g, "").split("-");
  if (
    trimedDate.length !== 3 ||
    trimedDate[1] < 0 ||
    trimedDate[1] > 12 ||
    trimedDate[2] < 0 ||
    trimedDate[2] > 31
  ) {
    alert("올바른 날짜를 입력해주세요!");
    return { result: false, errorType: "invalidDate" };
  }
  return { result: true };
};

export const validateSignupInputs = (formData) => {
  const res = {
    result: true,
    error: {
      accountId: "",
      password: "",
      nickname: "",
      passwordConfirm: "",
    },
  };
  const { accountId, password, passwordConfirm, nickname } = formData;
  if (accountId.length < 4 || accountId.length > 10) {
    res.error.accountId = "아이디는 4~10자 사이만 가능합니다.";
    res.result = false;
  }
  if (password.length < 4 || password.length > 15) {
    res.error.password = "비밀번호는 4~15자 사이만 가능합니다.";
    res.result = false;
  }
  if (password !== passwordConfirm) {
    res.error.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    res.result = false;
  }
  if (nickname.length < 2 || nickname.length > 10) {
    res.error.nickname = "닉네임은 2~10자 사이만 가능합니다.";
    res.result = false;
  }
  return res;
};
