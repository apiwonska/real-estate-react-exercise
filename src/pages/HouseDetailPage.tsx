import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import { fetchHouse, removeHouse } from '../api';
import { IHouse } from '../appInterfaces';
import PageHeader from '../components/PageHeader';
import ContentWrapper from '../components/ContentWrapper';
import HouseDetail from '../components/HouseDetail';
import StatusInfo from 'components/StatusInfo';

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
      <PageHeader>Opis Nieruchomości</PageHeader>
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
