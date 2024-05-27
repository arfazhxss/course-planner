
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

    let { technical = 0, natural = 0, complementary = 0, unit = 1.5 } = {};
    const jsonData = JSON.stringify(
        tableData.map((data) => {
            const termAndSession = data.split('\n')[0].slice(6, -1);
            const [term, session] = termAndSession.split(' - ');

            const courses = data.split('\n').slice(1).map(course => {
                const [courseCode, courseName] = course.slice(1, -1).split("- ");
                if (course.includes(" OR ")) {
                    const [option1, option2] = course.split(" OR");
                    return [
                        {
                            courseCode: option1.split("-")[0].slice(1, -1).trim(),
                            courseName: option1.split(" - ")[1].slice(0, -2).trim(),
                            courseType: "Mandatory",
                            unit: unit
                        },
                        {
                            courseCode: option2.split("-")[0].trim(),
                            courseName: option2.split(" - ")[1].slice(0, -1).replace(/[^a-zA-Z\s]/g, '').trim(),
                            courseType: "Mandatory",
                            unit: unit
                        }
                    ];

                }
                else if ((courseName === undefined) && (courseCode === "")) { return; }
                else if (courseName === undefined && courseCode.includes("Elective")) {
                    if (courseCode.includes("Technical")) {
                        return {
                            courseCode: "",
                            courseName: `${courseCode.slice(0, -8).trim()} #${++technical}`,
                            courseType: "Elective",
                            unit: unit
                        };
                    }
                    else if (courseCode.includes("Natural")) {
                        return {
                            courseCode: "",
                            courseName: `${courseCode.slice(0, -9).trim()} #${++natural}`,
                            courseType: "Elective",
                            unit: unit
                        };
                    } else if (courseCode.includes("Complementary")) {
                        return {
                            courseCode: "",
                            courseName: `${courseCode.slice(0, -8).trim()} #${++complementary}`,
                            courseType: "Elective",
                            unit: unit
                        };
                    }
                }
                else if (courseCode.includes("499")) {
                    return {
                        courseCode: courseCode.trim(),
                        courseName: courseName.slice(0, -12),
                        courseType: "Mandatory",
                        unit: "3.0"
                    };
                }
                else if (courseCode.includes("ENGR")) {
                    if (courseCode.includes("110") || courseCode.includes("120")) {
                        return {
                            courseCode: courseCode.trim(),
                            courseName: courseName,
                            courseType: "Mandatory",
                            unit: "2.5"
                        };
                    } else {
                        return {
                            courseCode: courseCode.trim(),
                            courseName: courseName,
                            courseType: "Mandatory",
                            unit: "0.5"
                        };
                    }
                }
                else {
                    return {
                        courseCode: courseCode.trim(),
                        courseName: courseName,
                        courseType: "Mandatory",
                        unit: unit
                    };
                }
            }).filter(course => course !== undefined);;

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
    // console.log('JSON data has been saved to data.json');
    await browser.close();
};

main().catch(console.error);