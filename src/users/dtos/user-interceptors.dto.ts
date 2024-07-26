import { Expose } from 'class-transformer';

export class UserInterceptorsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  username: string;
}
