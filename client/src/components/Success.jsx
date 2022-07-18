import React from 'react';
import { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { runFireworks } from '../utils/Fireworks';
import './success.css';

const Success = () => {
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  const querys = useQuery();
  const paymentId = querys.get("paymentId");
  const payerID = querys.get("PayerID");

  useEffect(() => {
    if(!paymentId && !payerID) {
      navigate('/');
    }
    else {
      document.title = "Payment Success";
      runFireworks();
    }
  },[paymentId, payerID])
  
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsFillCheckCircleFill />
        </p>
        <h2>Thank you for your Support!</h2>
        <p className="email-msg">Here is your Confirmation ID - {paymentId}.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:suryanshanand@icloud.com">
            suryanshanand@icloud.com
          </a>
        </p>
        <Link to="/">
          <div className='flex flex-wrap -mx-3 mb-6 mt-8 justify-center items-center'>
            <button type="button" className='bg-red-500 border-2 text-black font-bold py-2 px-4 inline-flex items-center text-xl rounded-full'>Back to Home</button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Success;