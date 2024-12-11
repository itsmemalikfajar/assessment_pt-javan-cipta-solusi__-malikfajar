const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');  // Untuk pengecekan hasil (opsional)
const path = require("path");
const invalidfile = path.join(__dirname, "../file/data.xlsx");

describe('Pengujian test javan.co.id', function () {
  let driver;

  before(async function () {
    // Inisialisasi driver untuk browser Chrome sebelum pengujian dimulai
    driver = await new Builder()
      .forBrowser('chrome') 
      .setChromeOptions(new chrome.Options()) 
      .build();
  });

  it('Harus dapat mengklik link Career', async function () {
    // Buka halaman website
    await driver.get('https://javan.co.id/');

    // Tunggu elemen link untuk ditemukan
    let link = await driver.wait(until.elementLocated(By.xpath("//li[@class='pr-5']/a[@href='/career']")));
    await link.click();

    let link1 = await driver.wait(until.elementLocated(By.xpath("//div[@class='container mx-auto']//div[1]//div[1]//div[1]//a[2]")))
    await link1.click();

    let link2 = await driver.wait(until.elementLocated(By.xpath("//a[@id='career-btn-apply-internal']")))
    await link2.click();

    let click1 = await driver.wait(until.elementLocated(By.xpath(`//input[@id='in_full_name']`)))
    await click1.click();
    await driver.sleep(2000);

    let fill1 = await driver.wait(until.elementLocated(By.xpath(`//input[@id='in_full_name']`)))  // Ganti dengan ID atau XPath field yang sesuai
    await fill1.sendKeys('malik')

    let fillemail = await driver.wait(until.elementLocated(By.xpath(`//input[@id='in_email']`)))  // Ganti dengan ID atau XPath field yang sesuai
    await fillemail.sendKeys('email yang tidak valid')

    let fillphone = await driver.wait(until.elementLocated(By.xpath(`//input[@id='in_phone']`)))  // Ganti dengan ID atau XPath field yang sesuai
    await fillphone.sendKeys('bisa dimasukan dengan karakter ')

    let filldate = await driver.wait(until.elementLocated(By.xpath(`//div[@class='absolute top-0 right-0 px-3 py-2']//*[name()='svg']`)))  // Ganti dengan ID atau XPath field yang sesuai
    await filldate.click()

    let fillnumberdate = await driver.wait(until.elementLocated(By.xpath(`//div[text()='19']`)))  // Ganti dengan ID atau XPath field yang sesuai
    await fillnumberdate.click()



    // let scroll = await driver.wait(
    //     until.elementLocated(By.xpath(`//select[@id='in_sumber_lamaran']`)),
        
    //     20000
    //   );
    //   await driver.executeScript(
    //     "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
    //     scroll
    //   );


    


    // Tunggu halaman baru dimuat setelah klik (Opsional: dapat menambahkan pengecekan URL atau perubahan halaman)
    // let currentUrl = await driver.getCurrentUrl();
    // assert.strictEqual(currentUrl, 'https://javan.co.id/career'); 
  });

  after(async function () {
    // Pastikan driver ditutup setelah tes selesai
      await driver.quit();
  });
});
