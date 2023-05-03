export type ErrorType = {
  code: number;
  ErrorText: JSX.Element;
  IncludeHomeLink: boolean;
  pageTitle: string;
};

export const errors: ErrorType[] = [
  {
    code: 500,
    pageTitle: 'Something went wrong',
    ErrorText: <p>Please try again.</p>,
    IncludeHomeLink: true,
  }
];
