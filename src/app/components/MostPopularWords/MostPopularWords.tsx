"use client";

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

interface Keyword {
  word: string;
  count: number;
}

interface KeywordDensity {
  word: string;
  density: number;
}

interface ContentData {
  top_keywords?: Keyword[];
  keyword_density?: KeywordDensity[];
}

interface MostPopularWordsProps {
  data?: {
    content?: ContentData;
  };
}

export default function MostPopularWords({
  data = { content: {} },
}: MostPopularWordsProps) {
  const topKeywords: Keyword[] = data.content?.top_keywords || [];
  const keywordDensity: KeywordDensity[] = data.content?.keyword_density || [];

  const [showTop, setShowTop] = useState<number>(10);
  const [showDensity, setShowDensity] = useState<number>(10);

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
