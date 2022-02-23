import Apartment from '@mui/icons-material/Apartment';
import TextSection from 'components/TextSection';
import data from 'data/dataHomePage';
import {
  Main,
  GridContainer,
  GridItem,
  Brand,
  ImageProject,
  ImageFamily,
  Motto,
} from 'styles/stylesHomePage';
import ServicesSection from 'components/ServicesSection';

const HomePage = () => {
  const { about, offer } = data;

  return (
    <Main>
      <GridContainer size="big">
        <GridItem gridArea="tr">
          <GridContainer size="sm">
            <GridItem gridArea="tl">
              <Brand>
                <Apartment sx={{ fontSize: '1em', mr: '10px' }} />
                Imobili
              </Brand>
            </GridItem>
            <GridItem gridArea="tr">
              <ImageProject />
            </GridItem>
            <GridItem gridArea="br">
              <Motto>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores temporibus, ipsa sint corporis omnis placeat! Numquam
                cumque necessitatibus exercitationem!
              </Motto>
            </GridItem>
            <GridItem gridArea="bl">
              <ImageFamily />
            </GridItem>
          </GridContainer>
        </GridItem>

        <GridItem gridArea="tl">
          <TextSection
            title={about.title}
            subtitle={about.subtitle}
            text={about.text}
          />
        </GridItem>

        <GridItem gridArea="bl">
          <ServicesSection />
        </GridItem>

        <GridItem gridArea="br">
          <TextSection
            title={offer.title}
            subtitle={offer.subtitle}
            text={offer.text}
          />
        </GridItem>
      </GridContainer>
    </Main>
  );
};

export default HomePage;
