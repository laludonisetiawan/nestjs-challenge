import { Expose } from 'class-transformer';

export class UserInterceptorsDto {
  @Expose()
  name: string;

  @Expose()
  username: string;
}
