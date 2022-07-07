const API_URL = `https://api4.bitlo.com`;

const GET = async (path) => {
  const request = await fetch(`${API_URL}${path}`);
  return await request.json();
};

export default GET;