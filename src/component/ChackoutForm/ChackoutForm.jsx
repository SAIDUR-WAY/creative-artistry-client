import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import './ChackoutForm.css';



const ChackoutForm = ({ data }) => {
    console.log(data);
    const {price} = data;
    const paymentPrice = parseFloat(price.toFixed(2))
    const {user} = useContext(authContext);
     const stripe = useStripe();
     const elements = useElements();
     const [cardError, setcardError] = useState('')
     const [axiosSecure] = useAxiosSecure()
     const [clientSecret, setClientSecret] = useState('');
     const [processing, setProcessing] = useState(false);
     const [transationId, setTransationId] = useState(false);

     useEffect(()=>{
      axiosSecure.post('create-payment-intent', {paymentPrice} )
      .then(res =>{
        setClientSecret(res.data.clientSecret)
        // console.log(res.data.clientSecret)
      })
     }, [])

     const handleSubmit = async (event) => {
          event.preventDefault();
          if(!stripe || !elements) {
               return
          }

          const card = elements.getElement(CardElement);
          if(card == null){
               return
          }
          const {error} =await stripe.createPaymentMethod({
            type: 'card',
            card
          })
          if(error){
            setcardError(error.message);
          }else{
            setcardError('')
          }

          setProcessing(true)

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret, 
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'No Name',
                  name: user?.displayName || 'No Name'
                }
              }
            }
          );
          if(confirmError){
            console.log(confirmError)
          }
          console.log(paymentIntent)
          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
            setTransationId(paymentIntent.id)
            const payment = {
              email: user?.email, 
              transactionId: paymentIntent.id,
              price,
              date: new Date(),
              orderStatus: 'service pending',
              className: data?.className,
              instructorName: data?.instructorName,
              classId: data?.classId,
              myClassAddId: data?._id ,
              availibleSeats: data?.availibleSeats -1 ,
              imageUrl: data?.imageUrl,
              enrolledStudent: data?.enrolledStudent + 1

            }
            axiosSecure.post('/payment', payment)
            .then(res =>{
              console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your payment success',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            
          }

     }
     return (
          <div className="w-full mx-auto"> 
               <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline btn-accent btn-full w-full p-4 mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay  
      </button>
    </form>
    {cardError && <p className="text-red-600 pt-4 text-center">{cardError}</p>}
    {transationId && <p className="text-green-700 text-2xl pt-4 text-center"> Transaction complete transactionId: <span> {transationId}</span></p>}
          </div>
     );
};

export default ChackoutForm;