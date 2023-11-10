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
      {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },

    ],
  },


  card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 2,
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
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
    ]

  },
  card3 = {
    type: 'debit',
    networkType: 'master card',
    currencyType: 3,
    balance: 3263.65,
    number: 5543259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    transactions: [
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
      {
        title: 'Order Revenue',
        amount: 0,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
      },
    ]
  }
]
document.write('<div class="container">')
for (let i = 0; i < cards.length; i++) {

  document.write('<div class="card">')
  document.write(`<div class="card-block-${i}">`)
  
  document.write(`<h3 class=card-title-${i}>`, cards[i].type, ' card ', cards[i].networkType, '</h3>')
  document.write('<p>', 'Current Balance :', cards[i].balance, '</p>')
  document.write('<p>', cards[i].number, '</p>')
  document.write('<p>', cards[i].expirationYear, '.', cards[i].expirationMonth, '</p>')
  document.write('<div class="card-img">')
  document.write('</div>')
  document.write('</div>')

  document.write("<h2>", "History Transaction", "</h2>");
  document.write('<ul>')

  for (let j = 0; j < cards[i].transactions.length; j++) {
    let cssClass = cards[i].transactions[j].amount > 0 ? "income" : "outcome";
    document.write("<li>",
    cards[i].transactions[j].title,
     ", ",
    cards[i].transactions[j].date,
     ",",
     `<span class="${cssClass}">`,
      cards[i].transactions[j].amount,
       '</span>',
        "</li>");

  }
  document.write('</div>')
  
  if (cards[i].currencyType === 1) {
    console.log('EUR');
  } else if (cards[i].currencyType === 2) {
    console.log('USD');
  } else if (cards[i].currencyType === 3) {
    console.log('Pound sterling')
  }
}
document.write('</ul>')
document.write('</div>');
