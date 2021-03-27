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

export type User = {
  id?: Maybe<Scalars["Int"]>;
  enabled: Scalars["Boolean"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  role: Scalars["String"];
};

export type PaginatedUserResponse = {
  data: Array<User>;
  total: Scalars["Int"];
};

export type Query = {
  allUser?: Maybe<Array<User>>;
  findUser?: Maybe<PaginatedUserResponse>;
  getUser?: Maybe<User>;
};

export type QueryFindUserArgs = {
  request: PageListInput;
};

export type QueryGetUserArgs = {
  id: Scalars["Float"];
};

export type PageListInput = {
  page?: Maybe<Scalars["Float"]>;
  pageSize?: Maybe<Scalars["Float"]>;
};

export type Mutation = {
  deleteUser: User;
  saveUser: User;
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"];
};

export type MutationSaveUserArgs = {
  model: UserInput;
};

export type UserInput = {
  id?: Maybe<Scalars["Int"]>;
  enabled: Scalars["Boolean"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  role: Scalars["String"];
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars["Float"];
}>;

export type GetUserQuery = { getUser?: Maybe<UserFragment> };

export type SaveUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type SaveUserMutation = { saveUser: Pick<User, "id"> };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars["Float"];
}>;

export type DeleteUserMutation = { deleteUser: Pick<User, "id"> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = { allUser?: Maybe<Array<UserFragment>> };

export type UserFragment = Pick<
  User,
  "id" | "enabled" | "firstName" | "lastName" | "email" | "role"
>;
