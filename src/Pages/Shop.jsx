import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import Loading from '../Components/Loading';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery]=useState("");

  async function fetchProducts() {
    setLoading(true);
    const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=15");
    setProducts(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

   //filter based on seach query
   const filteredProducts=products.filter((product)=>{
    return (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
   });

  // const categories = ["All", "Shoes", "Miscellaneous"];
  const categories = [""];
  // // Function to handle category selection
  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  // };

  // // Filter products based on the selected category
  // const filteredProducts = selectedCategory === "All"
  //   ? Products
  //   : Products.filter(product => product.category && product.category.name === selectedCategory);

  return (
    <>
      <div className='bg-gray-100'>
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Shop</h1>

          {/* Search Field */}
          <div className="mb-4 flex justify-center">
            <input
            value={searchQuery}
              type="text"
              placeholder="Search products..."
              className="border rounded-lg p-2 w-[50%]"
              onChange={(e)=>setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="mb-4 flex justify-center">
            {categories.map((category) => (
              <span
                key={category}
                className={`inline-block text-black rounded-lg px-3 py-1 mr-2 cursor-pointer hover:bg-blue-600 ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleCategoryClick(category)} // Set selected category on click
              >
                {category}
              </span>
            ))}
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className='flex justify-center'><Loading /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => <Card key={product.id} productInfo={product} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
