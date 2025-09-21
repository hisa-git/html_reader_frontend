"use client";
import { Anchor, Group } from "@mantine/core";
import classes from "./FooterCentred.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export function FooterCentered() {
  return (
    <footer className={classes.footer}>
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
    </footer>
  );
}
