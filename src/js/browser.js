/*
  global ga
*/

var Spinner = require('spin.js')

var redirect = function (url) {
  window.location = url
}

var loaderAnim
var getLoader = function () {
  if (loaderAnim === undefined) {
    loaderAnim = new Spinner()
  }
  return loaderAnim
}

var loading = function () {
  getLoader().spin(document.getElementById('spin'))
}

var loaded = function () {
  getLoader().stop()
}

var getInputField = function (inputSelector) {
  return 'some string' // checkboxes should return boolean
}

var showError = function (fieldName, message) {
  return 'wang'
}

var trackEvent = function (src, action, description) {
  ga('send', 'event', src, action, description)
}

module.exports = {
  redirect: redirect,
  loading: loading,
  loaded: loaded,
  trackEvent: trackEvent,
  getInputField: getInputField,
  showError: showError
}