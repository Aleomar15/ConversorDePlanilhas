const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();


 async function main(){
    var dados = await leitor.Read("./data.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WriterPDF(Date.now() + ".pdf", html);

}

main();