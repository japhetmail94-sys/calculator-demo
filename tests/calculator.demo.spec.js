import { test, expect } from '@playwright/test';

test.describe('calculator scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    await page.getByTestId('selectBuild').selectOption('1');
  });

  test('addition: 2+3=5', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2');
    await page.getByTestId('number2Field').fill('3');
    await page.getByTestId('selectOperationDropdown').selectOption('0');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('5');
  });

  test('subtraction: 10-4=6', async ({ page }) => {
    await page.getByTestId('number1Field').fill('10');
    await page.getByTestId('number2Field').fill('4');
    await page.getByTestId('selectOperationDropdown').selectOption('1');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('6');
  });

  test('multiplication: 6*7=42', async ({ page }) => {
    await page.getByTestId('number1Field').fill('6');
    await page.getByTestId('number2Field').fill('7');
    await page.getByTestId('selectOperationDropdown').selectOption('2');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('42');
  });

  test('division: 8/2=4', async ({ page }) => {
    await page.getByTestId('number1Field').fill('8');
    await page.getByTestId('number2Field').fill('2');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('4');
  });

  test('divide by zero: 5/0=Infinity', async ({ page }) => {
    await page.getByTestId('number1Field').fill('5');
    await page.getByTestId('number2Field').fill('0');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('Infinity');
  });

  test('addition: 2000000+8000000=10000000', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('0');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('10000000');
  });


  test('Division: 1/0.0001=10000', async ({ page }) => {
    await page.getByTestId('number1Field').fill('1');
    await page.getByTestId('number2Field').fill('0.0001');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('10000');
  });

  test('addition: 0.1+0.2=0.3', async ({ page }) => {
    await page.getByTestId('number1Field').fill('0.1');
    await page.getByTestId('number2Field').fill('0.2');
    await page.getByTestId('selectOperationDropdown').selectOption('0');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('0.30000000000000004');
  });

  test('addition alphabet: a+b=NaN', async ({ page }) => {
    await page.getByTestId('number1Field').fill('a');
    await page.getByTestId('number2Field').fill('b');
    await page.getByTestId('selectOperationDropdown').selectOption('0');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('NaN');
  });

  test('addition: 2+x=Nan', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2');
    await page.getByTestId('number2Field').fill('x');
    await page.getByTestId('selectOperationDropdown').selectOption('0');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('NaN');
  });

  test('empty fields: empty+empty=0', async ({ page }) => {
    await page.getByTestId('number1Field').fill('');
    await page.getByTestId('number2Field').fill('');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('0');
  });

  test('multiplication: 2000000*8000000=16000000000000', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('2');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('16000000000000');
  });

  test('words: "hello"+"world"="helloworld"', async ({ page }) => {
    await page.getByTestId('number1Field').fill('"hello"');
    await page.getByTestId('number2Field').fill('"world"');
    await page.getByTestId('selectOperationDropdown').selectOption('4');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('"hello""world"');
  });

  test('concatenate: 223+69669=2236969', async ({ page }) => {
    await page.getByTestId('number1Field').fill('223');
    await page.getByTestId('number2Field').fill('6969');
    await page.getByTestId('selectOperationDropdown').selectOption('4');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('2236969');
  });

  test('integer division: 5/2=2', async ({ page }) => {
    await page.getByTestId('number1Field').fill('5');
    await page.getByTestId('number2Field').fill('2');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('integerSelect').check();
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('2');
  });

  test('without integer: 5/2=2.5', async ({ page }) => {
    await page.getByTestId('number1Field').fill('5');
    await page.getByTestId('number2Field').fill('2');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('integerSelect').uncheck();
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('2.5');
  });

  test('Division: 2000000/8000000=0.25', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('0.25');
  });

  test('subtraction: 2000000-8000000=-6000000', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('1');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('-6000000');
  });

  test('concatenate: 2000000c8000000=2236969', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('4');
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('20000008000000');
  });

  test('integer division: 2000000/8000000=0', async ({ page }) => {
    await page.getByTestId('number1Field').fill('2000000');
    await page.getByTestId('number2Field').fill('8000000');
    await page.getByTestId('selectOperationDropdown').selectOption('3');
    await page.getByTestId('integerSelect').check();
    await page.getByTestId('calculateButton').click();
    await expect(page.getByTestId('numberAnswerField')).toHaveValue('0');

  });

});
