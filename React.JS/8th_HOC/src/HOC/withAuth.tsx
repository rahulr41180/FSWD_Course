import React from "react";

interface WithAuthProps {
  isLoggedIn: boolean;
}

function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function EnhancedComponent(
    props: P & WithAuthProps
  ) {
    const { isLoggedIn, ...rest } = props;

    if (!isLoggedIn) {
      return (
        <h1>
          Access Denied. Please Login.
        </h1>
      );
    }

    return (
      <WrappedComponent
        {...(rest as P)}
      />
    );
  };
}

export default withAuth;