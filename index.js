const TOKEN = '7acfb41840cba0fd10c38219837a57ccde2ad98b'
const userName = 'LiliFelsen'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`
const repoURL = `${baseApi}repos/${fork}/forks`
const issueURL = `${baseApi}repos/${fork}/issues`

function getIssues() {
  fetch(issueURL, {
    method: 'GET',
    headers: {
      Authorization: `token ${TOKEN}`
    }
  }).then(response => response.json())
  .then(json => json.forEach(function(e) {
  showIssues(e)}))
}

function showIssues(data) {
  console.log(data)
 $('#issues').append(`<a href="${data.html_url}">${data.html_url}</a><br>`)
}

function createIssue() {
  let title = $('#title').val()
  let text = $('#text').val()
  let issueData = {title: title, body: text}
  fetch(issueURL, {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${TOKEN}`
    }
  }).then(response => response.json())
  .then(json => getIssues())
}

function showResults(json) {
}

function showForkedRepo(data) {
  console.log(data)
 $('#results').append(`<a href="${data.svn_url}">${data.svn_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(repoURL, {
    method: 'POST',
    headers: {
      Authorization: `token ${TOKEN}`
    }
  }).then(response => response.json())
  .then(json => showForkedRepo(json))
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
