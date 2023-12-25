import axios from 'axios';

const fetchDataBySlug = async (slug) => {
  try {
    const { data } = await axios.get(`https://abi-construction.kz/wp-json/wp/v2/pages?slug=${slug}`);
    return data[0].acf;
  } catch (error) {
    console.error(`Error fetching data for slug ${slug}:`, error);
    return null;
  }
};

const fetchPostsByCategory = async (category) => {
  const endpoint = 'https://abi-construction.kz/graphql';
  const query = `
    query PostsByCategory($category: String!) {
      posts(where: { categoryName: $category }) {
        nodes {
          id
          title
          date
          excerpt
        }
      }
    }
  `;
  const variables = { category };

  try {
    const { data } = await axios.post(endpoint,
      {
        query: query,
        variables: variables
      }, {
        transformResponse: [(data) => JSON.parse(data)]
      }
    );

    return data.data.posts.nodes;
  } catch (error) {
    console.error(`Error fetching posts for ${category}:`, error);
    return null;
  }
};

const sortByDate = (data) => {
  return data.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const filterByExcerpt = (data, text) => {
  return data.filter(item => item.excerpt === text)
};

export { fetchDataBySlug, fetchPostsByCategory, sortByDate, filterByExcerpt };
