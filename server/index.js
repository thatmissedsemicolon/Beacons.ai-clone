import express from 'express';
import cors from 'cors';
import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

paypal.configure({
  'mode': `${process.env.PAYPAL_CLIENT_MODE}`, 
  'client_id': `${process.env.PAYPAL_CLIENT}`,
  'client_secret': `${process.env.PAYPAL_CLIENT_SECRET}`
});

app.set('json spaces', 2);

app.get('/*', (req, res) => {
  res.json({
    "error":{
      "code": 422,
      "message": "ERR_BAD_REQUEST"
    }
  });
});

app.post('/payment', (req, res) => {
   const amount = req.query.amount;
   const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "Support",
          "sku": "001",
          "price": `${amount}`,
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": `${amount}`
      },
      "description": "Support"
    }]
   } 

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for(let i = 0; i < payment.links.length; i++){
        if(payment.links[i].rel === 'approval_url'){
          res.send(payment.links[i].href);
        }
      }
    }
  });
});

app.listen(process.env.PORT|| 5000);