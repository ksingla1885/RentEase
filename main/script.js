// Function to display listings
function displayListings(listings) {
  const listingsContainer = document.getElementById('listings');
  listingsContainer.innerHTML = ''; // Clear previous results

  listings.forEach(listing => {
    const listingDiv = document.createElement('div');
    listingDiv.className = 'listing';

    // Left side: Image gallery
    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'listing-images';
    listing.images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = listing.title;
      imagesDiv.appendChild(img);
    });

    // Add photo count
    const photoCount = document.createElement('div');
    photoCount.className = 'photo-count';
    photoCount.textContent = `${listing.images.length} Photos`;
    imagesDiv.appendChild(photoCount);

    // Right side: Listing details
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'listing-details';

    // Badges
    const badgesDiv = document.createElement('div');
    badgesDiv.className = 'badges';
    if (listing.partnerVerified) {
      const partnerVerified = document.createElement('span');
      partnerVerified.className = 'partner-verified';
      partnerVerified.textContent = 'Partner Verified';
      badgesDiv.appendChild(partnerVerified);
    }
    if (listing.brandNew) {
      const brandNew = document.createElement('span');
      brandNew.className = 'brand-new';
      brandNew.textContent = 'Brand New';
      badgesDiv.appendChild(brandNew);
    }
    detailsDiv.appendChild(badgesDiv);

    // Title
    const title = document.createElement('h3');
    title.textContent = listing.title;
    detailsDiv.appendChild(title);

    // Price
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = listing.price;
    detailsDiv.appendChild(price);

    // Amenities
    const amenities = document.createElement('p');
    amenities.className = 'amenities';
    amenities.innerHTML = `<strong>Amenities:</strong> ${listing.amenities.join(', ')}`;
    detailsDiv.appendChild(amenities);

    // Location Highlights
    const locationHighlights = document.createElement('div');
    locationHighlights.className = 'location-highlights';
    locationHighlights.innerHTML = `
      <strong>Location Highlights:</strong>
      <ul>
        ${listing.locationHighlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
    `;
    detailsDiv.appendChild(locationHighlights);

    // "View Listing" button
    const viewButton = document.createElement('button');
    viewButton.className = 'view-listing-button';
    viewButton.textContent = 'View Listing';
    viewButton.addEventListener('click', () => {
      alert(`Viewing listing: ${listing.title}`);
    });
    detailsDiv.appendChild(viewButton);

    // Append images and details to the listing
    listingDiv.appendChild(imagesDiv);
    listingDiv.appendChild(detailsDiv);

    // Append listing to the container
    listingsContainer.appendChild(listingDiv);
  });
}

