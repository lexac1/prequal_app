$(document).ready(function () {
  getPrequalData();
})

var getPrequalData = function () {
  $('form').submit(function () {
    event.preventDefault();
    var data = $('form').serializeArray()
    var mortagageTypes = data[0].value
    var salesPrice = data[1].value
    var downPayment = data[2].name
    var income = data[3].value
    var liabilities = data[4].value

    if (mortagageType(mortagageTypes)){
      console.log('fha')
    }
    debtToIncomeRatio(income, liabilities)
  })
}

var mortagageType = function (mortagageTypes) {
  if (mortagageTypes === 'fha') {
    console.log(true)
  } else {
    console.log(false)
  }
}

var debtToIncomeRatio = function (income, liabilities) {
  if (income > 0) {
    $('.results').html('Approved')
  } else {
    $('.results').html('Not Approved')
  }
}
