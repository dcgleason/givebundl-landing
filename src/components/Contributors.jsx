import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Contributors = ()=> {

const amount = 1;

const [emails, setEmails] = useState([ { id: uuidv4(),  email: '', number: amount }]);
const [email, setEmail] = useState('');
const [first, setFirst] = useState('');
const [last, setLast] = useState('');
const [message, setMessage] = useState('');
 
 const handleAddFields = () => {
    setEmails([...emails, { id: uuidv4(),  email: '', number: amount+emails.length}])
  }

const handleRemoveFields = id => {
    const values  = [...emails];
    values.splice(values.findIndex(value => value.id === id), 1);
    setEmails(values);
  }

    return (
      <>
      {emails.map(obj => (
            <>
            <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Contributor # {String(obj.number)}</h3>
                <p className="mt-1 text-sm text-gray-600">Contact details so that we can send him/her an email!</p>
                </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <input
                            type="text"
                            name="first-name"
                            onChange={e => setFirst(e.target.value)}
                            value={first}
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring-red-300 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            onChange={e => setLast(e.target.value)}
                            value={last}
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring-red-300 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email-address"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring-red-300 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Your message to contributor #{String(obj.number)}:
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                            id="about"
                            name="about"
                            rows={4}
                            required
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                            className="max-w-lg shadow block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                            />
                        </div>
                        </div> 

                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#f8ad9d] hover:bg-[#f4978e] py-2 px-4 text-sm font-medium text-white shadow-smfocus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
                    >
                        Save
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
            <div className="border-t border-gray-200" />
            </div>
            </div>
            </>
           
            ))} 
    
  
       
        <div className="inline-flex">
        <button  onClick={handleAddFields} className="bg-gray-300 hover:bg-gray-400 text-gray-800 border-4 py-1 px-6 rounded-l">
             <span className='font-bold'> Add Contributor </span> 
              </button>
            <button disabled={emails.length === 1} onClick={() => handleRemoveFields(emails.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 border-4 py-1 px-2 rounded-r">
             <span className='font-bold'> Remove Contributor </span>
            </button>
           
           </div>
      </>
    )
  }

  export default Contributors;
  