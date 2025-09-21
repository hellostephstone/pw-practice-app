import { test, expect } from "@playwright/test"
import { PageManager } from "../page-objects/pageManager"
import { faker } from "@faker-js/faker"

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test("navigate to form page", async ({ page }) => {
  const pm = new PageManager(page)
  await pm.navigateTo().formsLayoutsPage()
  await pm.navigateTo().datepickerPage()
  await pm.navigateTo().smartTablePage()
  await pm.navigateTo().toastrPage()
  await pm.navigateTo().tooltipPage()
})

test("parameterized methods", async ({ page }) => {
  const pm = new PageManager(page)
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(/\s/g, "")}${faker.number.int(1000)}@test.com`

  await pm.navigateTo().formsLayoutsPage()
  await pm.onFormsLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1")
  await pm.onFormsLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
  await page.screenshot({ path: "screenshots/formsLayoutsPage.png" })
  await page.locator("nb-card", { hasText: "Inline form" }).screenshot({ path: "screenshots/inlineForm.png" })
  const buffer = await page.screenshot()
  // console.log(buffer.toString("base64")) could use for something like slack
  await pm.navigateTo().datepickerPage()
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
})
