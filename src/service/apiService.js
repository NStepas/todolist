export const apiService = async (url, method, body, params = {}) => {
   const response = await fetch(url, {
      method,
      body: body && null,
      headers: {
         'Content-Type': 'application/json',
      },
   }).then(res => res.json());

   if (!response.ok) {
      throw new Error('Could not add comment.');
   }
};
