// src/services/technicianService.js

export const createTechnician = async (profile) => {
  try {
    const response = await fetch('https://lagjobman.onrender.com/api/technicians', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to create technician');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating technician:', error);
    throw error;
  }
};

// ✅ Add searchTechnicians
export const searchTechnicians = async (query) => {
  try {
    const response = await fetch(
      `https://lagjobman.onrender.com/api/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to search technicians');
    }

    return await response.json();
  } catch (error) {
    console.error('Error searching technicians:', error);
    throw error;
  }
};
