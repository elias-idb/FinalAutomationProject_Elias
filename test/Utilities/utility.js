class Utility {
    async convertTextToNumberForSubTotal(text) {
      const value = parseFloat(text.replace(/[Item total: $]/g, ""));
      
      return value;
    }

    async convertTextToNumberForTax(text) {
      const value = parseFloat(text.replace(/[Tax: $]/g, ""));
      
      return value;
    }

    async convertTextToNumberForTotal(text) {
      const value = parseFloat(text.replace(/[Total: $]/g, ""));
      
      return value;
    }


    async randomNumber(max, min) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomValue;
    }

  
  
    async createRandomString(length) {
      const chars = "abcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  }
  
  module.exports = new Utility();