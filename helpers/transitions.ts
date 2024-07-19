export const sleep = async (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const handleTransition = async <T extends HTMLElement>(
  e: React.MouseEvent<T, MouseEvent>,
  redirect: () => void,
  delay: number
) => {
  e.preventDefault();

  const body = document.querySelector('body');
  body?.classList.add('page-transition');

  await sleep(delay);
  redirect();
  await sleep(delay);

  body?.classList.remove('page-transition');
};
