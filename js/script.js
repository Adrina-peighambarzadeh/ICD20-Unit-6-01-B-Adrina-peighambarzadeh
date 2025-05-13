 // Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-B-Adrina-peighambarzadeh/sw.js", {
    scope: "/ICD2O-Unit-6-01-B-Adrina-peighambarzadeh/",
  })
}
/**
 * This function calculate, doing multiplication
 */
// eslint-disable-next-line no-unused-vars
function doMultiplication () {
  // input
  let counter = 0
  let answer = 0
  const firstNumber = parseFloat(document.getElementById('first-number').value)
  const secondNumber = parseFloat(
    document.getElementById('second-number').value
  )

  // process
  while (counter < secondNumber) {
    counter = counter + 1
    answer = answer + firstNumber
  }
  // output
  document.getElementById('answer').innerHTML = 'Your answer is: ' + answer
}