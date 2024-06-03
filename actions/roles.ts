export const checkAcess = async (
  token: { accessToken: any },
  roleToCheck: string,
) => {
  const res = await fetch(`http://localhost:3000/api/role`, {
    method: 'POST',
    body: JSON.stringify({ token: token.accessToken, roleToCheck }), // Используем только строку accessToken
  });

  return res.json();
};
