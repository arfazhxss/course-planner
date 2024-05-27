const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
import { Browser } from 'puppeteer';
puppeteer.use(StealthPlugin());

const URL = 'https://learninginmotion.uvic.ca/myAccount/co-op/postings.htm'
const LOGIN = 'uvic_netlink_id'
const PASSWORD = 'password_uvic_netlink_id'

const main = async () => {
    const browser: Browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const pages = await browser.pages();
    if (pages.length > 1) { await pages[0].close(); }
    await page.goto(URL);

    if (page.url() === 'https://learninginmotion.uvic.ca/notLoggedIn.htm') {

    } else { await new Promise(resolve => setTimeout(resolve, 5000)); }
    await browser.close();
}
main()