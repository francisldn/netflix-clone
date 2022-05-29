import {
    createCheckoutSession,
    getStripePayments,
  } from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase';

export const payments = getStripePayments(app,{
      productsCollection:'products',
      customersCollection:'customers',
  })

export const loadCheckout = async(priceId:string) => {
    const session = await createCheckoutSession(payments, {
        price: priceId,
        //send url of the current window - based on the current domain
        success_url: window.location.origin,
        cancel_url: window.location.origin
        // if all is successful then user is redirected to checkout
    })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message))
}

export const goToBillingPortal = async () => {
  // instance of cloud function
  const instance = getFunctions(app, 'us-central1')
  const functionRef = httpsCallable(instance, 'ext-firestore-stripe-payments-createPortalLink')
  await functionRef({
    returnUrl: `${window.location.origin}/account`
  })
  .then(({data}:any)=> window.location.assign(data.url))
  .catch((error) => console.log(error.message) )
}

