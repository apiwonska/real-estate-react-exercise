import { useQuery } from 'react-query';
import { fetchHouses } from 'api';
import { IHouse } from 'appInterfaces';
import HouseItem from 'components/HouseItem';
import ContentWrapper from 'components/ContentWrapper';
import PageHeader from 'components/PageHeader';
import StatusInfo from 'components/StatusInfo';
import React from 'react';

const HouseListPage = (): React.ReactElement => {
  const { data, isLoading, isError, error } = useQuery<[IHouse], Error>(
    'houses',
    fetchHouses
  );

  return (
    <>
      <PageHeader>Nieruchomości</PageHeader>
      <ContentWrapper>
        <StatusInfo isError={isError} isLoading={isLoading} error={error}>
          {data?.map((house: IHouse) => (
            <HouseItem key={house.id} house={house} />
          ))}
        </StatusInfo>
      </ContentWrapper>
    </>
  );
};

export default HouseListPage;
