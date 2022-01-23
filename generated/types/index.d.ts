export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type CashAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type Company = {
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  slogan?: Maybe<Scalars['String']>;
  users?: Maybe<PaginatedCompanyUserResponse>;
};

export type CompanyUsersArgs = {
  request?: InputMaybe<PageListInput>;
};

export type CompanyAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  excludeUser: Scalars['Boolean'];
  inviteUser: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type CompanyInput = {
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  slogan?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<CompanyUserInput>>;
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
  user: User;
  userId: Scalars['Float'];
  verified: Scalars['Boolean'];
};

export type CompanyUserInput = {
  companyId: Scalars['Float'];
  enabled: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Int']>;
  roles: Array<Scalars['String']>;
  userId: Scalars['Float'];
};

export type InventoryAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type InviteUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  createCompany: CompanyResponse;
  deleteCompany: CompanyResponse;
  deleteUser: UserResponse;
  excludeUser: SimpleResponse;
  inviteUser: SimpleResponse;
  login: TokenResponse;
  logout: SimpleResponse;
  refresh: TokenResponse;
  updateCompany: CompanyResponse;
  updateUser: UserResponse;
};

export type MutationCreateCompanyArgs = {
  model: CompanyInput;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['Float']>;
};

export type MutationExcludeUserArgs = {
  userId: Scalars['Float'];
};

export type MutationInviteUserArgs = {
  model: InviteUserInput;
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
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};

export type PaginatedCompanyResponse = {
  data?: Maybe<Array<Company>>;
  total: Scalars['Int'];
};

export type PaginatedCompanyUserResponse = {
  data?: Maybe<Array<CompanyUser>>;
  total: Scalars['Int'];
};

export type PaginatedUserResponse = {
  data?: Maybe<Array<User>>;
  total: Scalars['Int'];
};

export type Permission = {
  cash: CashAction;
  company: CompanyAction;
  inventory: InventoryAction;
  user: UserAction;
};

export type Query = {
  companies: PaginatedCompanyResponse;
  company?: Maybe<Company>;
  companyUser?: Maybe<CompanyUser>;
  user?: Maybe<User>;
  users: PaginatedUserResponse;
  viewer: Viewer;
};

export type QueryCompaniesArgs = {
  request?: InputMaybe<PageListInput>;
};

export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['Float']>;
};

export type QueryCompanyUserArgs = {
  id: Scalars['Float'];
};

export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type QueryUsersArgs = {
  request?: InputMaybe<PageListInput>;
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
  verified: Scalars['Boolean'];
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
  id?: InputMaybe<Scalars['Int']>;
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

export type GetCompanyUserQueryVariables = Exact<{
  companyUserId: Scalars['Float'];
}>;

export type GetCompanyUserQuery = {
  viewer: { permissions: { company: { excludeUser: boolean } } };
  companyUser?:
    | {
        id?: number | null | undefined;
        user: {
          id?: number | null | undefined;
          enabled: boolean;
          firstName: string;
          lastName: string;
          email: string;
          role: string;
        };
      }
    | null
    | undefined;
};

export type ExcludeUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;

export type ExcludeUserMutation = {
  excludeUser: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type InviteUserMutationVariables = Exact<{
  model: InviteUserInput;
}>;

export type InviteUserMutation = {
  inviteUser: { success: boolean; messages?: Array<string> | null | undefined };
};

export type GetCompanyUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompanyUsersQuery = {
  viewer: { permissions: { company: { inviteUser: boolean } } };
  company?:
    | {
        id?: number | null | undefined;
        users?:
          | {
              data?:
                | Array<{
                    id?: number | null | undefined;
                    roles: Array<string>;
                    user: {
                      id?: number | null | undefined;
                      enabled: boolean;
                      firstName: string;
                      lastName: string;
                      email: string;
                      role: string;
                    };
                  }>
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type CompanyUserFragmentFragment = {
  id?: number | null | undefined;
  roles: Array<string>;
  user: {
    id?: number | null | undefined;
    enabled: boolean;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
};

export type UserFragmentFragment = {
  id?: number | null | undefined;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type UpdateCompanyMutationVariables = Exact<{
  model: CompanyInput;
}>;

export type UpdateCompanyMutation = {
  updateCompany: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type GetCompanyQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompanyQuery = {
  viewer: { permissions: { company: { update: boolean } } };
  company?:
    | {
        id?: number | null | undefined;
        name: string;
        slogan?: string | null | undefined;
        description?: string | null | undefined;
        registerNumber: string;
        email: string;
        phone: string;
      }
    | null
    | undefined;
};

export type CompanyFragmentFragment = {
  id?: number | null | undefined;
  name: string;
  slogan?: string | null | undefined;
  description?: string | null | undefined;
  registerNumber: string;
  email: string;
  phone: string;
};

export type GetMenuContextQueryVariables = Exact<{ [key: string]: never }>;

export type GetMenuContextQuery = {
  viewer: {
    permissions: {
      user: { view: boolean };
      company: { view: boolean };
      cash: { view: boolean };
      inventory: { view: boolean };
    };
  };
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
