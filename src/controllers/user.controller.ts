import { Request, Response } from 'express';

import { hashPassword, random } from 'helpers/user.helper';
import { createUser, getUserByEmail } from 'services/user.service';

export const register = async (request: Request, response: Response) => {
  try {
    const { username, password, email } = request.body;

    if (!username || !password || !email)
      return response
        .status(400)
        .json({ message: 'Please fill all the fields.' });

    const existingUser = await getUserByEmail(email);

    if (existingUser)
      return response
        .status(400)
        .json({ message: 'User already exists.' })
        .end();

    const salt = random();
    const user = await createUser({
      username,
      email,
      authentication: { salt, password: hashPassword(salt, password) },
    });

    return response.status(201).json(user).end();
  } catch (error) {
    console.log(error.message);
    return response
      .status(400)
      .json({
        message: 'Something went wrong',
      })
      .end();
  }
};
