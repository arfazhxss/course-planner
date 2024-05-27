
import puppeteer from "puppeteer-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
const fs = require('fs');
puppeteer.use(StealthPlugin());


const main = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const pages = await browser.pages();
    const url = 'https://www.uvic.ca/ecs/software/current-students/courses/index.php';
    if (pages.length > 1) { await pages[0].close(); }
    await page.goto(url);

    const tableData: string[] = await page.$$eval('tbody', (tbodies: HTMLTableSectionElement[]) => {
        const data: string[] = [];

        tbodies.slice(0, 4).forEach(tbody => {
            data.push(
                Array.from(
                    tbody.querySelectorAll('tr'))
                    .map(row =>
                        `[${row.children[0]
                            ?.textContent
                            ?.trim()
                            .replace(/\s+/g, ' ')}]`)
                    .filter(text => text)
                    .join('\n'));
            data.push(
                Array.from(
                    tbody.querySelectorAll('tr'))
                    .map(row =>
                        `[${row.children[1]
                            ?.textContent
                            ?.trim()
                            .replace(/\s+/g, ' ')}]`)
                    .filter(text => text)
                    .join('\n'));
        });

        return data;
    });

    let { technical = 0, natural = 0, complementary = 0 } = {};
    const jsonData = JSON.stringify(
        tableData.map((data) => {
            const termAndSession = data.split('\n')[0].slice(6, -1);
            const [term, session] = termAndSession.split(' - ');

            const courses = data.split('\n').slice(1).map(course => {
                if (course.includes(" OR ")) {
                    const [option1, option2] = course.split(" OR");
                    return {
                        [option1.split(" - ")[1].slice(0, -2).trim()]: option1.split("-")[0].slice(1, -1).trim(),
                        [option2.split(" - ")[1].slice(0, -1).replace(/[^a-zA-Z\s]/g, '').trim()]: option2.split("-")[0].trim()
                    };
                } else {
                    const [courseName, courseCode] = course.slice(1, -1).split("- ");
                    if (courseCode === undefined && courseName.includes("Elective")) {
                        // console.log(courseName);
                        if (courseName.includes("Technical")) {
                            return { [courseName.trim()]: ++technical };
                        } else if (courseName.includes("Natural")) {
                            return {
                                [courseName.trim()]: ++natural
                            };
                        } else if (courseName.includes("Complementary")) {
                            return { [courseName.trim()]: ++complementary };
                        }
                    } else {
                        return { [courseCode]: courseName.trim() };
                    }
                }
            });


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
    // fs.writeFileSync('./data.json', jsonData, 'utf8');
    // fs.writeFileSync('../course-data.json', jsonData, 'utf8');
    console.log('JSON data has been saved to data.json');
    await browser.close();
};

main().catch(console.error);