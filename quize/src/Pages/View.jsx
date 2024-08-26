import React, { useContext } from "react";
import Container from "../Components/Container";
import { MainContext } from "../Context/Main";

const View = () => {
  const{data}=useContext(MainContext);
 
  return (
    <Container>
      <div className="relative overflow-x-auto my-3 shadow">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Questions
              </th>
              <th scope="col" className="px-6 py-3">
                Option A
              </th>
              <th scope="col" className="px-6 py-3">
                Option B
              </th>
              <th scope="col" className="px-6 py-3">
                Option C
              </th>
              <th scope="col" className="px-6 py-3">
                Option D
              </th>
              <th scope="col" className="px-6 py-3">
                CreateAt
              </th>
            </tr>
          </thead>
          <tbody>
           {
            data.map(
              (quiz)=>{
                return(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              
                  <td className={`px-6 py-4 `}>{quiz.question}</td>
                  <td className={`px-6 py-4 ${quiz.answer=="a" ? 'font-bold bg-slate-900' : ''}`}>{quiz.option_a}</td>
                  <td className={`px-6 py-4 ${quiz.answer=="b" ? 'font-bold bg-slate-900 ' : ''}`}>{quiz.option_b}</td>
                  <td className={`px-6 py-4 ${quiz.answer=="c" ? 'font-bold bg-slate-900' : ''}`}>{quiz.option_c}</td>
                  <td className={`px-6 py-4 ${quiz.answer=="d" ? 'font-bold bg-slate-900' : ''}`}>{quiz.option_d}</td>
                  <td className={`px-6 py-4 `}>{new Date (quiz.createAt).toLocaleString()}</td>



                </tr>
                )
              }
            )
           }
           
            
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default View;
