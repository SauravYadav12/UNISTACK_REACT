import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContextProvider';

const ProtectedRoute = ({children}: any) => {
    const {isAuthenticated} = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

  return (
    children
  )
}

export default ProtectedRoute