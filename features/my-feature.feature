Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page

  Scenario: Get size of an element
    Given I go on the website "https://google.com/"
    Then  should the element "#hplogo" be 272px wide and 201px high

  Scenario: Get title of website
    Given I go on the website "https://google.com/"
    Then  should the title of the page be "Google"
