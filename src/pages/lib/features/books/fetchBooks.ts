import axios from "axios";

const fetchBooks = async (subject: string, page: number): Promise<{
	data: [];
  }> => {
	const apiUrl = `/api/books?subject=${subject}&page=${page}`;
	try {
	  const response = await axios.get(apiUrl);
  
	  if (response.status !== 200) {
		throw new Error(`Error: ${response.status}`);
	  }
  
	  const data: [] = response.data.data.items;
	  
	  return { data };
	} catch (error) {
	  throw new Error('Ошибка загрузки книг');
	}
};
  
export default fetchBooks;