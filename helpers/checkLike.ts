export const checkLike = (postId: number, userFavorites: any) => {
  console.log('User Favorites from hook: ', userFavorites);
  const isLiked = userFavorites.some(
    (favorite: any) => favorite.postId === postId,
  );

  if (isLiked) {
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
};
