import { useNavigate } from 'react-router-dom';
import { H2, Subtitle, Text, Button, Wrapper } from 'styles/stylesTextSection';

interface ITextSectionProps {
  title?: string;
  subtitle?: string;
  text?: string;
}

const TextSection = ({ title, subtitle, text }: ITextSectionProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <H2>{title}</H2>
      <Subtitle>{subtitle}</Subtitle>
      <Text>{text}</Text>
      <Button onClick={() => navigate('/houses')} role="link">
        Zobacz więcej
      </Button>
    </Wrapper>
  );
};

export default TextSection;
