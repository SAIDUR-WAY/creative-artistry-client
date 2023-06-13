import { loadStripe } from '@stripe/stripe-js'
import ChackoutForm from '../../../component/ChackoutForm/ChackoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { useLoaderData } from 'react-router-dom'

const stripePromise = loadStripe(import.meta.env.VITE_Payment_geteway_PK)
const Payment = () => {
  const studentClass = useLoaderData()
  // console.log(studentClass);
  return (
    <div className="w-full mx-auto">
      <h2 className="text-5xl my-8 w-full font-bold text-center uppercase">
        payment
      </h2>
      <div className="w-full mx-auto">
        <Elements stripe={stripePromise}>
          <ChackoutForm data={studentClass}></ChackoutForm>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
