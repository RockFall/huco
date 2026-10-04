export type AuthFormState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};
