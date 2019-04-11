Feature: sort list
  @Selenium
  Scenario: I want to sort a list from lower to higher

    Given the user navigates to the page
    When the user gets several numerated rows
    Then the user sort the rows by drag and drop them from the lowest value to the top.
    And confirm that rows are sorted.