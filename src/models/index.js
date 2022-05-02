// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comic, Episode, Page, PhotoS3Info } = initSchema(schema);

export {
  Comic,
  Episode,
  Page,
  PhotoS3Info
};