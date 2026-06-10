export const createTechnician = async (profile) => {
  // Send technician data to backend
  const response = await fetch('https://lagjobman.onrender.com/api/technicians', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    throw new Error('Failed to create technician');
  }

  return await response.json();
};
