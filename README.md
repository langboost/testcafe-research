TestCafe Research
===

This will give you experience using the [TestCafe](https://devexpress.github.io/testcafe/) tool, and be a chance to show off your automation skills!

Setup
---
On your computer (this should work for both Mac and Windows), you will need to install these tools:
* [VS Code](https://code.visualstudio.com/download)
* [Chrome](https://www.google.com/chrome/browser/)
* [Node.js](https://nodejs.org/en/download/)

Once these are installed, run the command below from the root of this repository. (from a terminal on Mac or a DOS prompt on Windows 10).

```
npm install
```

Now, you should be able to see the homepage tests succeed by running this command:

```
npm run homepage-test
```

You should see the test pass, as it evaluates a website in your Chrome browser.

Your assignment
---

1) Get familiar with the existing code base. What are the homepage tests testing?
    - Hint: look in src/homepage-tests.js
2) How does the system know what you mean by typing "yarn homepage-test"?
    - Hint: look in package.json
3) Look at the documentation for Test Cafe online. Can you complete the command in package.json named "run-all-tests"? See if you can get this command working: ```npm run run-all-tests```.
4) Add a new file named src/county-test.js and create a test which verifies the following:
    - Given the user navigates to ___ county (such as Garfield, or any other county)
    - When the user navigates
    - Then
        - The page will contain the county treasurer's name ___ ___.
        - The page will contain an image of the treasurer within ```<div class="img-area">...</div>```
    - Run the run-all-tests command and verify your new tests pass.
5) Add a new file named src/search-tests.js which verifies the following:
    - Given the user navigates to https://www.tmconsulting.us/uat/searchTaxRoll/Garfield
    - When the user searches by first / last name for last name "Smith", and first name "" for tax years 2018-2019:
    - Then
        - (Your turn! Be creative - What assertions can be made, which test that the search is working, but also protect the test from being fragile, and breaking as the data changes over time?)
