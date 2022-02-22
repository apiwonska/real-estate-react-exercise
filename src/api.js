// To run server:
// npx json-server --watch data/db.json --port 8000
const URL = 'http://localhost:8000';

export const fetchHouses = async () => {
  const res = await fetch(`${URL}/houses`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const fetchHouse = async (id) => {
  const res = await fetch(`${URL}/houses/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const removeHouse = async (id) => {
  const res = await fetch(`${URL}/houses/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const addHouse = async (formData) => {
  const res = await fetch(`${URL}/houses/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};
