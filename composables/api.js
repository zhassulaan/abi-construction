const fetchDataBySlug = async (slug) => {
  try {
    const { data } = await useFetch('https://abi-construction.kz/wp-json/wp/v2/pages', {
      query: { slug },
    });
    return data.value[0].acf;
  } catch (error) {
    console.error(`Error fetching data for slug ${slug}:`, error);
    return null;
  }
};

const fetchPostsByCategory = async (category) => {
  const config = useRuntimeConfig();
  
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
    const { data } = await useFetch(config.public.wordpressUrl, {
      method: 'get',
      query: { query, variables },
      transform(data) {
        return data.data.posts.nodes;
      }
    });

    return data.value;
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
