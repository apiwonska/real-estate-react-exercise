import CustomAlert from 'components/CustomAlert';
import Loader from 'components/Loader';

export interface IProps {
  isError: boolean;
  isLoading: boolean;
  error?: Error | null;
  children: React.ReactNode;
}

const StatusInfo = ({ isError, isLoading, error, children }: IProps) => {
  if (isError) return <CustomAlert severity="error" message={error?.message} />;
  if (isLoading) return <Loader />;
  return <>{children}</>;
};

export default StatusInfo;
