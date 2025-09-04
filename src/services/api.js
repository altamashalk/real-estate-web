const API_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

export const getProperties = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return [];
  }
};