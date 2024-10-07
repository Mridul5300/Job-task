
import Heading from "@/Component/Heading";
import { BiSolidBank } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Home() {
  return (
    <div>
    {/* Header Section */}
    <div className="flex justify-between items-center py-4 px-16">
      {/* Left Section: Banking Text */}
      <h2 className="text-2xl font-semibold">Banking</h2>

      {/* Right Section: AI Categorisation Toggle and Profile */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-3">
          <span className="icon">✨</span> {/* Replace with actual icon */}
          <span>AI Categorisation</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-gray-200 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-4"></div>
          </label>
        </div>

        {/* Notification Icon */}
        <IoIosNotificationsOutline className="text-2xl" />
        
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/40" 
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>

  {/* <div className="border">
  <div className="flex justify-start  px-16  space-x-4">
      <button className=" border-2 rounded-md px-4 py-2">Bank Accounts</button>
      <button className="border-b-2 border-transparent px-4 py-2">Cards</button>
      <button className="border-b-2 border-transparent px-4 py-2">Statements</button>
    </div>
  </div> */}

<div className="flex justify-start px-16 space-x-2">
  {/* Active Button */}
  <button className="border border-gray-300 text-black px-4 py-2 rounded-md bg-white font-semibold">
    Bank Accounts
  </button>

  {/* Inactive Button 1 */}
  <button className="border border-transparent text-gray-500 px-4 py-2 rounded-md bg-gray-100">
    Cards
  </button>

  {/* Inactive Button 2 */}
  <button className="border border-transparent text-gray-500 px-4 py-2 rounded-md bg-gray-100">
    Statements
  </button>
</div>

    
    <main className="grid grid-cols-1 gap-4  mt-6 px-16 sm:grid-cols-3">

  <div className="p-6 bg-white rounded-lg shadow-lg relative max-w-xs w-full">
    <div className="flex flex-col gap-1">
      <p className="text-gray-600 font-semibold">CITI Bank</p>
      <p className="text-gray-400 text-sm">A/C ************6839</p>
      <p className="text-3xl font-bold mt-2">$541,204</p>
    </div>
    <div className="absolute top-4 right-4 p-2">
      <BiSolidBank size={24} className="text-purple-500" />
    </div>
  </div>

  
  <div className="p-6 bg-white rounded-lg shadow-lg relative max-w-xs w-full">
    <div className="flex flex-col gap-1">
      <p className="text-gray-600 font-semibold">CITI Bank</p>
      <p className="text-gray-400 text-sm">A/C ************6839</p>
      <p className="text-3xl font-bold mt-2">$541,204</p>
    </div>
    <div className="absolute top-4 right-4 p-2">
      <BiSolidBank size={24} className="text-purple-500" />
    </div>
  </div>


  <div className="p-6 bg-white rounded-lg shadow-lg relative max-w-xs w-full">
    <div className="flex flex-col gap-1">
      <p className="text-gray-600 font-semibold">Yes Bank</p>
      <p className="text-gray-400 text-sm">A/C ************6839</p>
      <p className="text-3xl font-bold mt-2">$541,204</p>
    </div>
    <div className="absolute top-4 right-4 p-2">
      <BiSolidBank size={24} className="text-purple-500" />
    </div>
  </div>
  
  <div className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center max-w-xs w-full sm:col-span-3">
    <button className="text-blue-500 font-semibold">+ Add New</button>
  </div>
</main>
<div className="mt-6">
                    <h2>Recent Transaction</h2>
               </div>
               <div className="overflow-x-auto">
                    <table className="table table-xs">
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>Job</th>
                                   <th>company</th>
                                   <th>location</th>
                                   <th>Last Login</th>
                                   <th>Favorite Color</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <th>1</th>
                                   <td>Cy Ganderton</td>
                                   <td>Quality Control Specialist</td>
                                   <td>Littel, Schaden and Vandervort</td>
                                   <td>Canada</td>
                                   <td>12/16/2020</td>
                                   <td>Blue</td>
                              </tr>
                              <tr>
                                   <th>2</th>
                                   <td>Hart Hagerty</td>
                                   <td>Desktop Support Technician</td>
                                   <td>Zemlak, Daniel and Leannon</td>
                                   <td>United States</td>
                                   <td>12/5/2020</td>
                                   <td>Purple</td>
                              </tr>
                              <tr>
                                   <th>3</th>
                                   <td>Brice Swyre</td>
                                   <td>Tax Accountant</td>
                                   <td>Carroll Group</td>
                                   <td>China</td>
                                   <td>8/15/2020</td>
                                   <td>Red</td>
                              </tr>
                              <tr>
                                   <th>4</th>
                                   <td>Marjy Ferencz</td>
                                   <td>Office Assistant I</td>
                                   <td>Rowe-Schoen</td>
                                   <td>Russia</td>
                                   <td>3/25/2021</td>
                                   <td>Crimson</td>
                              </tr>
                              <tr>
                                   <th>5</th>
                                   <td>Yancy Tear</td>
                                   <td>Community Outreach Specialist</td>
                                   <td>Wyman-Ledner</td>
                                   <td>Brazil</td>
                                   <td>5/22/2020</td>
                                   <td>Indigo</td>
                              </tr>
                              <tr>
                                   <th>6</th>
                                   <td>Irma Vasilik</td>
                                   <td>Editor</td>
                                   <td>Wiza, Bins and Emard</td>
                                   <td>Venezuela</td>
                                   <td>12/8/2020</td>
                                   <td>Purple</td>
                              </tr>
                              <tr>
                                   <th>7</th>
                                   <td>Meghann Durtnal</td>
                                   <td>Staff Accountant IV</td>
                                   <td>Schuster-Schimmel</td>
                                   <td>Philippines</td>
                                   <td>2/17/2021</td>
                                   <td>Yellow</td>
                              </tr>
                              <tr>
                                   <th>8</th>
                                   <td>Sammy Seston</td>
                                   <td>Accountant I</td>
                                   <td>Hara, Welch and Keebler</td>
                                   <td>Indonesia</td>
                                   <td>5/23/2020</td>
                                   <td>Crimson</td>
                              </tr>
                              <tr>
                                   <th>9</th>
                                   <td>Lesya Tinham</td>
                                   <td>Safety Technician IV</td>
                                   <td>Turner-Kuhlman</td>
                                   <td>Philippines</td>
                                   <td>2/21/2021</td>
                                   <td>Maroon</td>
                              </tr>
                              <tr>
                                   <th>10</th>
                                   <td>Zaneta Tewkesbury</td>
                                   <td>VP Marketing</td>
                                   <td>Sauer LLC</td>
                                   <td>Chad</td>
                                   <td>6/23/2020</td>
                                   <td>Green</td>
                              </tr>
                              <tr>
                                   <th>11</th>
                                   <td>Andy Tipple</td>
                                   <td>Librarian</td>
                                   <td>Hilpert Group</td>
                                   <td>Poland</td>
                                   <td>7/9/2020</td>
                                   <td>Indigo</td>
                              </tr>
                              <tr>
                                   <th>12</th>
                                   <td>Sophi Biles</td>
                                   <td>Recruiting Manager</td>
                                   <td>Gutmann Inc</td>
                                   <td>Indonesia</td>
                                   <td>2/12/2021</td>
                                   <td>Maroon</td>
                              </tr>
                              <tr>
                                   <th>13</th>
                                   <td>Florida Garces</td>
                                   <td>Web Developer IV</td>
                                   <td>Gaylord, Pacocha and Baumbach</td>
                                   <td>Poland</td>
                                   <td>5/31/2020</td>
                                   <td>Purple</td>
                              </tr>
                              <tr>
                                   <th>14</th>
                                   <td>Maribeth Popping</td>
                                   <td>Analyst Programmer</td>
                                   <td>Deckow-Pouros</td>
                                   <td>Portugal</td>
                                   <td>4/27/2021</td>
                                   <td>Aquamarine</td>
                              </tr>
                              <tr>
                                   <th>15</th>
                                   <td>Moritz Dryburgh</td>
                                   <td>Dental Hygienist</td>
                                   <td>Schiller, Cole and Hackett</td>
                                   <td>Sri Lanka</td>
                                   <td>8/8/2020</td>
                                   <td>Crimson</td>
                              </tr>
                              <tr>
                                   <th>16</th>
                                   <td>Reid Semiras</td>
                                   <td>Teacher</td>
                                   <td>Sporer, Sipes and Rogahn</td>
                                   <td>Poland</td>
                                   <td>7/30/2020</td>
                                   <td>Green</td>
                              </tr>
                              <tr>
                                   <th>17</th>
                                   <td>Alec Lethby</td>
                                   <td>Teacher</td>
                                   <td>Reichel, Glover and Hamill</td>
                                   <td>China</td>
                                   <td>2/28/2021</td>
                                   <td>Khaki</td>
                              </tr>
                              <tr>
                                   <th>18</th>
                                   <td>Aland Wilber</td>
                                   <td>Quality Control Specialist</td>
                                   <td>Kshlerin, Rogahn and Swaniawski</td>
                                   <td>Czech Republic</td>
                                   <td>9/29/2020</td>
                                   <td>Purple</td>
                              </tr>
                              <tr>
                                   <th>19</th>
                                   <td>Teddie Duerden</td>
                                   <td>Staff Accountant III</td>
                                   <td>Pouros, Ullrich and Windler</td>
                                   <td>France</td>
                                   <td>10/27/2020</td>
                                   <td>Aquamarine</td>
                              </tr>
                              <tr>
                                   <th>20</th>
                                   <td>Lorelei Blackstone</td>
                                   <td>Data Coordiator</td>
                                   <td>Witting, Kutch and Greenfelder</td>
                                   <td>Kazakhstan</td>
                                   <td>6/3/2020</td>
                                   <td>Red</td>
                              </tr>
                         </tbody>
                         <tfoot>
                              <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>Job</th>
                                   <th>company</th>
                                   <th>location</th>
                                   <th>Last Login</th>
                                   <th>Favorite Color</th>
                              </tr>
                         </tfoot>
                    </table>
               </div>
          </div>

  
  );
}
