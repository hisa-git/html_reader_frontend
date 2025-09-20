"use client";
import { Stepper, Stack } from "@mantine/core";
import { useShowAdditionalComponents } from "../../store/analyticsStore";

export default function StepperSeo() {
  const { showAdditionalComponents } = useShowAdditionalComponents();

  if (!showAdditionalComponents) return null;

  return (
    showAdditionalComponents && (
      <Stack gap="md" p="md">
        <Stepper iconPosition="right">
          <Stepper.Step
            label="Шаг 1"
            description="Вставьте ссылку на ваш сайт"
          />
          <Stepper.Step
            label="Шаг 2"
            description="Посмотрите детальный анализ SEO на вашей странице"
          />
          <Stepper.Step
            label="Шаг 3"
            description="Увеличьте трафик и сделайте ваш сайт доступней"
          />
        </Stepper>
      </Stack>
    )
  );
}