// Function to handle search
function handleSearch() {
  const selectedCity = document.getElementById('cityDropdown').value.toLowerCase();

  // Filter listings based on the selected city
  const filteredListings = selectedCity ?
    listingsData.filter(listing => listing.city.toLowerCase() === selectedCity) :
    listingsData; // If no city is selected, show all listings

  displayListings(filteredListings);
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Initial display of all listings
displayListings(listingsData);





/* Modal */
// Function to display detailed listing information
function showListingDetails(listing) {
  // Create a modal for detailed listing information
  const modal = document.createElement('div');
  modal.className = 'listing-modal';

  // Modal content
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>${listing.title}</h2>
      <p class="price">${listing.price}</p>
      <p class="location">${listing.city}</p>
      <p class="occupancy">Occupancy Type: ${listing.occupancyType}</p>
      <p class="food">Food Included: ${listing.foodIncluded ? 'Yes' : 'No'}</p>

      <div class="details-section">
        <h3>Property Details</h3>
        <p>${listing.propertyDetails}</p>
      </div>

      <div class="amenities-section">
        <h3>Amenities</h3>
        <ul>
          ${listing.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
        </ul>
      </div>

      <div class="food-section">
        <h3>Food and Kitchen</h3>
        <p>Meals Provided: ${listing.mealsProvided.join(', ')}</p>
        <p>Food Charges: ${listing.foodCharges}</p>
      </div>

      <div class="other-charges">
        <h3>Other Charges</h3>
        <p>Deposit Amount: ${listing.depositAmount}</p>
        <p>Maintenance: ${listing.maintenance}</p>
        <p>Electricity Charges: ${listing.electricityCharges}</p>
      </div>

      <div class="photos-section">
        <h3>Photos</h3>
        <div class="photos">
          ${listing.images.map(image => `<img src="${image}" alt="${listing.title}">`).join('')}
        </div>
      </div>

      <button class="contact-owner">Contact Owner</button>
    </div>
  `;

  // Close modal when clicking the close button
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });

  // Append modal to the body
  document.body.appendChild(modal);
}

// Function to display listings
function displayListings(listings) {
  const listingsContainer = document.getElementById('listings');
  listingsContainer.innerHTML = ''; // Clear previous results

  listings.forEach(listing => {
    const listingDiv = document.createElement('div');
    listingDiv.className = 'listing';

    // Left side: Image gallery
    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'listing-images';
    listing.images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = listing.title;
      imagesDiv.appendChild(img);
    });

    // Add photo count
    const photoCount = document.createElement('div');
    photoCount.className = 'photo-count';
    photoCount.textContent = `${listing.images.length} Photos`;
    imagesDiv.appendChild(photoCount);

    // Right side: Listing details
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'listing-details';

    // Badges
    const badgesDiv = document.createElement('div');
    badgesDiv.className = 'badges';
    if (listing.partnerVerified) {
      const partnerVerified = document.createElement('span');
      partnerVerified.className = 'partner-verified';
      partnerVerified.textContent = 'Partner Verified';
      badgesDiv.appendChild(partnerVerified);
    }
    if (listing.brandNew) {
      const brandNew = document.createElement('span');
      brandNew.className = 'brand-new';
      brandNew.textContent = 'Brand New';
      badgesDiv.appendChild(brandNew);
    }
    detailsDiv.appendChild(badgesDiv);

    // Title
    const title = document.createElement('h3');
    title.textContent = listing.title;
    detailsDiv.appendChild(title);

    // Price
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = listing.price;
    detailsDiv.appendChild(price);

    // Amenities
    const amenities = document.createElement('p');
    amenities.className = 'amenities';
    amenities.innerHTML = `<strong>Amenities:</strong> ${listing.amenities.join(', ')}`;
    detailsDiv.appendChild(amenities);

    // "View Listing" button
    const viewButton = document.createElement('button');
    viewButton.className = 'view-listing-button';
    viewButton.textContent = 'View Listing';
    viewButton.addEventListener('click', () => {
      showListingDetails(listing);
    });
    detailsDiv.appendChild(viewButton);

    // Append images and details to the listing
    listingDiv.appendChild(imagesDiv);
    listingDiv.appendChild(detailsDiv);

    // Append listing to the container
    listingsContainer.appendChild(listingDiv);
  });
}

// Function to handle search
function handleSearch() {
  const selectedCity = document.getElementById('cityDropdown').value.toLowerCase();

  // Filter listings based on the selected city
  const filteredListings = selectedCity ?
    listingsData.filter(listing => listing.city.toLowerCase() === selectedCity) :
    listingsData; // If no city is selected, show all listings

  displayListings(filteredListings);
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Initial display of all listings
displayListings(listingsData);

// Function to show the add listing form
document.getElementById('addListingButton').addEventListener('click', () => {
  document.getElementById('addListingForm').style.display = 'block';
});

// Function to close the add listing form
document.getElementById('closeFormButton').addEventListener('click', () => {
  document.getElementById('addListingForm').style.display = 'none';
});

// Function to handle form submission
document.getElementById('listingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const newListing = {
    title: formData.get('title'),
    city: formData.get('city'),
    price: formData.get('price'),
    type: formData.get('type'),
    occupancyType: formData.get('occupancyType'),
    foodIncluded: formData.get('foodIncluded') === 'true',
    propertyDetails: formData.get('propertyDetails'),
    amenities: formData.get('amenities').split(',').map(item => item.trim()),
    mealsProvided: formData.get('mealsProvided').split(',').map(item => item.trim()),
    foodCharges: formData.get('foodCharges'),
    depositAmount: formData.get('depositAmount'),
    maintenance: formData.get('maintenance'),
    electricityCharges: formData.get('electricityCharges'),
    images: formData.get('images').split(',').map(item => item.trim()),
    partnerVerified: false,
    brandNew: true
  };

  // Add new listing to the data
  listingsData.push(newListing);

  // Refresh the listings display
  displayListings(listingsData);

  // Close the form
  document.getElementById('addListingForm').style.display = 'none';

  // Reset the form
  e.target.reset();
});

// Rest of the JavaScript code remains the same

