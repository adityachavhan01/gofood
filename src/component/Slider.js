// src/components/Slider.js
import React ,{useState,useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'; // Ensure this file contains necessary styles

function Slider({ foodCat }) {
  const imageUrls = [
    'https://market-resized.envatousercontent.com/previews/files/633912991/01_wellfood-preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=4bc70e301dd6ac64f23323d0b62a5bbe8d84690a1bcc7f2b677108ee32a7e526',
    'https://market-resized.envatousercontent.com/previews/files/632762073/Spicyhunt+-+590X300+Banner+without+price.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=7058d2d011f82fb8c84de561b350b00325c59ecf25d9fc71d1e213c3615bb07a',
    'https://market-resized.envatousercontent.com/previews/files/521902978/Preview/001.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=c53ebad92543747c037801cd3c6a639a458251453c8de466192a184b9ea4bb9d'
  ];
const [searchTerm, setSearchTerm] = useState("");
  const [filteredCat, setFilteredCat] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCat([]);
    } else {
      const results = foodCat.filter(cat =>
  cat?.CategoryName?.toLowerCase().includes(searchTerm.toLowerCase())
);
      setFilteredCat(results);
    }
  }, [searchTerm, foodCat]);

  return (
    <div className="container-fluid">
      <Carousel className="carousel-fade ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[0]}
            alt="First slide"
          />
          <Carousel.Caption>
            <input
              type="text"
              className="form-control"
              placeholder="Search by category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[1]}
            alt="Second slide"
          />
          <Carousel.Caption>
            <input
              type="text"
              className="form-control"
              placeholder="Search by category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageUrls[2]}
            alt="Third slide"
          />
          <Carousel.Caption>
            <input
              type="text"
              className="form-control"
              placeholder="Search by category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            {filteredCat.length > 0 && (
        <div className="container mt-4">
          <h5>Search Results:</h5>
          <ul>
            {filteredCat.map((cat, index) => (
              <li key={index}>{cat.CategoryName}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Slider;
