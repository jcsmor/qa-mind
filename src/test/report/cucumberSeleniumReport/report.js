$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/main.feature");
formatter.feature({
  "line": 1,
  "name": "sort list",
  "description": "",
  "id": "sort-list",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2159285898,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "I want to sort a list from lower to higher",
  "description": "",
  "id": "sort-list;i-want-to-sort-a-list-from-lower-to-higher",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Selenium"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user navigates to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user gets several numerated rows",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user sort the rows by drag and drop them from the lowest value to the top.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "confirm that rows are sorted.",
  "keyword": "And "
});
formatter.match({
  "location": "SortSteps.java:16"
});
formatter.result({
  "duration": 501153842,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:20"
});
formatter.result({
  "duration": 75684809,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:24"
});
formatter.result({
  "duration": 769676386,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:28"
});
formatter.result({
  "duration": 92437179,
  "status": "passed"
});
formatter.after({
  "duration": 81698358,
  "status": "passed"
});
});