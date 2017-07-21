const express = require('express')
const next = require('next')
const {json } = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var stripe = require("stripe")("sk_test_6m55BYyH2L1xa7j9uboViaNq");


const handleCharge = (req, res) => {

console.log('here\'s the request', req.body)

  const {customerDetails, token} = req.body;

  // Create a Customer:
  stripe.customers.create({
    email: customerDetails.email,
    description: 'Donation via website.',
    source: token,
    metadata: customerDetails
  }).then(function(customer) {
    // YOUR CODE: Save the customer ID and other info in a database for later.

    console.log('THEN ------- CUSTOMER INFO --------', customer)
    console.log('here is the customers id to be saved in databse', customer.id)

    return stripe.charges.create({
      amount: 1000,
      currency: "usd",
      customer: customer.id,
    });
  }).then(function(charge) {
    console.log('THEN -----CHARGE INFO------', charge)
    res.status(200).send({payment: 'very toite'})
  });
}


app.prepare()
.then(() => {
  const server = express()

  server.use(json());

  server.post('/donate', handleCharge)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

