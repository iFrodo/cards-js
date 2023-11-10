let cards = [
  card1 = {
    type: 'Debit',
    networkType: 'mastercard',
    currencyType: 1,
    balance: '$5.750,53',
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
    type: 'Credit',
    networkType: 'visa',
    currencyType: 2,
    balance: '€1.343,53',
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
    type: 'Debit',
    networkType: 'master card',
    currencyType: 3,
    balance: '£3.263,65',
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
  document.write(`<div class="card-block">`)

  document.write(`<h3 class=card-title>`, cards[i].type, ' Card ',  '</h3>')
  document.write(`<p class=card-balance>`, 'Current Balance', '</p>',`<p class=card-money>`,cards[i].balance, '</p>')
  document.write(`<div class=card-info>`)
  document.write(` <img  class=card-logo src="./mastercard_logo.png" >`)
  document.write(`<p class=card-number>`, cards[i].number, '</p>')
  document.write(`<p class=card-expiration>`, cards[i].expirationYear, '.', cards[i].expirationMonth, '</p>')
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
