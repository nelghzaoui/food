import { ServerEnvironment } from '@food/shared/models/environment';

export const environment = new ServerEnvironment(
  false,
  'mongodb+srv://nasreddine:knOdphc5grRDW1uF@cluster0.qwhsm.mongodb.net/tacos?retryWrites=true&w=majority',
  '0.0.0'
);
