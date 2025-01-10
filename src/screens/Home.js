import React, { useEffect, useState } from 'react';

import Navbar from '../component/Navbar';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Slider from '../component/Slider';


export default function Home() {

  const [foodcat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/DisplayData/food", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    })

    response = await response.json();

    setFoodItem(response[0])
    setFoodCat(response[1])
    // console.log(response[0],response[1])

  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Slider />
      </div>
      <div className="container">
        {

          foodcat.length > 0 ?
            foodcat.map((catdata) => {
              return (
                <div className="row mb-3">
                  <div key={catdata._id} className='fs-3 m-3'>
                    {catdata.categoryName}
                  </div>
                  <hr />
                  <div  className="row m-3">
                    {
                      foodItem.length > 0 ? foodItem.filter((itemData)=> itemData.categoryName === catdata.categoryName).map((filteritemData)=>{return(
                        <div key={filteritemData._id} className="col-12 col-md-6 col-lg-3 ">
                             <Card foodName={filteritemData.name}
                                  options={filteritemData.options[0]}
                                  imgSrc={filteritemData.img}
                             />
                        </div>
                      )

                      })
                        : <div>no such files</div>

                    }
                  </div>
                </div>
              );
            }) : <div>No Categories Available</div>

        }
      </div>
      <div>

        <Footer />
      </div>
    </div>

  );
}
