import { User } from 'models/user.model';
import { UserAuthType } from 'types/user.type';

export const getUsers = () => User.find();

export const getUserByEmail = (email: string) => User.findOne({ email });

export const getUserBySessionToken = (sessionToken: string) =>
  User.findOne({ 'authentication.sessionToken': sessionToken });

export const getUserById = (id: string) => User.findById(id);

export const createUser = (user: Record<string, string | UserAuthType>) =>
  new User(user).save();

export const updateUser = (
  id: string,
  user: Record<string, string | UserAuthType>
) => User.findByIdAndUpdate(id, user);

export const deleteUser = (id: string) => User.findByIdAndDelete(id);
