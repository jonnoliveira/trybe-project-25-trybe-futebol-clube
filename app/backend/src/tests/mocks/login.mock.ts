import * as bcrypt from 'bcryptjs';
import UserModel from '../../database/models/UserModel';

export const noEmail = {
  "password": "secret_admin"
}

export const noPass = {
  "email": "admin@admin.com"
}

export const invalidEmailOne = {
  "email": "@admin.com",
  "password": "secret_admin"
}

export const invalidEmailTwo = {
  "email": "adim@admin",
  "password": "secret_admin"
}

export const invalidEmailThree = {
  "email": "adim@.com",
  "password": "secret_admin"
}

export const invalidEmailFour = {
  "email": "adim.admin.com",
  "password": "secret_admin"
}

export const invalidEmail = {
  "email": "biribinha@admin.com",
  "password": "secret_admin"
}

export const invalidPass = {
  "email": "admin@admin.com",
  "password": "12345"
}

export const userLogin = {
  "email": "admin@admin.com",
  "password": "secret_admin"
}

const crypt = bcrypt.hashSync(userLogin.password)

export const dataUser = {
  dataValues: {
    id: 1,
    email: 'admin@admin.com',
    password: crypt,
    role: 'admin'
  }
} as UserModel;

export const role = { role: 'admin' };

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6InNlY3JldF9hZG1pbiIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2ODM4MjE5NjYsImV4cCI6MTY4NDY4NTk2Nn0.FVlb9_agNQ_YyNZt-5A7U7YJp0eqTj1yAmfFJHRhZ0w'
