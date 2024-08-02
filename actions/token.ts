export const saveToken = async (token: any) => {
  const res = await fetch(`/next-api/token`, {
    method: 'POST',
    body: JSON.stringify({ token}),
  });

  return res.json();
};
