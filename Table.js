
class Table{
  constructor(arr){
    this.header = arr[0];
    arr.shift();// ira escluir a primeira linha do cabeçalho
    this.rows = arr;
  }  

  get RowCount(){
    return this.rows.length;//retorna a quantidade de linhas que tem na table
  }
  get ColumnCount(){
    return this.header.length;
  }

}
    
module.exports = Table;