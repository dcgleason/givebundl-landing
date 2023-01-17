import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Success from '../success';
import Failure from '../error';
import Head from "next/head"
import { useRouter } from 'next/router';
import dotenv from 'dotenv'
dotenv.config()


// when you input the gift code, the person's whose Bundle it is should appear in the question.


const Messages = () => {

  const [ questionOne, setQuestionOne] = useState('');
  const [ name, setName] = useState('');
  const [ street, setStreet] = useState('');
  const [ city, setCity] = useState('');
  const [ state, setState] = useState('');
  const [ zip, setZip] = useState('');
  const [ apartment, setApartment] = useState('');
  const [ country, setCountry] = useState('');
  const [ contributorName, setContributorName ] = useState('');
  const [ giftCode, setGiftCode ] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ success, setSuccess ] = useState(false);
  const [ failure, setFailure ] = useState(false);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const [wantUploadPicture, setWantUploadPicture] = useState(true);

  const router = useRouter();
  const { userID } = router.query;
  const [userData, setUserData] = useState({});
  const [giftData, setGiftData] = useState({});


  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch(`http://localhost:3001/users/${userID}`);
      const data = await res.json();
      setUserData(data);
      console.log("user first name" + data.firstName); // first name of the gift owner

    }

    async function fetchGiftData() {
      const res = await fetch(`http://localhost:3001/gifts/user/${userID}`);
      const data = await res.json();
      setGiftData(data);
      console.log("recipient first name" + data.recipientName);

    }

    fetchGiftData();
    fetchUserData();
    console.log('gift data' + giftData.recipientName);
    console.log('userData' + userData.firstName);
  }, []); // only run the effect on first render

  // 636468ef285378771155ce54
  

    const submit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);
  
      const { url } = await fetch("http://localhost:3001/s3Url").then((res) =>
        res.json()
      );
  
      console.log(url);
  
      //post the image to the s3 bucket
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });
  
      const imageUrl = url.split("?")[0];
      console.log(imageUrl); //this is the url of the image in the s3 bucket -- you can use this to display the image (or store it in the database)
    };
  
 if (!userData) return <p>Loading...</p>;

  return (
    <>

    <Head>
        <title>Messages - Bundle</title>
        <meta name="description" content="Where a Bundle contributor submits his or her written messages." />
      </Head>
    {success? <Success/> : <div></div>}
    {failure? <Failure/> : <div></div>}
      <form className="space-y-8 divide-y divide-gray-200 lg:px-32 lg:mx-32 shadow-md rounded border-gray-200 border"
        onSubmit={submit}
        >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg mt-20 leading-6 font-medium text-gray-900">Write a Letter</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please write your letter to {giftData.recipientName} by filling out the form below. <br></br> <br></br> <em>This letter will be displayed in the Bundle book (a collection of letters from family and friends that aim to support, uplift, and show love for someone special ... all compiled into a physical book) {userData.firstName } {userData.lastName} is making for {giftData.recipientFirstName}, along with your photo, if you chose to upload one.</em>
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                What does {giftData.recipientName} normally call you? <em>e.g. Mom, Dad, Grandma, Grandpa, etc.</em> (to be placed in the Bundle book next to your letter to {giftData.recipientFirstName}):
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                <input
                  id="about"
                  name="about"
                  rows={3}
                  onChange={e => setContributorName(e.target.value)}
                  value={contributorName}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Do you want to upload a picture of you and {giftData.recipientFirstName}? (recommended)
                  </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <select className='rounded-md shadow-sm  border-gray-300' id="upload" name="upload" onChange={e => setWantUploadPicture(e.target.value === 'yes')}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"></div>

            <div className="text-center text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-4">
              <em>Here is a message from Manny (to you):</em> <br />
              <strong>NOTE:</strong> [note from {userData.firstName}] <br />
              <br />
              <strong>Suggested PROMPTS:</strong>
              <ul className="list-disc">
                <ol>What are some of your favorite memories with {giftData.recipientName}?</ol>
                <ol>How has {giftData.recipientName} impacted your life?</ol>
                <ol>What advice would you give to {giftData.recipientName} for the future?</ol>
              </ul>
            </div>
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5"></div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 items-start ">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Please write your letter here (<em>we ask that you write your letter from a place of love, support, and encouragement</em>):
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2 w-full">
                <div className="flex rounded-md shadow-sm">
                <textarea
                  id="about"
                  name="about"
                  spellCheck="true"
                  placeholder={`Dear ${giftData.recipientFirstName}, ...`}
                  maxLength= {wantUploadPicture ? 1750 : 3500}
                  rows={8}
                  onChange={e => setQuestionOne(e.target.value)}
                  value={questionOne}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md sm:col-span-2 py-2 px-3"
                />
                  <div className=" ml-3 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> {questionOne.length}/{wantUploadPicture ? 1750 : 3500} characters</div>
                </div>
              </div>
            </div>

    

{wantUploadPicture ? 
    <>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Your picture: </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                { file == null ? <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" style={{ strokeWidth: 2, strokeLinecap:"round", strokeLinejoin:"round" }}/>
                </svg> : <div> </div>}
                <div className="flex text-sm text-gray-600">
                {   file !== null?  <label htmlFor="file-upload"> <span className="relative bg-white rounded-md font-medium text-grey-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"> Image Ready to Send.</span> </label>:  (<>
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
    
                    <input name='file-upload' onChange={(e) => setFile(e.target.files[0])} type='file' accept='image/*'/>
                    <p className="text-xs text-gray-500">PNG or JPG up to 16MB</p>
                  </label>

                  </>
                  )}
                </div>
                
              </div>
            </div>
          </div>
          {/* { imageUrl && selectedImage && (
              <div>
                <div className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" >Image Preview:</div>
                <Image src={imageUrl} alt={'Image'} height="200" width='200'/>
              </div>
)} */}
        </div>
        </> : <div> </div>}
       </div>
     </div>
     </div>

      <div className="pt-5">
        <div className="flex justify-end">
         
          <button
            type="submit"
            className="ml-3 mb-8 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </div>
    </form>
    </>
  );
}

export default Messages;

Messages.getInitialProps = async ({query: {userId}}) => {
  //fetch data from the server using userId
  const data = await fetch(`https://your-api.com/users/${userId}`);
  //return data as props
  return { userData: data };
}