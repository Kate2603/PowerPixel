import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api',
  headers: {
    Accept: 'application/json',
  },
});

const getLimit = () => {
  return window.innerWidth < 768 ? 9 : 12;
};

export const subscribeEmail = async email => {
  const response = await api.post('/subscription', { email });

  if (response.data?.error) {
    throw new Error(response.data?.error || 'Subscription failed');
  }
  return response.data;
};

export const fetchCategories = async (filter = 'Muscles', page = 1) => {
  const limit = getLimit();

  try {
    const response = await api.get('/filters', {
      params: {
        filter,
        page,
        limit,
      },
    });

    if (!response.data) {
      throw new Error('No data received');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories. Please try again later.');
  }
};

export const fetchQuote = async () => {
  try {
    const response = await api.get('/quote');
    return response.data;
  } catch (error) {
    console.error('Error fetching the quote:', error);
  }
};

export const fetchExercises = async ({
  bodypart = '',
  muscles = '',
  equipment = '',
  keyword = '',
  page = 1,
  limit = getLimit(),
}) => {
  try {
    const response = await api.get('/exercises', {
      params: {
        bodypart,
        muscles,
        equipment,
        keyword,
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
};

export const fetchExerciseById = async id => {
  try {
    const response = await api.get(`/exercises/${id}`);
    return response.data;
  } catch (e) {
    console.error('Error fetching exercise by id:', e);
  }
};

export const rateExercise = async ({ id, rate, email, review }) => {
  try {
    const response = await api.patch(`/exercises/${id}/rating`, {
      rate,
      email,
      review,
    });

    if (response.data?.error) {
      throw new Error(response.data?.error || 'Rating update failed');
    }

    return response.data;
  } catch (error) {
    console.error('Error updating rating:', error);
    throw new Error('Failed to update rating. Please try again later.');
  }
};
