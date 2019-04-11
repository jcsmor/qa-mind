package web.steps;

import cucumber.api.java8.En;
import global_methods.AssertionMethods;
import global_methods.Driver;
import page_objects.Sort;

import java.text.ParseException;


public class SortSteps extends Driver implements En {

    public SortSteps() {
        super();

        And("^(?:the user navigates to the page$)", () -> {
            Sort.goToPage(getDriver());
        });

        Then("^(?:the user gets several numerated rows$)", () -> {
            Sort.getRows(getDriver());
        });

        Then("^(?:the user sort the rows by drag and drop them from the lowest value to the top.$)", () -> {
            Sort.sortRows(getDriver());
        });

        Then("^(?:confirm that rows are sorted.$)", () -> {
            boolean isOrdered;
            isOrdered = Sort.validateOrder(getDriver());
            AssertionMethods.assertTrue(isOrdered);
        });
    }


}
