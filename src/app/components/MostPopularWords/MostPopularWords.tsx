"use client";
// @ts-nocheck
import {
  Title,
  Text,
  Group,
  Badge,
  SimpleGrid,
  Divider,
  Button,
} from "@mantine/core";
import { useState } from "react";

export default function MostPopularWords(props: any) {
  const [showTop, setShowTop] = useState(10);
  const [showDensity, setShowDensity] = useState(10);

  const topKeywords = props.data.content?.top_keywords || [];
  const keywordDensity = props.data.content?.keyword_density || [];

  return (
    <>
      {(topKeywords.length > 0 || keywordDensity.length > 0) && <Divider />}
      <SimpleGrid cols={2} spacing="md">
        {topKeywords.length > 0 && (
          <div>
            <Title order={5}>Топ ключевых слов</Title>
            {topKeywords.slice(0, showTop).map((keyword, index) => (
              <Group mb="xs" key={index}>
                <Text size="sm">{keyword.word}</Text>
                <Badge variant="light" size="sm">
                  {keyword.count}
                </Badge>
              </Group>
            ))}
            <Button
              variant="subtle"
              size="xs"
              mt="xs"
              disabled={showTop >= topKeywords.length}
              onClick={() => setShowTop(showTop + 5)}
            >
              {showTop >= topKeywords.length
                ? "Все слова показаны"
                : "Показать больше"}
            </Button>
          </div>
        )}

        {keywordDensity.length > 0 && (
          <div>
            <Title order={5}>Плотность ключевых слов</Title>
            {keywordDensity.slice(0, showDensity).map((item, index) => (
              <Group mb="xs" key={index} justify="space-between">
                <Text size="sm">{item.word}</Text>
                <Badge color={item.density > 2 ? "red" : "green"}>
                  {item.density}%
                </Badge>
              </Group>
            ))}
            <Button
              variant="subtle"
              size="xs"
              mt="xs"
              disabled={showDensity >= keywordDensity.length}
              onClick={() => setShowDensity(showDensity + 5)}
            >
              {showDensity >= keywordDensity.length
                ? "Вся плотность показана"
                : "Показать больше"}
            </Button>
          </div>
        )}
      </SimpleGrid>
    </>
  );
}
