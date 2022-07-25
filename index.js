/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from './libs/test.js'

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from 'lodash'
const source = $t.source(1)
$t.answer(1, async () => {

  const restaurantsIncome = []
  const incomeEarnings = []
  const groceriesIncome = []
  const rentIncome = []

  source.forEach(business => {
    if(business.category == "Restaurants" && business.type == "income"){
        restaurantsIncome.push(business.amount)
      }
      if(business.category == "Income" && business.type == "income"){
        incomeEarnings.push(business.amount)
        
      }
      if(business.category == "Groceries" && business.type == "income"){
        groceriesIncome.push(business.amount)
      }
      if(business.category == "Rent" && business.type == "income"){
        rentIncome.push(business.amount)
        
      }
  })

  const restaurantExpenses = []
  const incomeExpenses = []
  const groceriesExpenses = []
  const rentExpenses = []

  source.forEach(business => {
    if(business.category == "Restaurants" && business.type == "expense"){
        restaurantExpenses.push(business.amount)
      }
      if(business.category == "Income" && business.type == "expense"){
        incomeExpenses.push(business.amount )
        
      }
      if(business.category == "Groceries" && business.type == "expense"){
        groceriesExpenses.push(business.amount )
      }
      if(business.category == "Rent" && business.type == "expense"){
        rentExpenses.push(business.amount )
        
      }
  })
  
  let totalRestaurantsIncome = restaurantsIncome.length > 0 ? restaurantsIncome.reduce((a,b)=> a+b) : 0
  let totalIncomeEarnings = incomeEarnings.length > 0 ? incomeEarnings.reduce((a,b)=> a+b) : 0
  let totalGroceriesIncome = groceriesIncome.length > 0 ? groceriesIncome.reduce((a,b)=> a+b):0
  let totalRentIncome = rentIncome.length > 0 ? rentIncome.reduce((a,b)=> a+b): 0
  
  let income =  [
    totalRestaurantsIncome,
    totalIncomeEarnings,
    totalGroceriesIncome,
    totalRentIncome
  ]
  
  let totalRestaurantsExpenses = restaurantExpenses.length > 0 ? restaurantExpenses.reduce((a,b)=> a+b):0
  let totalIncomeExpenses = incomeExpenses.length > 0 ? incomeExpenses.reduce((a,b)=> a+b):0
  let totalGroceriesExpenses = groceriesExpenses.length > 0 ? groceriesExpenses.reduce((a,b)=> a+b):0
  let totalRentExpenses = rentExpenses.length > 0 ? rentExpenses.reduce((a,b)=> a+b):0
  
  let expenses = [
    totalRestaurantsExpenses,
    totalIncomeExpenses,
    totalGroceriesExpenses,
    totalRentExpenses
  ]
  

  const totalIncome = income.reduce((a,b)=> a+b)
  const totalExpenses = expenses.reduce((a,b)=> a+b)

  const targetData = {
    balance: totalIncome - totalExpenses,
    income: totalIncome,
    expenses: totalExpenses,
    byCategories :{
      Restaurants: income[0] - expenses[0],
      Income: income[1] - expenses[1],
      Groceries: income[2] - expenses[2],
      Rent: income[3] - expenses[3]
    }
  }
  
  return targetData
})

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2)
$t.answer(2, async () => {
    const ids = await $source.getIds()
    const text = await Promise.all(ids.map(async (id)=> await $source.getText(id)))
    
    return text
})