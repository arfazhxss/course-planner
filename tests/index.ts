import path from 'path';
// import fetch from 'node-fetch';
// import chromium from '@sparticuz/chromium';
import puppeteer from "puppeteer-extra";
import https from 'https';
import fs from 'fs';
import * as cheerio from 'cheerio';
// import { superbase } from '@supabase/supabase-js';
// import { createCSV, downloadCSV, readCSV } from '../src/utils/csv';
// import { firestore } from '@google-cloud/firestore';
// import axios from 'axios';
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const userPrefs = require("puppeteer-extra-plugin-user-preferences");

puppeteer.use(StealthPlugin());
// const https = require('https');

// import fs from 'fs';
// import pdfParse from 'pdf-parse';

// const URL = 'https://www.uvic.ca/ecs/_assets/docs/program-planning/PPW-SENG.pdf';
// const PDF_PATH = path.resolve('/Users/arfaz/Desktop/Projects/VikeLabs/course-planner/course-planner/tests', 'downloaded.pdf');

// const main = async () => {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     const pages = await browser.pages();
//     if (pages.length > 1) { await pages[0].close(); }

//     const response = await page.goto(URL, { waitUntil: 'networkidle2' });


//     await browser.close();
// };

// main().catch(console.error);

(async () => {
    const downloadPath = path.resolve('/Users/arfaz/Desktop/Projects/VikeLabs/course-planner/course-planner/tests', 'downloaded.pdf');

    puppeteerExtra.use(
        userPrefs({
            userPrefs: {
                download: {
                    prompt_for_download: false,
                    open_pdf_in_system_reader: true,
                },
                pluglins: {
                    'always_open_pdf_externally': true
                },
            },
        })
    );

    const browser = await puppeteerExtra.launch({
        // headless: false,
        // devtools: true,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    });

    const page = await browser.newPage();

    console.log('Navigating to the page');

    await page.goto('https://www.uvic.ca/ecs/_assets/docs/program-planning/PPW-SENG.pdf');




});