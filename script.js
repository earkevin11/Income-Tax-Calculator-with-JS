// TOP MARGINAL STATE TAXES AS OF 01/03/2023 //
var ALABAMA_STATE_TAX = 5;
var ALASKA_STATE_TAX = 0;
var ARIZONA_STATE_TAX = 2.5;
var ARKANSAS_STATE_TAX = 4.7;
var COLORADO_STATE_TAX = 4.4;
var CALIFORNIA_STATE_TAX =  12.3;
var CONNECTICUT_STATE_TAX = 6.99;
var DELAWARE_STATE_TAX = 6.6;
var DC_STATE_TAX = 10.75;
var FLORIDA_STATE_TAX = 0;
var GA_STATE_TAX = 5.75;
var HAWAII_STATE_TAX = 11;
var IDAHO_STATE_TAX = 5.8; 
var ILLINOIS_STATE_TAX = 4.95;
var INDIANA_STATE_TAX = 3.15;
var IOWA_STATE_TAX = 6;
var KANSAS_STATE_TAX = 5.7;
var KENTUCKY_STATE_TAX = 4.5;
var LOUISIANA_STATE_TAX = 4.25;
var MAINE_STATE_TAX = 7.15;
var MARYLAND_STATE_TAX = 5.75;
var MASSACHUSETTS_STATE_TAX = 9;
var MICHIGAN_STATE_TAX = 4.05;
var MINNESOTA_STATE_TAX = 9.85;
var MISSISSIPPI_STATE_TAX = 5;
var MISSOURI_STATE_TAX = 4.95;
var MONTANA_STATE_TAX = 6.75;
var NEBRASKA_STATE_TAX = 6.64;
var NEVADA_STATE_TAX = 0;
var NEWHAMPSHIRE_STATE_TAX = 0;
var NEW_JERSEY_STATE_TAX = 10.75;
var NEW_MEXICO_STATE_TAX = 5.9;
var NEW_YORK_STATE_TAX = 10.9;
var NORTH_CAROLINA_STATE_TAX = 4.75;
var NORTH_DAKOTA_STATE_TAX = 2.5;
var OHIO_STATE_TAX = 3.75;
var OKLAHOMA_STATE_TAX = 4.75;
var OREGON_STATE_TAX = 9.9;
var PENNSYLVANIA_STATE_TAX = 3.07;
var RHODE_ISLAND_STATE_TAX = 5.99;
var SOUTH_CAROLINA_STATE_TAX = 6.4
var SOUTH_DAKOTA_STATE_TAX = 0;
var TENNESEE_STATE_TAX = 0;
var TEXAS_STATE_TAX = 0;
var UTAH_STATE_TAX = 4.65;
var VERMONT_STATE_TAX = 8.75;
var VIRGINIA_STATE_TAX = 5.75;
var WASHINGTON_STATE_TAX = 0;
var WEST_VIRGINIA_STATE_TAX = 5.12;
var WISCONSIN__STATE_TAX = 7.65;
var WYOMING_STATE_TAX = 0;

var FICA_TAX_RATE = 0.08;

// Function to get state tax rate based on the selected state
function getStateTaxRate(selectedState) {
  switch (selectedState) {
      case 'AL': return ALABAMA_STATE_TAX;
      case 'AK': return ALASKA_STATE_TAX;
      case 'AZ': return ARIZONA_STATE_TAX;
      case 'AR': return ARKANSAS_STATE_TAX;
      case 'CO': return COLORADO_STATE_TAX;
      case 'CA': return CALIFORNIA_STATE_TAX;
      case 'CT': return CONNECTICUT_STATE_TAX;
      case 'DE': return DELAWARE_STATE_TAX;
      case 'DC': return DC_STATE_TAX;
      case 'FL': return FLORIDA_STATE_TAX;
      case 'GA': return GA_STATE_TAX;
      case 'HI': return HAWAII_STATE_TAX;
      case 'ID': return IDAHO_STATE_TAX;
      case 'IL': return ILLINOIS_STATE_TAX;
      case 'IN': return INDIANA_STATE_TAX;
      case 'IA': return IOWA_STATE_TAX;
      case 'KS': return KANSAS_STATE_TAX;
      case 'KY': return KENTUCKY_STATE_TAX;
      case 'LA': return LOUISIANA_STATE_TAX;
      case 'ME': return MAINE_STATE_TAX;
      case 'MD': return MARYLAND_STATE_TAX;
      case 'MA': return MASSACHUSETTS_STATE_TAX;
      case 'MI': return MICHIGAN_STATE_TAX;
      case 'MN': return MINNESOTA_STATE_TAX;
      case 'MS': return MISSISSIPPI_STATE_TAX;
      case 'MO': return MISSOURI_STATE_TAX;
      case 'MT': return MONTANA_STATE_TAX;
      case 'NE': return NEBRASKA_STATE_TAX;
      case 'NV': return NEVADA_STATE_TAX;
      case 'NH': return NEWHAMPSHIRE_STATE_TAX;
      case 'NJ': return NEW_JERSEY_STATE_TAX;
      case 'NM': return NEW_MEXICO_STATE_TAX;
      case 'NY': return NEW_YORK_STATE_TAX;
      case 'NC': return NORTH_CAROLINA_STATE_TAX;
      case 'ND': return NORTH_DAKOTA_STATE_TAX;
      case 'OH': return OHIO_STATE_TAX;
      case 'OK': return OKLAHOMA_STATE_TAX;
      case 'OR': return OREGON_STATE_TAX;
      case 'PA': return PENNSYLVANIA_STATE_TAX;
      case 'RI': return RHODE_ISLAND_STATE_TAX;
      case 'SC': return SOUTH_CAROLINA_STATE_TAX;
      case 'SD': return SOUTH_DAKOTA_STATE_TAX;
      case 'TN': return TENNESEE_STATE_TAX;
      case 'TX': return TEXAS_STATE_TAX;
      case 'UT': return UTAH_STATE_TAX;
      case 'VT': return VERMONT_STATE_TAX;
      case 'VA': return VIRGINIA_STATE_TAX;
      case 'WA': return WASHINGTON_STATE_TAX;
      case 'WV': return WEST_VIRGINIA_STATE_TAX;
      case 'WI': return WISCONSIN__STATE_TAX;
      case 'WY': return WYOMING_STATE_TAX;
      default: return 0; // Default to 0% if the state is not found
  }
}

