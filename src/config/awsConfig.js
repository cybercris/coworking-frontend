import {
  AWS_S3_BUCKET_NAME,
  AWS_S3_ACCESS_KEY_ID,
  AWS_S3_REGION,
  AWS_S3_SECRET_ACCESS_KEY,
} from './enviroments';

export const AWS_CONFIG = {
  bucketName: AWS_S3_BUCKET_NAME,
  region: AWS_S3_REGION,
  accessKeyId: AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
};
