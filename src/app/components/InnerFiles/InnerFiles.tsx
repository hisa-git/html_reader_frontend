"use client";

import {
  Card,
  Stack,
  Title,
  Group,
  Text,
  Badge,
  Code,
  Spoiler,
  SimpleGrid,
} from "@mantine/core";

export default function TechnicalInfo({ data }: any) {
  const robots = data.technical?.robots
    ?.split(/(?=User-agent|Disallow|Allow|Sitemap)/)
    .join("\n");
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4}>Внутренние файлы</Title>
        <SimpleGrid cols={2} spacing="md">
          <Stack gap="sm">
            <Stack gap={2}>
              <Text>robots.txt:</Text>
              <Spoiler
                maxHeight={200}
                showLabel="Читать далее"
                hideLabel="Спрятать"
              >
                <Code block>{robots}</Code>{" "}
              </Spoiler>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Text>sitemap.xml:</Text>
            <Spoiler
              maxHeight={200}
              showLabel="Читать далее"
              hideLabel="Спрятать"
            >
              <Code block>{data.technical?.sitemap}</Code>
            </Spoiler>
          </Stack>
        </SimpleGrid>
      </Card>
    </>
  );
}
