// src/services/api.js
export async function fetchProperties() {
  try {
    const res = await fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing");
    const data = await res.json();

    // Map API response to our app structure
    return data.map((item) => ({
      id: item.id,
      name: item.name || `Property ${item.id}`,
      city: item.city || "Unknown City",
      state: item.state || "Unknown State",
      price: item.price ? Number(item.price) : 0,
      image: item.image || "https://via.placeholder.com/400x300?text=No+Image",
      type: item.type || "sale", // ensure type exists (sale/rent)
    }));
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}
