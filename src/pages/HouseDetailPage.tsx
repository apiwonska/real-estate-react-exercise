import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import { fetchHouse, removeHouse } from 'api';
import { IHouse } from 'appInterfaces';
import PageHeader from 'shared/PageHeader';
import ContentWrapper from 'shared/ContentWrapper';
import HouseDetail from 'components/HouseDetail';
import StatusInfo from 'shared/StatusInfo';

const HouseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data,
    isError: isFetchError,
    isLoading,
    error: fetchError,
  } = useQuery<IHouse, Error>(['books', id], () => fetchHouse(id));
  const {
    mutateAsync,
    isError: isRemoveError,
    isLoading: isRemoving,
  } = useMutation(removeHouse);

  const handleDelete = async () => {
    await mutateAsync(id);
    navigate('/houses');
  };

  return (
    <>
      <PageHeader>Opis nieruchomości</PageHeader>
      <ContentWrapper>
        <StatusInfo
          isError={isFetchError}
          isLoading={isLoading}
          error={fetchError}
        >
          <HouseDetail
            house={data!}
            handleDelete={handleDelete}
            isRemoving={isRemoving}
            isRemoveError={isRemoveError}
          />
        </StatusInfo>
      </ContentWrapper>
    </>
  );
};

export default HouseDetailPage;
