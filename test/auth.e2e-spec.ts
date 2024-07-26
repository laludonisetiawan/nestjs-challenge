import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Repository } from 'typeorm';
import { User } from '../src/users/entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Auth E2E', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;
  let userId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    userRepository = moduleFixture.get<Repository<User>>(
      getRepositoryToken(User),
    );
  });

  afterAll(async () => {
    await app.close();
  });

  const userPayload = {
    username: 'laludoni',
    password: 'rahasia123',
    name: 'doni',
  };

  let jwtToken: string;

  it('should login the user and return a JWT token', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: userPayload.username,
        password: userPayload.password,
      })
      .expect(201);

    expect(response.body).toHaveProperty('access_token');
    jwtToken = response.body.access_token;

    const user = await userRepository.findOne({
      where: { username: userPayload.username },
    });
    if (user) {
      userId = user.id;
    } else {
      throw new Error('User not found');
    }
  });

  it('should access protected route with JWT token', async () => {
    const response = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    expect(response.body).toEqual({
      id: userId,
      username: userPayload.username,
      name: userPayload.name,
    });
  });

  it('should not access protected route without JWT token', async () => {
    await request(app.getHttpServer()).get(`/users/${userId}`).expect(401);
  });
});
