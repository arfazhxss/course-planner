
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

    const tableData: string[] = await page.$$eval('tbody', tbodies => {
        const data: string[] = [];

        tbodies.forEach(tbody => {
            const coldatA = Array.from(tbody.querySelectorAll('tr')).map(row => `[${row.children[0]?.textContent?.trim().replace(/\s+/g, ' ')}]`).filter(text => text).join('\n');
            data.push(coldatA);

            const coldatB = Array.from(tbody.querySelectorAll('tr')).map(row => `[${row.children[1]?.textContent?.trim().replace(/\s+/g, ' ')}]`).filter(text => text).join('\n');
            data.push(coldatB);
        });

        return data;
    });

    const jsonData = JSON.stringify(
        tableData.map((data) => {
            const termAndSession = data.split('\n')[0].slice(1, -1);
            const [term, session] = termAndSession.split(' - ');
            const courses = data.split('\n').slice(1).map(course => course.slice(1, -1));
            return {
                term,
                session,
                courses
            };
        }),
        null,
        2
    );

    console.log(jsonData);

    await browser.close();
};

main().catch(console.error);