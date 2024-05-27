
import puppeteer from "puppeteer-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
const PDFExtract = require('pdf.js-extract').PDFExtract;

puppeteer.use(StealthPlugin());

const URL = 'https://www.uvic.ca/ecs/software/current-students/courses/index.php';

const main = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const pages = await browser.pages();
    if (pages.length > 1) { await pages[0].close(); }
    await page.goto(URL);

    const data = await page.$$eval('tbody', tbodies => {
        return tbodies.map(tbody => {
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const firstColumns = rows.map(row => `[${row.children[0]?.textContent?.trim().replace(/\s+/g, ' ')}]`).filter(text => text).join('\n');
            const secondColumns = rows.map(row => `[${row.children[1]?.textContent?.trim().replace(/\s+/g, ' ')}]`).filter(text => text).join('\n');

            return { firstColumns, secondColumns };
        });
    });

    data.forEach((columns, index) => {
        console.log(`${columns.firstColumns}\n`);
        console.log(`${columns.secondColumns}\n`);
    });

    await browser.close();
};

main().catch(console.error);