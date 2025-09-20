import { Page, expect } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormsLayoutsPage } from './formsLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

export class PageManager {
  private readonly page: Page
  private readonly navigationPage: NavigationPage
  private readonly formsLayoutsPage: FormsLayoutsPage
  private readonly datepickerPage: DatepickerPage

  constructor(page: Page) {
    this.page = page
    this.navigationPage = new NavigationPage(this.page)
    this.formsLayoutsPage = new FormsLayoutsPage(this.page)
    this.datepickerPage = new DatepickerPage(this.page)
  }

  navigateTo() {
    return this.navigationPage
  }

  onFormsLayoutsPage() {
    return this.formsLayoutsPage
  }

  onDatepickerPage() {
    return this.datepickerPage
  }
}
