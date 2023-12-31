import * as yup from 'yup';

export const achievementValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  game_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
