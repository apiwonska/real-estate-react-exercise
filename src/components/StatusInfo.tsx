import CustomAlert from 'components/CustomAlert';
import Loader from 'components/Loader';

export interface IProps {
  isError: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  error?: Error | null;
  successMessage?: string;
  showSuccessMessage?: boolean;
  children?: React.ReactNode;
}

const StatusInfo = ({
  isError,
  isLoading,
  isSuccess,
  error,
  successMessage = 'Ok',
  showSuccessMessage = true,
  children,
}: IProps) => {
  if (isError)
    return (
      <CustomAlert
        severity="error"
        message={error?.message || 'Wystąpił błąd'}
      />
    );
  if (isLoading) return <Loader />;
  if (isSuccess && showSuccessMessage) {
    return <CustomAlert severity="success" message={successMessage} />;
  }
  return <>{children}</>;
};

export default StatusInfo;
