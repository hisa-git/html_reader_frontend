"use client";

import {
  Card,
  Stack,
  Title,
  Group,
  Text,
  Badge,
  SimpleGrid,
} from "@mantine/core";

function formatBytes(bytes?: number): string {
  if (!bytes) return "0 B";
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
}

export default function TechnicalInfo({ data }: any) {
  const loadTime = data.technical?.load_time_seconds?.toFixed(2) ?? "-";
  const pageSize = formatBytes(data.technical?.page_size_bytes);
  const statusCode = data.technical?.status_code ?? "-";

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <SimpleGrid cols={2} spacing={"md"}>
          <Title order={4} mb="md">
            Техническая информация
          </Title>
          <Title order={4} mb="md">
            Обьяснение
          </Title>
        </SimpleGrid>
        <SimpleGrid cols={2} spacing="md">
          <Stack gap="sm">
            <Group justify="space-between">
              <Text>Время загрузки:</Text>
              <Badge color="cyan">{loadTime} s</Badge>
            </Group>

            <Group justify="space-between">
              <Text>Размер страницы:</Text>
              <Badge color="grape">{pageSize}</Badge>
            </Group>

            <Group justify="space-between">
              <Text>HTTP статус:</Text>
              <Badge color={statusCode === 200 ? "green" : "red"}>
                {statusCode}
              </Badge>
            </Group>
          </Stack>
          <Stack gap="sm">
            <Text size="sm">
              Время загрузки страницы напрямую влияет на ранжирование. Оптимальное время - до 2 секунд.
            </Text>
            <Text size="sm">
              Размер страницы влияет на скорость загрузки и UX. Чем меньше, тем
              лучше.
            </Text>
            <Text size="sm">
              HTTP статус 200 означает, что страница доступна. Любые ошибки
              снижают SEO.
            </Text>
          </Stack>
        </SimpleGrid>
      </Card>
    </>
  );
}
