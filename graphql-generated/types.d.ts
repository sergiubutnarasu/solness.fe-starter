export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  saveUser: UserResponse;
  deleteUser: UserResponse;
};

export type MutationSaveUserArgs = {
  model: UserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"];
};

export type PageListInput = {
  page?: Maybe<Scalars["Float"]>;
  pageSize?: Maybe<Scalars["Float"]>;
};

export type PaginatedUserResponse = {
  data?: Maybe<Array<User>>;
  total: Scalars["Int"];
  success: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
};

export type Query = {
  allUser?: Maybe<PaginatedUserResponse>;
  findUser?: Maybe<PaginatedUserResponse>;
  getUser?: Maybe<UserResponse>;
};

export type QueryFindUserArgs = {
  request: PageListInput;
};

export type QueryGetUserArgs = {
  id: Scalars["Float"];
};

export type User = {
  id?: Maybe<Scalars["Int"]>;
  enabled: Scalars["Boolean"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  role: Scalars["String"];
};

export type UserInput = {
  id?: Maybe<Scalars["Int"]>;
  enabled: Scalars["Boolean"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  role: Scalars["String"];
};

export type UserResponse = {
  data?: Maybe<User>;
  success: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
};

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars["Float"];
}>;

export type DeleteUserMutation = {
  deleteUser: { data?: Maybe<{ id?: Maybe<number> }> };
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars["Float"];
}>;

export type GetUserQuery = {
  getUser?: Maybe<{
    data?: Maybe<{
      id?: Maybe<number>;
      enabled: boolean;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    }>;
  }>;
};

export type SaveUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type SaveUserMutation = {
  saveUser: { data?: Maybe<{ id?: Maybe<number> }> };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  allUser?: Maybe<{
    data?: Maybe<
      Array<{
        id?: Maybe<number>;
        enabled: boolean;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
      }>
    >;
  }>;
};

export type UserFragment = {
  id?: Maybe<number>;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};
