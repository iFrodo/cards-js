const cards = getCards()
let user = getCurrentUser()
renderHeader(user.name)
renderCard(cards)
let date =  new Date() 
let year = date.getFullYear()
let month = date.getMonth() +1
let ecsad = date.setUTCMonth()
date = `${year}` +' ' +`${month }`

function getCards() {
  let cards = [
    card1 = {
      type: 'Debit',
      networkType: 'mastercard',
      currencyType: 1,
      balance: '5.750,53',
      number: 5282345678901289,
      expirationYear: 2025,
      expirationMonth: 9,
      transactions: [
        {
          title: 'Order Revenue',
          amount: '2354',
          date: new Date(2022, 3, 25) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '6474',
          date: new Date(2022, 3, 25) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '11',
          date: new Date(2022, 3, 25) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },

      ],
    },


    card2 = {
      type: 'Credit',
      networkType: 'visa',
      currencyType: 2,
      balance: '1.343,53',
      number: 9232654321012032,
      expirationYear: 2026,
      expirationMonth: 4,
      transactions: [
        {
          title: 'Order Revenue',
          amount: '1354',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '-5601',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '4321',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
      ]

    },
    card3 = {
      type: 'Debit',
      networkType: 'master card',
      currencyType: 3,
      balance: '3.263,65',
      number: 5543259349582930,
      expirationYear: 2028,
      expirationMonth: 3,
      transactions: [
        {
          title: 'Order Revenue',
          amount: '5421',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '-658',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
          title: 'Order Revenue',
          amount: '543',
          date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
      ]
    }
  ]
  return cards
}
function renderCard(cards) {
  //создание общего контейнера в котором лежат все карты
  document.write('<div class="container">')
  for (let i = 0; i < cards.length; i++) {
    //генерация разметки для каждой карты и подставление данных из входящего массива
    document.write('<div class="card">')
    document.write(`<div class="card-block-${i}">`)
    document.write(`<h3 class=card-title>`, cards[i].type, ' Card ', '</h3>')
    if (cards[i].currencyType === 1) {
      document.write(`<p class=card-balance>`, 'Current Balance', '</p>', `<p class=card-money>`, '$', cards[i].balance, '</p>')
    } else if (cards[i].currencyType === 2) {
      document.write(`<p class=card-balance>`, 'Current Balance', '</p>', `<p class=card-money>`, '€', cards[i].balance, '</p>')
    } else if (cards[i].currencyType === 3) {
      document.write(`<p class=card-balance>`, 'Current Balance', '</p>', `<p class=card-money>`, '£', cards[i].balance, '</p>')
    }


    document.write(`<div class=card-info>`)
    document.write(`<img class=card-logo-${i} src="./mastercard_logo.png" >`)
    document.write(`<p class=card-number>`, cards[i].number, '</p>')
    document.write(`<p class=card-expiration>`, cards[i].expirationYear, '.', cards[i].expirationMonth, '</p>')
    document.write('</div>')
    document.write('</div>')
    document.write('<div class=transaction-block>')
    document.write("<h2 class='transaction-title'}>", "History Transaction", "</h2>");
    document.write('<ul style=transaction-list>')
    //рендер транзакций
    renderTransactions(cards[i].transactions, cards[i].currencyType);
    document.write('</div>')
    document.write('</div>')
  }
  document.write('</ul>')
  document.write('</div>');
}
function renderTransactions(transactions, currencyType) {
  if (currencyType === 1) {
    renderTransactionItem(transactions, '$')
  } else if (currencyType === 2) {
    renderTransactionItem(transactions, '€')
  } else if (currencyType === 3) {
    renderTransactionItem(transactions, '£')
  }


}
function getCurrentUser() {
  return {
    name: getUserName(),
    role: 'Admin'
  };

}
function getUserName() {
  return 'Igor'
}
function renderHeader(userName) {
  document.write("<h1>", "Hello, " + userName, "</h1>");
  document.write("<h2>", "Cards: ", "</h2>");

}
function renderTransactionItem(transactions, currencyType) {
  for (let j = 0; j < transactions.length; j++) {
    let cssClass = transactions[j].amount > 0 ? "income" : "outcome";
    let sign = ''
    if(transactions[j].amount > 0){
      sign = '+'
    }
    else if (transactions[j].amount < 0){
      sign = '-'
    }
    document.write("<li class=transaction-item>",
      transactions[j].title,
      ", ",
      transactions[j].date,
      ",",
      `<span class="${cssClass}">`,
      `${sign} ${currencyType}${transactions[j].amount.slice(1)}`,
      '</span>',
      "</li>");
  }
}


