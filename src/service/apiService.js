export const authService = async (url, method, body, params = {}) => {
   console.log(localStorage.getItem('auth'));
   const response = await fetch(url, {
      method,
      body: body,
      headers: {
         'Content-Type': 'application/json',
      },
   })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         return (
            localStorage.setItem('auth', data.token),
            localStorage.setItem('id', data.userId),
            localStorage.setItem('firstName', data.firstName),
            localStorage.setItem('lastName', data.lastName)
         );
      });

   if (!response.ok) {
      throw new Error('Could not add data.');
   }
};

export const apiService = async (url, method, token, params = {}) => {
   return fetch(url, {
      method,
      headers: {
         'Content-Type': 'application/json',
         Authorization: token,
      },
   })
      .then(res => res.json())
      .catch(() => {
         throw new Error('Could not add data.');
      });
};
