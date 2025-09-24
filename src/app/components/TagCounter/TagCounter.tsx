"use client";
import { useState } from "react";
import {
  TextInput,
  Button,
  Card,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Loader,
  Alert,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import { IconSearch, IconAlertCircle, IconCheck } from "@tabler/icons-react";
import MostPopularWords from "../MostPopularWords/MostPopularWords";
import HtmlStructure from "../HtmlStructure/HtmlStructure";
import TechnicalInfo from "../TechnicalInfo/TechnicalInfo";
import InnerFiles from "../InnerFiles/InnerFiles"

import { FooterCentered } from "../Footer/FooterCentred";
import { useShowAdditionalComponents } from "@/app/store/analyticsStore";

export default function TagCounter() {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showAdditionalComponents, show, hide } =
    useShowAdditionalComponents();
  const analyzeUrl = async (url: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    return response.json();
  };

  const handleAnalyze = async () => {
    if (!value.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await analyzeUrl(value);

      if (result.error) {
        setError(result.error);
        setData(null);
      } else {
        setData(result);
        hide();
      }
    } catch (err) {
      setError("Ошибка подключения к серверу");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAnalyze();
    }
  };
  return (
    <>
      <Stack gap="md" p="md">
        <Title order={1}>SEO анализатор</Title>
        <Title order={2}>Быстрая и глубокая аналитика для настройки выдачи сайта в поисковых системах</Title>

        {/* Форма ввода */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="URL для анализа"
              placeholder="https://example.com"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              onKeyPress={handleKeyPress}
              leftSection={<IconSearch size={16} />}
              size="md"
            />

            <Button
              onClick={handleAnalyze}
              loading={loading}
              disabled={!value.trim() || loading}
              leftSection={
                loading ? <Loader size={16} /> : <IconSearch size={16} />
              }
              size="md"
            >
              {loading ? "Анализируется..." : "Анализировать"}
            </Button>
          </Stack>
        </Card>

        {/* Ошибки */}
        {error && (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="Ошибка"
            color="red"
          >
            {error}. Возможно, есть проблемы с сервером или сайт запретил доступ
            к его парсингу
          </Alert>
        )}

        {/* Результаты анализа */}
        {data && (
          <Stack gap="md">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm">
                <Group justify="space-between">
                  <Title order={3}>Основная информация</Title>
                  <Badge color="green" leftSection={<IconCheck size={12} />}>
                    Успешно
                  </Badge>
                </Group>
                <Card>
                  <Text size="lg" fw={500}>
                    {data.basic_info?.title}
                  </Text>

                  <Text size="sm" c="dimmed">
                    {data.basic_info?.description}
                  </Text>
                </Card>
                <SimpleGrid cols={1} spacing="xs">
                  <Text size="sm">
                    <strong>Длина названия:</strong>{" "}
                    {data.basic_info?.title_length} символов
                  </Text>

                  {data.basic_info?.title_length < 30 && (
                    <Alert color="yellow">
                      Название короче 30 символов. Рекомендуется добавить
                      ключевые слова
                    </Alert>
                  )}

                  {data.basic_info?.title_length > 65 && (
                    <Alert color="red">
                      Название длиннее 65 символов. Оно может обрезаться в
                      выдаче
                    </Alert>
                  )}

                  <Text size="sm">
                    <strong>Длина описания:</strong>{" "}
                    {data.basic_info?.description_length} символов
                  </Text>
                  {data.basic_info?.description_length < 50 && (
                    <Alert color="yellow">
                      Описание короче 50 символов. Рекомендуется добавить
                      ключевые слова
                    </Alert>
                  )}

                  {data.basic_info?.description_length > 160 && (
                    <Alert color="red">
                      Описание длиннее 160 символов. Оно может обрезаться в
                      выдаче
                    </Alert>
                  )}
                </SimpleGrid>
              </Stack>
            </Card>
            {/*СТРУКТУРА HTML */}
            <HtmlStructure data={data}></HtmlStructure>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Title order={4}>Анализ контента</Title>

                <SimpleGrid cols={2} spacing="md">
                  <Card padding="sm" radius="sm" bg="blue.0">
                    <Text ta="center" size="xl" fw={700} c="blue">
                      {data.content?.word_count?.toLocaleString() || 0}
                    </Text>
                    <Text ta="center" size="sm">
                      слов
                    </Text>
                  </Card>

                  <Card padding="sm" radius="sm" bg="green.0">
                    <Text ta="center" size="xl" fw={700} c="green">
                      {data.content?.char_count?.toLocaleString() || 0}
                    </Text>
                    <Text ta="center" size="sm">
                      символов
                    </Text>
                  </Card>
                </SimpleGrid>
                <MostPopularWords data={data} />
              </Stack>
            </Card>

            {/* Техническая информация */}
            <TechnicalInfo data={data}></TechnicalInfo>
            {/*Внутренние файлы */}
            <InnerFiles data = {data}></InnerFiles>
          </Stack>
        )}
      </Stack>
    </>
  );
}
