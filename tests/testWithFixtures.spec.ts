import { test } from "../test-options"
import { faker } from "@faker-js/faker"

test("parameterized methods", async ({ pageManager }) => {
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(/\s/g, "")}${faker.number.int(1000)}@test.com`

  await pageManager.onFormsLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1")
  await pageManager.onFormsLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
})
