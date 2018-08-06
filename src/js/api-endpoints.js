var env = require('./env')

var local = 'http://localhost:55881' // eslint-disable-line
var dev = 'https://ssn-api-dev.azurewebsites.net' // eslint-disable-line
var staging = 'https://ssn-api-uat.azurewebsites.net' // eslint-disable-line
var live = 'https://ssn-api-prod.azurewebsites.net' // eslint-disable-line

var envs = [local, dev, staging, live]

function p (addr) {
  return envs[env] + addr
}

module.exports = {
  prefix: p,
  cities: p('/v1/cities/'),
  pledges: p('/v1/approved-charter-supporters'),
  pledgesHal: p('/v2/approved-charter-supporters'),
  makeAPledge: p('/v1/charter-supporters'),
  serviceCategories: p('/v2/service-categories/'),
  actionGroups: p('/v1/action-groups'),
  latestStatistics: p('/v1/statistics/latest')
}
