import { Selector } from 'testcafe';

fixture `TMConsulting - UAT - Homepage`
    .page `https://www.tmconsulting.us/uat/`;

const countySelect = Selector('div.select-county').find('select[name="county"]');
const countyOption = countySelect.find('option');

const mapPinGarfield = Selector('div.map-pin.garfield');
const blinkGarfield = mapPinGarfield.find('a span.blink');
const divCountyInfoGarfield = mapPinGarfield.find('div.county-info');

test('Homepage - DB connectivity and sanity checks', async t => {
    /*
    Given
        (no pre-conditions for this test)

    When
        - the user navigates to the home page
    Then
        - the drop-down list of counties will be greater than zero

    When
        - the user hovers over a county (such as Garfield)
    Then
        - the county information is displayed
    */

    let numberOfCounties = await countyOption.count;
    await t
        .expect(countySelect.value).eql('Select County')
        .expect(numberOfCounties).gt(1)
        .expect((await divCountyInfoGarfield).visible).notOk()
        .hover(blinkGarfield)
        .expect((await divCountyInfoGarfield).visible).ok();
});
