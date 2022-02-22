import Alert from '@mui/material/Alert';

export type TAlert = 'error' | 'success';

interface IProps {
  severity: TAlert;
  message?: React.ReactText;
}

const CustomAlert = ({ severity, message }: IProps) => {
  if (severity === 'error')
    return <Alert severity={severity}>{message || 'Error occured'}</Alert>;
  if (severity === 'success')
    return <Alert severity={severity}>{message || 'Success!'}</Alert>;
  return null;
};

export default CustomAlert;
