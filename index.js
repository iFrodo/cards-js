let cards = [ 
  card1 = {
  type: 'debit',
  networkType: 'visa',
  currencyType: 1,
  balance: 5750.53,
  number: 5282345678901289,
  expirationYear: 2025,
  expirationMonth: 9,
  transactions: [
    {
       title: 'Order Revenue',
       amount: 874,
       date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
],
},


card2 = {
  type: 'credit',
  networkType: 'visa',
  currencyType: 1,
  balance: 1343.53,
  number: 9232654321012032,
  expirationYear: 2026,
  expirationMonth: 4,
  transactions: [
    {
       title: 'Order Revenue',
       amount: 874,
       date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    }, 
]

},
card3 = {
  type: 'debit',
  networkType: 'master card',
  currencyType: 1,
  balance: 3263.65,
  number: 5543259349582930,
  expirationYear: 2028,
  expirationMonth: 3,
  transactions: [
    {
       title: 'Order Revenue',
       amount: 874,
       date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    }, 
]
}
]

for(let i = 0; i < cards.length;i++){
  document.write('<h3>',cards[i].type,' card ',cards[i].networkType,'</h3>','<p>','Current Balance :',cards[i].balance,'</p>','<p>',cards[i].number,'</p>','<p>',cards[i].expirationYear,'.',cards[i].expirationMonth,'</p>')
  document.write("<h2>", "History Transaction", "</h2>");
  for(let j =0; j < cards[i].transactions.length; j++){
    document.write("<ul>");
    document.write("<li>", cards[i].transactions[j].title, ", ", cards[i].transactions[j].date, ",", cards[i].transactions[j].amount, "</li>");
    // .. добавьте отображение второй транзакции
    document.write("</ul>");
  }

}
