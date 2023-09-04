const ejs = require("ejs");

class HtmlParser{
    static async Parse(table){
       return await ejs.renderFile("./table.ejs", {header: table.header,rows: table.rows})//ira proicessar o arquivo ejs
    }
}

module.exports = HtmlParser