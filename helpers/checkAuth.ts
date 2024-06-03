import { getAccessToken } from "./cookies";


export const checkAuth = async () => {
  const authToken: string | undefined  = await getAccessToken()
    .then((result) => {
      // console.log('Access Token :', result.accessToken);
      return result.accessToken;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  try {
    // Check if the user is authenticated based on a cookie key
    if (authToken) {
      return {
        props: {},
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
