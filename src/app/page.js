"use client";
import Image from "next/image";
import { BiSolidBank } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowDown } from "react-icons/io5";


export default function Home() {
  const [tabledata, setTableData] = useState([])
  const [currentpage, setCurrentpage] = useState(1);
  const [itemsPerPage] = useState(5);
  useEffect(() => {

    axios.get('/Data.Json')
      .then((response) => {
        setTableData(response.data);
        console.log(response.data);


      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const totalPages = Math.ceil(tabledata.length / itemsPerPage);
  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tabledata.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentpage(pageNumber);
  return (
    <div>

      <div className="flex justify-between items-center py-4 px-16 m-4">

        <h2 className="text-2xl font-semibold">Banking</h2>


        <div className="flex items-center space-x-4 mr-14">
          <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-3">
            <span className="icon"><WiStars size={26} className="text-gray-500" /></span>
            <span>AI Categorisation</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-gray-200 transition-all duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-4"></div>
            </label>
          </div>

          <span>  <IoIosNotificationsOutline className="text-2xl" /></span>

          <div>
            <Image className="rounded-full "
              src="https://i.ibb.co.com/mq6mxQn/boy-image.jpg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className="flex ml-16 w-fit border-2 rounded-lg bg-gray-50">
        <button className=" border-2 rounded-md px-4 py-2">Bank Accounts</button>
        <button className="border-b-2 border-transparent px-4 py-2">Cards</button>
        <button className="border-b-2 border-transparent px-4 py-2">Statements</button>
      </div>

      <main className="grid grid-cols-1 gap-4  mt-6 px-16 sm:grid-cols-3">

        <div className="p-6 bg-white rounded-lg border-2 relative max-w-xs w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 font-semibold">CITI Bank</p>
            <p className="text-gray-400 text-sm">A/C ************6839</p>
            <p className="text-3xl font-bold mt-2">$541,204</p>
          </div>
          <div className="absolute top-4 right-4 p-2">
            <BiSolidBank size={24} className="text-purple-500" />
          </div>
        </div>


        <div className="p-6 bg-white rounded-lg border-2  relative max-w-xs w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 font-semibold">CITI Bank</p>
            <p className="text-gray-400 text-sm">A/C ************6839</p>
            <p className="text-3xl font-bold mt-2">$541,204</p>
          </div>
          <div className="absolute top-4 right-4 p-2">
            <BiSolidBank size={24} className="text-purple-500" />
          </div>
        </div>


        <div className="p-6 bg-white rounded-lg border-2  relative max-w-xs w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 font-semibold">Yes Bank</p>
            <p className="text-gray-400 text-sm">A/C ************6839</p>
            <p className="text-3xl font-bold mt-2">$541,204</p>
          </div>
          <div className="absolute top-4 right-4 p-2">
            <BiSolidBank size={24} className="text-purple-500" />
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg  border-2 flex items-center justify-center max-w-xs w-full sm:col-span-3">
          <button className="text-blue-500 font-semibold">+ Add New</button>
        </div>
      </main>
      <div className="ml-16 mb-2 mr-16" >
        <div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Recent Transaction</h2>
        </div>
        <div className="border rounded-lg w-fit">
            <div className="flex rounded-lg">
              <h1 className="border-2 p-1">12 Months</h1>
              <h2 className="border-2 p-1">30 Days</h2>
              <h2 className="border-2 p-1">7 Days</h2>
              <h2 className="border-2 p-1">24 hours</h2>
            </div>
        </div>
        <div>
          <input ></input>  
        </div>
        </div>
        
        <div className="overflow-x-hidden border-2 max-w-7xl mx-auto mt-2">
  <div className="overflow-x-auto max-h-80"> 
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr className="gap-3 border">
          <th className="flex p-3">
            <input type="checkbox" />
            Date <span><IoArrowDown className="text-xl" /></span>
          </th>
          <th>Merchant Name</th>
          <th>Description</th>
          <th>Transaction Type</th>
          <th>TnxId</th>
          <th>Amount</th>
          <th>Account</th>
          <th>Status</th>
          <th>Categories</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center border-2">
        {currentItems.map((tabledatas) => (
          <tr className="border-b-2" key={tabledatas.txnId}>
            <td className="flex items-center gap-2">
              <input type="checkbox" />
              {tabledatas.date}
            </td>
            <td>{tabledatas.merchantName}</td>
            <td>{tabledatas.description}</td>
            <td>{tabledatas.transactionType}</td>
            <td>{tabledatas.txnId}</td>
            <td>{tabledatas.amount}</td>
            <td>{tabledatas.account}</td>
            <td className='outline-2 rounded-lg'>{tabledatas.status}</td>
            <td>{tabledatas.categories}</td>
            <td className="text-xl">:</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex flex-col md:flex-row justify-between items-center m-2">
    <div className="mb-2 md:mb-0">
      <span className="text-sm">
        Showing page {currentpage} of {totalPages}
      </span>
    </div>
    <div className="flex space-x-2">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={`px-3 py-1 border rounded-md ${currentpage === index + 1 ? 'bg-gray-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-100'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
</div>


        </div>
      </div>
  );
}
