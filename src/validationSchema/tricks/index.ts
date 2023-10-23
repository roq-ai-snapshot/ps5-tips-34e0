import * as yup from 'yup';

export const trickValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  game_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
