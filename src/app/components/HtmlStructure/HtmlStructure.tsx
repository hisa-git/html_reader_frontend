"use client";
import {
  Card,
  Stack,
  Title,
  SimpleGrid,
  Text,
  Group,
  Badge,
  Divider,
} from "@mantine/core";
import { tags, Tag } from "./tags";

type HtmlStructureProps = {
  data: {
    structure?: {
      tag_counts?: Record<string, number>;
      total_images?: number;
    };
  };
};

function formatTagText(tagName: string, count: number) {
  if (count === 0) return `Нет ${tagName} тегов`;
  if (count === 1) return `${tagName} тег`;
  return `${tagName} тегов`;
}

function getTagColor(tagName: string, count: number) {
  if (["h1", "h2", "h3"].includes(tagName)) {
    if (count === 0) return "red";
    if (count > 3) return "yellow";
    return "green";
  }
  if (tagName === "img") {
    if (count === 0) return "red";
    if (count > 10) return "yellow";
    return "green";
  }
  return "blue";
}

export default function HtmlStructure({ data }: HtmlStructureProps) {
  const mainTags: Tag[] = tags.filter((t) =>
    ["h1", "h2", "h3"].includes(t.name)
  );
  const otherTags: Tag[] = tags.filter(
    (t) => !["h1", "h2", "h3"].includes(t.name)
  );

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        <Title order={4}>Структура HTML</Title>

        <SimpleGrid cols={3} spacing="md">
          {mainTags.map((tag) => {
            const count = data.structure?.tag_counts?.[tag.name] || 0;
            const color = getTagColor(tag.name, count);
            return (
              <Card key={tag.name} padding="sm" radius="sm" bg={`${color}.0`}>
                <Text ta="center" size="xl" fw={700} c={color}>
                  {count}
                </Text>
                <Text ta="center" size="sm">
                  {formatTagText(tag.name.toUpperCase(), count)}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>

        <Divider />

        <SimpleGrid cols={3} spacing="md">
          {otherTags.map((tag) => {
            const count =
              tag.name === "img"
                ? data.structure?.total_images || 0
                : data.structure?.tag_counts?.[tag.name] || 0;

            const color = getTagColor(tag.name, count);

            const text =
              tag.name === "img"
                ? count === 0
                  ? "Изображений нет"
                  : count === 1
                  ? "1 изображение"
                  : `${count} изображения`
                : tag.description;

            return (
              <Group key={tag.name} position="apart">
                <Text>{`<${tag.name}> - ${text}`}</Text>
                <Badge color={color} variant="light">
                  {count}
                </Badge>
              </Group>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Card>
  );
}
