import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags="@regression",format={"pretty","html:format"},plugin = {
        "pretty", "html:target/cucumber",
        "json:C:/Users/Rupal Patel/Desktop/newtours/com-newtours-test-framework/comguru99/target/cucumber.json"})
public class RunTest {
}
