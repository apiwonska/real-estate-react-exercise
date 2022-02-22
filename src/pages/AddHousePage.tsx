import { useMutation, useQueryClient } from 'react-query';
import { addHouse } from '../api';
import { IAddHouseFormData, TLabel } from '../appInterfaces';
import PageHeader from '../components/PageHeader';
import Form from '../components/Form';
import ContentWrapper from 'components/ContentWrapper';

const AddHousePage = () => {
  const client = useQueryClient();
  const { mutateAsync } = useMutation(addHouse);

  const onSubmit = async (formData: IAddHouseFormData) => {
    await mutateAsync(formData);
    client.invalidateQueries();
  };

  return (
    <>
      <PageHeader>Dodaj Nieruchomość</PageHeader>
      <ContentWrapper>
        <Form onSubmit={onSubmit} />
      </ContentWrapper>
    </>
  );
};

export default AddHousePage;
