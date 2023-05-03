import { ErrorType } from '../errors';

export const ErrorRendering = ({
  pageTitle,
  ErrorText,
  IncludeHomeLink,
}: ErrorType) => (
  <div>
    <h1>{pageTitle}</h1>
      <div>
          {ErrorText}
          {IncludeHomeLink && (
            <a href="/" data-testid="return-home">
              Return to origins
            </a>
          )}
      </div>
  </div>
);
