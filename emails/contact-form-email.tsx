import {
  Html,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Head,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
};

export const ContactFormEmail = ({ message, email }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message depuis mon portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-900 ">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Text>{message}</Text>
              <Hr />
              <Text>Email de la personne : {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
