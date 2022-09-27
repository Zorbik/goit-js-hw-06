const inputData = document.querySelector("#validation-input");

const changeBorderColor = () => {
  if (inputData.value.length == inputData.getAttribute("data-length")) {
    inputData.className = "valid";
  } else if (!inputData.value.length) {
    inputData.className = "";
  } else {
    inputData.className = "invalid";
  }
};

// inputData.addEventListener("blur", changeBorderColor);
inputData.addEventListener("input", changeBorderColor);
