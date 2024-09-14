import React, { useState } from 'react';

// Sample data for products
const sampleProducts = [
  { id: 1, name: 'Jersey Cow', breed: 'Jersey', age: 2, price: 1500, milkPerDay: 20, imageUrl: 'https://i.pinimg.com/564x/4b/c8/69/4bc8694db892615e6888a489d073b3e1.jpg', description: 'Jersey cows are known for their high-quality milk and docile nature.' },
  { id: 2, name: 'Holstein Cow', breed: 'Holstein', age: 3, price: 1800, milkPerDay: 25, imageUrl: 'https://i.pinimg.com/564x/e3/04/06/e30406afafe3b20a94df00917a1768e0.jpg', description: 'Holsteins are the most common dairy cows and produce large amounts of milk.' },
  { id: 3, name: 'Guernsey Cow', breed: 'Guernsey', age: 1, price: 1400, milkPerDay: 18, imageUrl: 'https://i.pinimg.com/564x/fe/c6/ae/fec6ae5bafb04b1c9488fb3eb3c57515.jpg', description: 'Guernseys are known for their rich, golden-colored milk with a high butterfat content.' },
  // Add more products as needed
];

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState(sampleProducts); // Store products data
  const [filters, setFilters] = useState({
    breed: '',
    age: '',
    price: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.breed ? product.breed === filters.breed : true) &&
      (filters.age ? product.age === parseInt(filters.age) : true) &&
      (filters.price ? product.price <= parseInt(filters.price) : true)
    );
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  const handleBackToList = () => {
    setSelectedProduct(null); // Clear the selected product to go back to list
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>

      {/* Check if a product is selected to show details, otherwise show the product list */}
      {selectedProduct ? (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBackToList}
            className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Back to Product List
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
              <p className="text-lg mb-4">{selectedProduct.description}</p>
              <p className="text-lg mb-2"><strong>Breed:</strong> {selectedProduct.breed}</p>
              <p className="text-lg mb-2"><strong>Age:</strong> {selectedProduct.age} years</p>
              <p className="text-lg mb-2"><strong>Milk Production:</strong> {selectedProduct.milkPerDay} liters/day</p>
              <p className="text-lg mb-4"><strong>Price:</strong> Kshs.{selectedProduct.price}</p>

              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Filter Section */}
          <div className="flex space-x-4 mb-8 justify-center">
            <select
              name="breed"
              value={filters.breed}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            >
              <option value="">All Breeds</option>
              <option value="Jersey">Jersey</option>
              <option value="Holstein">Holstein</option>
              <option value="Guernsey">Guernsey</option>
            </select>

            <select
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            >
              <option value="">All Ages</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
            </select>

            <input
              type="number"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              placeholder="Max Price"
              className="border p-2 rounded"
            />
          </div>

          {/* Product Listing */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-lg text-center">
                  <img
  src={product.imageUrl}
  alt={product.name}
  className="w-full h-89 object-contain mb-2"
/>

                  <h2 className="text-md font-bold mb-1">{product.name}</h2>
                  <p className="text-sm">Breed: {product.breed}</p>
                  <p className="text-sm">Age: {product.age} years</p>
                  <p className="text-sm">Milk per day: {product.milkPerDay} liters</p>
                  <p className="text-sm font-bold">Price: Kshs.{product.price}</p>

                  {/* View Details Button */}
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No products found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage;
