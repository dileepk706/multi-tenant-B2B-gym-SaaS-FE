import { SplashScreen } from '@components/loading-screen';
import { AuthContext } from './AuthContext';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
  return (
    <AuthContext.Consumer>
      {(auth) => {
        if (auth.loading) {
          // return <SplashScreen />;
          return <h1>Loading profile</h1>;
        }
        return children;
      }}
    </AuthContext.Consumer>
  );
}
