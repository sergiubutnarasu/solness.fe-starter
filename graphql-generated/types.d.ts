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
  deleteUser: UserResponse;
  saveUser: UserResponse;
};

export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};

export type MutationSaveUserArgs = {
  model: UserInput;
};

export type PageListInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
};

export type PaginatedUserResponse = {
  data?: Maybe<Array<User>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total: Scalars['Int'];
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
  id: Scalars['Float'];
};

export type User = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;

export type DeleteUserMutation = {
  deleteUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['Float'];
}>;

export type GetUserQuery = {
  getUser?:
    | {
        data?:
          | {
              id?: number | null | undefined;
              enabled: boolean;
              firstName: string;
              lastName: string;
              email: string;
              role?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type SaveUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type SaveUserMutation = {
  saveUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  allUser?:
    | {
        data?:
          | Array<{
              id?: number | null | undefined;
              enabled: boolean;
              firstName: string;
              lastName: string;
              email: string;
              role?: string | null | undefined;
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UserFragment = {
  id?: number | null | undefined;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role?: string | null | undefined;
};
