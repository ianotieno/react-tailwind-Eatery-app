import React from 'react';
import { data } from '../data/data.js';



const SearchComponent = ({ searchQuery }) => {
  // If searchQuery is empty, do not display anything
  if (!searchQuery.trim()) {
    return null;
  }

  const filteredName = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" ">
     <div className="inline-flex flex-col justify-center relative text-gray-500">
     
        <div class="relative">
      {filteredName.length === 0 ? (
       <p className='font-bold text-2xl px-2 pt-4'><span>No matching products found</span></p> 
      ) : (
        filteredName.map((item,index) => (
          <div key={index}>
              <img src={item.image} alt={item.name} style={{ height: 40, marginRight: 10 }} />
              {`${item.name}`}
            
          </div>
        ))
      )}
      </div>
      </div>
    </div>
  );
};

export default SearchComponent;