function calculate() {
      // Fetch input values
      var income = parseFloat(document.getElementById('user_income').value);
      var contributionRate = parseFloat(document.getElementById('rate').value);
      var user_state = document.getElementById('state').value;




      // 0% Tax Rate
      if (income < 0) {
      // You didn't make money
      // Also handles errors for negative numbers
          document.getElementById("income_taxes").value = income 
      }
      // 10% Tax Rate
      else if (income >= 0 && income <= 11000) {
          var incomeTax = income * 0.10;
          document.getElementById("income_taxes").value = incomeTax;
      }
      // 12% Tax Rate
      else if (income >= 11001 && income <= 44725) {
          var incomeTax = 1100 + (0.12 * (income - 1100));
          document.getElementById("income_taxes").value = incomeTax;
      }
      // 22% Tax Rate
      else if (income >= 44726 && income <= 95375) {
          var incomeTax = 5147 + (.22 * (income - 44725));
          document.getElementById("income_taxes").value = incomeTax;
      }
      // 24% Tax Rate
      else if (income >= 95376 && income <= 182100) {
          var incomeTax = 16290 + (.24 * (income - 95375));
          document.getElementById("income_taxes").value = incomeTax;
      }
      // 32% Tax Rate
      else if (income >= 182101 && income <= 231250) {
          var incomeTax = 37104 + (.32 * (income - 182100));
          document.getElementById("income_taxes").value = incomeTax;
      }

      // 35% Tax Rate
      else if (income >= 231251 && income <= 578125) {
          var incomeTax = 86254 + (.35 * (income - 231250));
          document.getElementById("income_taxes").value = incomeTax;
      }

      // 37% Tax Rate
      else if (income >= 578126) {
          var incomeTax = 433129 + (.37 * (income - 578125));
          document.getElementById("income_taxes").value = incomeTax;
      }

          // Validate input
      if (isNaN(income) || isNaN(contributionRate) || contributionRate < 0 || contributionRate > 100) {
      alert("Please enter valid numbers for income and contribution rate.");
      return;
      }



      // Get the state tax rate based on the user's selected state
      var stateTaxRate = getStateTaxRate(user_state);
      


      // Update the value of the hidden input
      document.getElementById("income_taxes").value = incomeTax;

      // Variables that we will use to store our calculations
      var ficaTaxes = income * FICA_TAX_RATE;  // FICA Taxes
      var retirementContributions = income * contributionRate / 100; // 401k savings total
      var taxableIncome = income - retirementContributions;  // taxableIncome is after deductions
      // Calculate state income tax
      var stateIncomeTax = taxableIncome * stateTaxRate / 100;
      var netIncome = taxableIncome - (ficaTaxes + stateIncomeTax + incomeTax)  // After-tax income

    
      // Display results
      document.getElementById('result1').innerHTML = '$' + incomeTax.toFixed(2);
      document.getElementById('result2').innerHTML = '$' + ficaTaxes.toFixed(2);
      document.getElementById('result3').innerHTML = '$' + stateIncomeTax.toFixed(2);
      document.getElementById('result4').innerHTML = '$' + taxableIncome.toFixed(2);
      document.getElementById('result5').innerHTML = '$' + netIncome.toFixed(2);
      document.getElementById('result6').innerHTML = '$' + retirementContributions.toFixed(2);

      }