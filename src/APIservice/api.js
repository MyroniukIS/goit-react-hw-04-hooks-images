const API = {
  BASE_URL: `https://pixabay.com/api`,
  IMG_TYPE: `photo`,
  ORIENT: `horizontal`,
  ORDER: `popular`,
  PER_PAGE: 12,
  KEY: `23557940-e0a9cdf2e70b178fd7f1f33b8`,
};

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export default async function fetchImages(inputValue, page) {
  const url = `${API.BASE_URL}/?image_type=${API.IMG_TYPE}&orientation=${API.ORIENT}&order=${API.ORDER}&q=${inputValue}&page=${page}&per_page=${API.PER_PAGE}&key=${API.KEY}`;

  const response = await fetch(url);
  const result = await response.json();
  return await result.hits;
}
