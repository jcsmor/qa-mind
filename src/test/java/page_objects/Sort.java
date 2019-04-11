package page_objects;

import global_methods.*;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by Joao Moreira on 10/04/2019.
 */
public class Sort {

    // Selector constants
    private static final By ITEM_LIST = By.cssSelector("div > ul > li");

    // Methods
    public static void goToPage(WebDriver driver) {
        WebDriverMethods.getUrl(driver, Configuration.get("url"));
        ECMethods.waitForVisibilityOfElement(driver, ITEM_LIST);
    }

    public static void getRows(WebDriver driver) {
        ECMethods.waitForVisibilityOfAllElements(driver, ITEM_LIST);
    }

    public static void sortRows(WebDriver driver) {
        Actions action = new Actions(driver);
        List<WebElement> unOrderedList = ECMethods.waitForVisibilityOfAllElements(driver, ITEM_LIST);
        for (int i = 0; i <= unOrderedList.size() - 1; i++) {
            for (int j = 0; j <= unOrderedList.size() - 1; j++) {
                String elementText = unOrderedList.get(j).getText();
                if (elementText.contains("Item " + i)) {
                    action.click(unOrderedList.get(j)).clickAndHold().moveToElement(unOrderedList.get(i)).moveByOffset(0, 10)
                            .release().build().perform();
                }
            }
        }
    }

    public static boolean validateOrder(WebDriver driver) {
        List<WebElement> orderedList = ECMethods.waitForVisibilityOfAllElements(driver, ITEM_LIST);
        for (int i = 0; i <= orderedList.size() - 1; i++) {
            if (!(orderedList.get(i).getText().contains("Item " + i))) {
                return false;
            }
        }
        return true;
    }
}