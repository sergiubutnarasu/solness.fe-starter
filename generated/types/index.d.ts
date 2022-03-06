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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
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

export type CashRegisterEntry = {
  annexNumber?: Maybe<Scalars['String']>;
  companyId: Scalars['Float'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  docNumber: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  value: Scalars['Float'];
};

export type CashRegisterEntryDetails = {
  entries: Array<CashRegisterEntry>;
  previousEntriesCount: Scalars['Float'];
  previousTotalValue: Scalars['Float'];
};

export type CashRegisterEntryInput = {
  annexNumber?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Float']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  docNumber: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  value: Scalars['Float'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Company = {
  cashDetails?: Maybe<CompanyCashDetails>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  initialCashIndex?: Maybe<Scalars['Int']>;
  initialCashValue?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  slogan?: Maybe<Scalars['String']>;
  users?: Maybe<PaginatedCompanyUserResponse>;
  website?: Maybe<Scalars['String']>;
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

export type CompanyCashDetails = {
  initialCashIndex?: Maybe<Scalars['Int']>;
  initialCashValue?: Maybe<Scalars['Float']>;
};

export type CompanyCashDetailsInput = {
  initialCashIndex?: InputMaybe<Scalars['Int']>;
  initialCashValue?: InputMaybe<Scalars['Float']>;
};

export type CompanyInput = {
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  registerNumber: Scalars['String'];
  slogan?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
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
  changePassword: SimpleResponse;
  checkResetPasswordToken: SimpleResponse;
  createCompany: CompanyResponse;
  deleteCashRegister: SimpleResponse;
  deleteCashRegisterEntries: SimpleResponse;
  deleteCompany: CompanyResponse;
  deleteUser: UserResponse;
  excludeUser: SimpleResponse;
  inviteUser: SimpleResponse;
  login: TokenResponse;
  logout: SimpleResponse;
  refresh: TokenResponse;
  resetPassword: SimpleResponse;
  saveCashRegister: SimpleResponse;
  sendResetPasswordEmail: SimpleResponse;
  updateCompany: CompanyResponse;
  updateCompanyCashDetails: SimpleResponse;
  updateUser: UserResponse;
};

export type MutationChangePasswordArgs = {
  model: ChangePasswordInput;
};

export type MutationCheckResetPasswordTokenArgs = {
  token: Scalars['String'];
};

export type MutationCreateCompanyArgs = {
  model: CompanyInput;
};

export type MutationDeleteCashRegisterArgs = {
  date: Scalars['DateTime'];
};

export type MutationDeleteCashRegisterEntriesArgs = {
  ids: Array<Scalars['Int']>;
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

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type MutationSaveCashRegisterArgs = {
  entities: Array<CashRegisterEntryInput>;
};

export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String'];
};

export type MutationUpdateCompanyArgs = {
  model: CompanyInput;
};

export type MutationUpdateCompanyCashDetailsArgs = {
  model: CompanyCashDetailsInput;
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
  cashRegisterEntries: CashRegisterEntryDetails;
  cashRegisters: Array<Scalars['String']>;
  companies: PaginatedCompanyResponse;
  company?: Maybe<Company>;
  companyUser?: Maybe<CompanyUser>;
  lastEntryDate?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  users: PaginatedUserResponse;
  viewer: Viewer;
};

export type QueryCashRegisterEntriesArgs = {
  date: Scalars['DateTime'];
};

export type QueryCompaniesArgs = {
  request?: InputMaybe<PageListInput>;
};

export type QueryCompanyUserArgs = {
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
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  role: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type UserAction = BaseAction & {
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
  view: Scalars['Boolean'];
};

export type UserInput = {
  description?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  lastName: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UserResponse = {
  data?: Maybe<User>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type Viewer = {
  permissions: Permission;
};

export type CheckResetPasswordTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type CheckResetPasswordTokenMutation = {
  checkResetPasswordToken: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type ResetPasswordMutation = {
  resetPassword: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type SendResetPasswordEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type SendResetPasswordEmailMutation = {
  sendResetPasswordEmail: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type UpdateCompanyCashDetailsMutationVariables = Exact<{
  model: CompanyCashDetailsInput;
}>;

export type UpdateCompanyCashDetailsMutation = {
  updateCompanyCashDetails: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type GetCompanyCashDetailsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCompanyCashDetailsQuery = {
  company?:
    | {
        id?: number | null | undefined;
        cashDetails?:
          | {
              initialCashIndex?: number | null | undefined;
              initialCashValue?: number | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetCashRegistersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCashRegistersQuery = {
  lastEntryDate?: any | null | undefined;
  cashRegisters: Array<string>;
  viewer: { permissions: { cash: { create: boolean } } };
};

export type GetCompanyUserQueryVariables = Exact<{
  companyUserId: Scalars['Float'];
}>;

export type GetCompanyUserQuery = {
  viewer: { permissions: { company: { excludeUser: boolean } } };
  companyUser?:
    | {
        id?: number | null | undefined;
        verified: boolean;
        roles: Array<string>;
        user: {
          id?: number | null | undefined;
          enabled: boolean;
          firstName: string;
          lastName: string;
          email: string;
          role: string;
          title?: string | null | undefined;
          description?: string | null | undefined;
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
                    verified: boolean;
                    user: {
                      id?: number | null | undefined;
                      enabled: boolean;
                      firstName: string;
                      lastName: string;
                      email: string;
                      role: string;
                      title?: string | null | undefined;
                      description?: string | null | undefined;
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
  verified: boolean;
  user: {
    id?: number | null | undefined;
    enabled: boolean;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    title?: string | null | undefined;
    description?: string | null | undefined;
  };
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
        website?: string | null | undefined;
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
  website?: string | null | undefined;
};

export type UserFragmentFragment = {
  id?: number | null | undefined;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
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
  user?:
    | {
        id?: number | null | undefined;
        firstName: string;
        lastName: string;
        title?: string | null | undefined;
      }
    | null
    | undefined;
};

export type ChangePasswordMutationVariables = Exact<{
  model: ChangePasswordInput;
}>;

export type ChangePasswordMutation = {
  changePassword: {
    success: boolean;
    messages?: Array<string> | null | undefined;
  };
};

export type UpdateUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type UpdateUserMutation = {
  updateUser: { success: boolean; messages?: Array<string> | null | undefined };
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = {
  user?:
    | {
        id?: number | null | undefined;
        enabled: boolean;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        title?: string | null | undefined;
        description?: string | null | undefined;
      }
    | null
    | undefined;
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

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
}>;

export type RefreshTokenMutation = {
  refresh: {
    success: boolean;
    messages?: Array<string> | null | undefined;
    data?:
      | { accessToken: string; expiresIn: number; refreshToken: string }
      | null
      | undefined;
  };
};
