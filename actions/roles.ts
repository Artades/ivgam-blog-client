export const getRole = async (token: any) => {
   const res = await fetch(`/api/role`, {
     method: 'POST',
     body: JSON.stringify({ token }),
   });

   return res.json();
}