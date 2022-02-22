import { useMutation, useQueryClient } from 'react-query';
import Box from '@mui/material/Box';
import { addHouse } from 'api';
import { IAddHouseFormData, IHouse } from 'appInterfaces';
import PageHeader from 'components/PageHeader';
import Form from 'components/Form';
import ContentWrapper from 'components/ContentWrapper';
import StatusInfo from 'components/StatusInfo';
import { useEffect, useState } from 'react';

const AddHousePage = () => {
  const client = useQueryClient();
  const {
    mutateAsync,
    isSuccess,
    isError,
    isLoading: isMutating,
    error,
  } = useMutation<IHouse, Error, IAddHouseFormData>(addHouse);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccessMessage(true);
    } else {
      setShowSuccessMessage(false);
    }
    const timeoutId = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccess]);

  const onSubmit = async (formData: IAddHouseFormData) => {
    await mutateAsync(formData);
    client.invalidateQueries();
  };

  return (
    <>
      <PageHeader>Dodaj Nieruchomość</PageHeader>
      <ContentWrapper>
        <Box sx={{ px: '16px' }}>
          <StatusInfo
            isError={isError}
            isSuccess={isSuccess}
            showSuccessMessage={showSuccessMessage}
            error={error}
            successMessage="Element został dodany"
          />
        </Box>
        <Form onSubmit={onSubmit} isMutating={isMutating} />
      </ContentWrapper>
    </>
  );
};

export default AddHousePage;
