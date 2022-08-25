export const filterData = (categories, authors, arr) => {
  const filterArr = arr.filter((itm) => {
    if (categories && authors) {
      return itm?.blogCategory === categories && itm?.authorName === authors;
    }
    return itm?.blogCategory === categories || itm?.authorName === authors;
  });

  return filterArr?.length > 0 ? [...filterArr] : [...arr];
};
