export const checkAuth = async () => {
  
  const authResponse: {id: number, role: string,  message: string, success: boolean} = await fetch("/api/token")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
    .catch((error: any) => {
      console.error(error);
      return undefined;
    });

  try {
    if (authResponse.success) {
      return {
        props: {
          id: authResponse.id,
          message: authResponse.message,
          success: authResponse.success,
          role: authResponse.role
        },
      };
    } else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  } catch (err) {
    console.error('Authentication error:', err);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};