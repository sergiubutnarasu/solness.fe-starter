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

export type BaseAction = {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type Company = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  users?: Maybe<Array<CompanyUser>>;
};

export type CompanyAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type CompanyInput = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  users?: Maybe<Array<CompanyUserInput>>;
};

export type CompanyResponse = {
  data?: Maybe<Company>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type CompanyUser = {
  companyId: Scalars['Float'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  roles: Array<Scalars['String']>;
  userId: Scalars['Float'];
};

export type CompanyUserInput = {
  companyId: Scalars['Float'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  roles: Array<Scalars['String']>;
  userId: Scalars['Float'];
};

export type Mutation = {
  createCompany: CompanyResponse;
  createUser: UserResponse;
  deleteCompany: CompanyResponse;
  deleteUser: UserResponse;
  login: TokenResponse;
  logout: SimpleResponse;
  refresh: TokenResponse;
  updateCompany: CompanyResponse;
  updateUser: UserResponse;
};

export type MutationCreateCompanyArgs = {
  model: CompanyInput;
};

export type MutationCreateUserArgs = {
  model: UserInput;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRefreshArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type MutationUpdateCompanyArgs = {
  model: CompanyInput;
};

export type MutationUpdateUserArgs = {
  model: UserInput;
};

export type PageListInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
};

export type PaginatedCompanyResponse = {
  data?: Maybe<Array<Company>>;
  total: Scalars['Int'];
};

export type PaginatedUserResponse = {
  data?: Maybe<Array<User>>;
  total: Scalars['Int'];
};

export type Permission = {
  company: CompanyAction;
  user: UserAction;
};

export type Query = {
  companies: PaginatedCompanyResponse;
  company?: Maybe<Company>;
  user?: Maybe<User>;
  users: PaginatedUserResponse;
  viewer: Viewer;
};

export type QueryCompaniesArgs = {
  request?: Maybe<PageListInput>;
};

export type QueryCompanyArgs = {
  id: Scalars['Float'];
};

export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type QueryUsersArgs = {
  request?: Maybe<PageListInput>;
};

export type SimpleResponse = {
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type TokenPayload = {
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type TokenResponse = {
  data?: Maybe<TokenPayload>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type User = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  role: Scalars['String'];
};

export type UserAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type UserInput = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
};

export type UserResponse = {
  data?: Maybe<User>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type Viewer = {
  permissions: Permission;
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
  user?:
    | {
        id?: number | null | undefined;
        enabled: boolean;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
      }
    | null
    | undefined;
};

export type CreateUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type CreateUserMutation = {
  createUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type UpdateUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type UpdateUserMutation = {
  updateUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: {
    data?:
      | Array<{
          id?: number | null | undefined;
          enabled: boolean;
          firstName: string;
          lastName: string;
          email: string;
          role: string;
        }>
      | null
      | undefined;
  };
};

export type UserFragment = {
  id?: number | null | undefined;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  login: {
    success: boolean;
    messages?: Array<string> | null | undefined;
    data?:
      | { accessToken: string; expiresIn: number; refreshToken: string }
      | null
      | undefined;
  };
};

export type LogoutMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type LogoutMutation = {
  logout: { success: boolean; messages?: Array<string> | null | undefined };
};

export type RefreshMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
}>;

export type RefreshMutation = {
  refresh: {
    success: boolean;
    messages?: Array<string> | null | undefined;
    data?:
      | { accessToken: string; expiresIn: number; refreshToken: string }
      | null
      | undefined;
  };
};
