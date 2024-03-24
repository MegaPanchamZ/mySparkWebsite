import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface MySparkBetaEmailProps {
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MySparkBetaEmail = () => {
  const previewText = `Thank you for signing up for the MySpark Beta!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={'/logo.png'}
                width="40"
                height="37"
                alt="MySpark"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thank you for signing up for the <strong>MySpark</strong> Beta!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hey there,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We appreciate your interest in being a part of the{" "}
              <strong>MySpark</strong> beta testing program. Your participation
              will help us shape the future of our social media application.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We will review your application and notify you once you have been
              accepted into the beta testing program. Stay tuned for further
              updates and instructions on how to access the beta version of{" "}
              <strong>MySpark</strong>.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default MySparkBetaEmail;
