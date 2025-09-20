"use client";
import { Anchor, Group } from "@mantine/core";
import classes from "./FooterCentred.module.css";
import { useShowAdditionalComponents } from "@/app/store/analyticsStore";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export function FooterCentered() {
  const { showAdditionalComponents } = useShowAdditionalComponents();

  if (!showAdditionalComponents) return null;

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>
          {links.map((link) => (
            <Anchor
              c="dimmed"
              key={link.label}
              href={link.link}
              lh={1}
              onClick={(event) => event.preventDefault()}
              size="sm"
            >
              {link.label}
            </Anchor>
          ))}
        </Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap"></Group>
      </div>
    </div>
  );
}
