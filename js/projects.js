let selectedId;

const imgContainer = document.querySelector("#easy-app .img-container");
// 假設每個project有特定利率
// 先都預設14
const projectRateList = [
  {
    name: "travelLoan",
    id: 1,
    rate: 14,
  },
  {
    name: "teacherLoan",
    id: 2,
    rate: 14,
  },
  {
    name: "furnitureLoan",
    id: 3,
    rate: 14,
  },
  {
    name: "experienceLoan",
    id: 4,
    rate: 14,
  },
  {
    name: "studyLoan",
    id: 5,
    rate: 14,
  },
  {
    name: "youthLoan",
    id: 6,
    rate: 14,
  },
];

document.querySelectorAll(".single-client").forEach((element) => {
  element.addEventListener("click", (e) => {
    selectedId = e.target.id.slice(8);
    // console.log(selectedId);
    //在特定id的element加class, 使其display block
    const targetProject = document.querySelector(`#detail_${selectedId}`);
    if (!targetProject || !imgContainer) return;

    const project = projectRateList.find(
      (item) => item.id === Number(selectedId)
    );

    const targetProjectRate = project ? project.rate : 14;

    hideAllDetail();
    targetProject.classList.remove("d-none");
    // targetProject.classList.add("d-block");

    createCalculator(targetProject, targetProjectRate);

    imgContainer.style.marginTop = "20px";
  });
});

function createCalculator(projectId, lendingRate) {
  var SelectedAmount,
    selectedTime = {},
    RateOfInterestTime,
    RateOfInterestAmount,
    SelectedRoi;

  if (typeof wNumb !== "undefined") {
    var AmountFormat = wNumb({
      decimals: 0,
      thousand: ",",
      prefix: "$",
    });
    var AmountFormatNoMerge = wNumb({
      decimals: 0,
      thousand: ",",
    });

    var TimeFormatMonths = wNumb({
      suffix: " months",
    });
  }

  //Slider Elements
  var mySlider = projectId.querySelector(".RangeSlider");
  var mySliderMonth = projectId.querySelector(".MonthRangeSlider");

  if (mySlider.noUiSlider) {
    mySlider.noUiSlider.destroy();
  }

  if (mySliderMonth.noUiSlider) {
    mySliderMonth.noUiSlider.destroy();
  }

  function clickOnPip(sliderName, This) {
    var value = Number(This.getAttribute("data-value"));
    sliderName.noUiSlider.set(value);
  }

  function SetPipsOnSlider(PipsName, sliderName) {
    for (var i = 0; i < PipsName.length; i++) {
      PipsName[i].style.cursor = "pointer";
      PipsName[i].addEventListener("click", function () {
        clickOnPip(sliderName, this);
      });
    }
  }

  //   Activate Range Sliders

  if (mySlider && mySliderMonth) {
    noUiSlider.create(mySlider, {
      start: [170],
      connect: "lower",
      range: {
        min: 20,
        max: 500,
      },
      format: wNumb({
        decimals: 0,
      }),
      pips: {
        mode: "values",
        density: 100,

        values: [20, 100, 200, 300, 400, 500],
        stepped: true,
        format: wNumb({
          encoder: function (a) {
            // return a / 1000;
            return a;
          },
          decimals: 0,
          prefix: "$",
          // suffix: "k",
          suffix: "M",
        }),
      },
    });
    noUiSlider.create(mySliderMonth, {
      start: [18],
      connect: "lower",
      range: {
        min: 12,
        max: 60,
      },
      format: wNumb({
        decimals: 0,
      }),
      pips: {
        mode: "values",
        density: 100,

        values: [12, 18, 24, 30, 36, 42, 48, 54, 60],
        stepped: true,
        format: wNumb({
          decimals: 0,
        }),
      },
    });
    //Slider Pips
    var pips = mySlider.querySelectorAll(".noUi-value");
    var pipsMonth = mySliderMonth.querySelectorAll(".noUi-value");

    //Slider Input Element
    var inputMonthFormat = projectId.querySelector(".SetMonthRange");
    var inputFormat = projectId.querySelector(".SetRange");

    SetPipsOnSlider(pips, mySlider);
    SetPipsOnSlider(pipsMonth, mySliderMonth);
    mySlider.noUiSlider.on("update", function (values, handle) {
      SelectedAmount = AmountFormat.from(values[handle]);
      CalculateAmount(lendingRate);
    });

    inputFormat.addEventListener("change", function () {
      mySlider.noUiSlider.set(this.value);
    });
    mySliderMonth.noUiSlider.on("update", function (values, handle) {
      selectedTime = {
        type: "month",
        value: TimeFormatMonths.from(values[handle]),
      };

      CalculateAmount(lendingRate);
    });

    inputMonthFormat.addEventListener("change", function () {
      mySliderMonth.noUiSlider.set(this.value);
    });
  }

  function CalculateAmount(TotalRateOfInterest) {
    var monthlyRate = (TotalRateOfInterest * 0.01) / 12;

    if (monthlyRate === 0) {
      console.error("TotalRateOfInterest cannot be zero for this calculation.");
    } else {
      var factor = Math.pow(1 + monthlyRate, selectedTime.value * 12);
      var MinimumMonthlyPayment =
        (SelectedAmount * (factor * monthlyRate)) / (factor - 1);
    }

    inputFormat.value = AmountFormatNoMerge.to(SelectedAmount);

    if ($(inputMonthFormat).hasClass("noTextMerge")) {
      inputMonthFormat.value = selectedTime.value;
    } else {
      inputMonthFormat.value = selectedTime.value + " " + selectedTime.type;
    }

    if (selectedTime.type) {
      $(".loanTermIndicator").text(selectedTime.type.charAt(0));
    }

    $(".emiAmount").text(
      AmountFormat.to(MinimumMonthlyPayment * 1000000) + "（VND）"
    );
  }
}

function hideAllDetail() {
  const allDetail = document.querySelectorAll(".detail");
  allDetail.forEach((element) => {
    element.classList.add("d-none");
  });
  imgContainer.style.marginTop = "-150px";
}
