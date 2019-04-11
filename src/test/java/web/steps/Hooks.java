package web.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import global_methods.Configuration;
import global_methods.Driver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.io.File;

public class Hooks {
    /**
     * Before Hook
     * Always executed Before each Scenario
     * Generates the WebDriver
     */
    @Before("@Selenium")
    public void beforeScenario(Scenario scenario) throws Exception {
        Configuration.load();
        Configuration.print();
        System.setProperty("webdriver.chrome.driver", new File("src/drivers/chromedriver").getAbsolutePath());
        //DesiredCapabilities cap = new DesiredCapabilities();

        ChromeOptions options = new ChromeOptions();
        //options.addArguments("headless");
        Driver.add(Configuration.get("browser"),options);
    }

    @After("@Selenium")
    public void afterScenario(Scenario scenario){
        Driver.getDriver().quit();
    }
}
