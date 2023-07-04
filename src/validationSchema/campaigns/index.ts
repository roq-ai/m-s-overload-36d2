import * as yup from 'yup';

export const campaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  discount: yup.number().integer(),
  organization_id: yup.string().nullable(),
});
