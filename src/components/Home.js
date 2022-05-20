import React,{useState} from 'react';
import './style.css';


function Home({placeholder,data}) {
  const [filterData,setfilterData] = useState([]);

  const handleFilter = (event) => {
     const searchWord = event.target.value;
     const newFilter = data.filter((value) => {
         return (value.Name.toLowerCase().includes(searchWord.toLowerCase()) || value.email.toLowerCase().includes(searchWord.toLowerCase()))
     });

      if(searchWord === ""){
        setfilterData("")
      }
      else{
        setfilterData(newFilter);
      }
  };

  


  return (
     <div className="home">
       <div className="home-title">
         <span>Customer Success Managers</span>
       </div>


       <div className="search-bar">
         <input type="text" 
          placeholder={placeholder} 
          onChange={handleFilter} />
         <span>Add CSM</span>
       </div>

       { filterData.length !== 0 &&(
       <div className="data-result">
         {filterData.map((value,key) => {
           return  <div className="datas" >
              <div className="data-logo">
             <span>{value.logo}</span>
           </div>
           <div className="data-details">
             <div className="name">
             <span>{value.Name}</span>
             </div>
             <div className="desc">
             <span>{value.description} . </span> 
             <span>{value.email}</span>
             </div>
           </div>
         </div>
         })}
       </div>
)}

       <div className="member">
       <div className="home-data">
         <div className="data">
           <div className="data-logo">
             <span>CM</span>
           </div>
           <div className="data-details">
             <div className="name">
             <span>Chilman </span><span> Mehrotra</span>
             </div>
             <span>Client Manager</span>
           </div>
         </div>
         <div className="data-delete">
             <img src="/images/delete.svg" alt="" />
         </div>
       </div>

       <div className="home-data">
         <div className="data">
           <div className="data-logo">
             <span>CM</span>
           </div>
           <div className="data-details">
             <span>Chilman Mehrotra</span>
             <span>Client Manager</span>
           </div>
         </div>
         <div className="data-delete">
             <img src="/images/delete.svg" alt="" />
         </div>
       </div>
       
       </div>
     </div>
  );
};

export default Home