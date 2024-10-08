"use client";
import Image from "next/image";
import { BiSolidBank } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { useState, useEffect } from "react";
import { IoArrowDown } from "react-icons/io5";
import data from '../../public/data.json'
export default function Home() {

  const [tableData] = useState(data);
  const [currentpage, setCurrentpage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState("12 Months");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOrder, setSortOrder] = useState("asc")


  const filteredData = tableData.filter((item) => {
    const currentDate = new Date();
    const itemDate = new Date(item.date);

    // Filtering logic based on selected filter
    let isWithinDateRange = true;
    if (selectedDate) {
      isWithinDateRange = itemDate.toDateString() === new Date(selectedDate).toDateString(); // Filter by selected date
    }

    switch (selectedFilter) {
      case "12 Months":
        return isWithinDateRange && itemDate >= new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
      case "30 Days":
        return isWithinDateRange && itemDate >= new Date(currentDate.setDate(currentDate.getDate() - 30));
      case "7 Days":
        return isWithinDateRange && itemDate >= new Date(currentDate.setDate(currentDate.getDate() - 7));
      case "24 hours":
        return isWithinDateRange && itemDate >= new Date(currentDate.setHours(currentDate.getHours() - 24));
      default:
        return isWithinDateRange;
    }
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA; 
  });
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentpage(pageNumber);





  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); 
  };

  return (
    <div>
      {/* NAVABAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 lg:px-16 m-4 space-y-4 lg:space-y-0">

        <h2 className="text-2xl font-semibold">Banking</h2>


        <div className="flex  items-center space-x-4 mr-14">
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
      {/* MAIN DIV */}
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
      {/* TABLE FUNCIONALITY */}
      <div className="ml-16 mb-2 mr-16" >
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Recent Transaction
              <span className="block lg:inline text-sm font-normal">
                {" "}12 months (10 Dec 2023 - 9 Dec 2024)
              </span>
            </h2>
          </div>
          <div className="border rounded-lg w-full lg:w-fit mt-4 lg:mt-0">
            <div className="flex justify-between lg:justify-start rounded-lg">
              {["12 Months", "30 Days", "7 Days", "24 hours"].map((filter) => (
                <h2
                  key={filter}
                  className={`border-2 p-2 cursor-pointer ${selectedFilter === filter ? "bg-gray-300 text-black" : "bg-white"
                    }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </h2>
              ))}
            </div>
          </div>
          <div className="relative w-full lg:w-fit mt-4 lg:mt-0">
            <input
              type="date"
              className="block border border-gray-500 rounded-lg pl-10 pr-2 py-2 w-full lg:w-auto"
              placeholder="Select a date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            {/* You can uncomment the icon if needed */}
            {/* <CiCalendarDate className="absolute top-1/3 left-2 text-gray-500" /> */}
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
