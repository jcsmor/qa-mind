$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/main.feature");
formatter.feature({
  "line": 1,
  "name": "sort list",
  "description": "",
  "id": "sort-list",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1476000975,
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
  "duration": 15275481450,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Element By.cssSelector: div \u003e ul \u003e li not found (tried for 15 second(s) with 50 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat global_methods.ECMethods.waitForVisibilityOfElement(ECMethods.java:24)\n\tat page_objects.Sort.goToPage(Sort.java:23)\n\tat web.steps.SortSteps.lambda$new$0(SortSteps.java:17)\n\tat ✽.Given the user navigates to the page(src/test/java/features/main.feature:5)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: div \u003e ul \u003e li\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-BOLD.local\u0027, ip: \u0027fe80:0:0:0:c9f:c2c9:3334:6249%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\n\tat global_methods.AdditionalConditions$1.apply(AdditionalConditions.java:35)\n\tat global_methods.AdditionalConditions$1.apply(AdditionalConditions.java:29)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat global_methods.ECMethods.waitForVisibilityOfElement(ECMethods.java:24)\n\tat page_objects.Sort.goToPage(Sort.java:23)\n\tat web.steps.SortSteps.lambda$new$0(SortSteps.java:17)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.Java8StepDefinition.execute(Java8StepDefinition.java:115)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat cucumber.api.cli.Main.run(Main.java:36)\n\tat cucumber.api.cli.Main.main(Main.java:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "SortSteps.java:20"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortSteps.java:24"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortSteps.java:28"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 69307661,
  "status": "passed"
});
});