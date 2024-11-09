// function convertToNumber(){
//     //const text = "$7,18.00";
//     const text = "Item total: $55.97"

//     //const convertToSampleText = parseFloat(text.replace(/[$,]/g, ""));
//     const convertToSampleText = parseFloat(text.replace(/[Item total: $]/g, ""));

//     console.log(convertToSampleText);

//     //div[@class='item_pricebar']/div
// }

// convertToNumber();

// Find all elements that match the XPath and get their text content
let prices = await driver.findElements(By.xpath("//div[@class='item_pricebar']/div"));

// Initialize total sum to zero
let total = 0;

// Loop through each element to retrieve the price, convert it, and add to total
for (let priceElement of prices) {
    let priceText = await priceElement.getText(); // e.g., "$29.99"
    let priceValue = parseFloat(priceText.replace(/[^0-9.]/g, '')); // Convert "$29.99" to 29.99
    total += priceValue; // Add to total
}

console.log("Total Price:", total);
