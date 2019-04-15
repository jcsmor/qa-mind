$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/main.feature");
formatter.feature({
  "line": 1,
  "name": "sort list",
  "description": "",
  "id": "sort-list",
  "keyword": "Feature"
});
formatter.before({
  "duration": 872275206,
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
  "location": "SortSteps.java:15"
});
formatter.result({
  "duration": 356303088,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:19"
});
formatter.result({
  "duration": 72981441,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:23"
});
formatter.result({
  "duration": 748289911,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.java:27"
});
formatter.result({
  "duration": 90039206,
  "status": "passed"
});
formatter.after({
  "duration": 72643658,
  "status": "passed"
});
});