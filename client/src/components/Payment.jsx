import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ amount:'', email: '' });

  const { amount, email } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const payment = async(e) => {
    e.preventDefault();
    setLoading(true);
    if ( amount > 0) {
      const total = Number(amount) + 2.99;
      try {
        await axios.post(`http://localhost:8000/payment?amount=${total}`).then((res) => {
          window.open(res?.data);
          setLoading(false);
          setToggle(false);
          setFormData("");
        })
      }
      catch {
        setLoading(false);
        setFormData("");
        toast.error("Error while processing!");
      }
    }
    else {
      toast.error("Amount must be greater than zero!");
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <motion.button onClick={() => setToggle(true)} type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-lg w-96 px-6 pt-2.5 pb-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 justify-between">
        <div>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"></path>
          </svg>
        </div>
        <div>
          Buy me a coffee
        </div>
        <div></div>
      </motion.button>
      {toggle && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blackOverlay"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-4xl font-semibold text-black">
                    Payment With Paypal
                  </h3>
                  <button
                    onClick={() => setToggle(false)}
                  >
                    <span className="p-4 text-5xl font-semibold text-black">
                      ×
                    </span>
                  </button>
                </div>
                <div>{loading && <Loader />}</div>
                {!loading && (
                  <>
                    <div className="relative p-6 flex-auto">
                      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Enter the amount below</h5>
                      <span className="text-5xl font-extrabold">${amount || 0}</span>
                      <span className="text-xs font-normal text-gray-500 dark:text-gray-400">+2.99 processing fee</span>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <form onSubmit={payment} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <div className="py-4">
                          <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-00">Amount</label>
                          <input name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={amount} onChange={handleChangeInput} required  placeholder="Amount in USD"/>
                        </div>
                        <div className="py-4">
                          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-00">Your email</label>
                          <input name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={email} onChange={handleChangeInput} required  placeholder="name@mail.com"/>
                        </div>
                        <label class="flex items-center">
                          <input type="checkbox" class="form-checkbox" required/>
                          <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2">I agree to pay {amount && ('$' + (Number(amount) + 2.99))} & <span class="underline"> no refund will be provided!</span> </span>
                        </label>
                        <div className='flex flex-col justify-center py-4'>
                          <button className="px-5 pt-2.5 pb-2 bg-blue-600 text-black font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Pay </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Payment;