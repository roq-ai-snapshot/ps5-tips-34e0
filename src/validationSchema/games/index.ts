import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  release_date: yup.date().nullable(),
  developer: yup.string().nullable(),
  publisher: yup.string().nullable(),
  genre: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
});
