import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

function SearchPlaceholder() {
  const { locale } = useRouter();

  const map = {
    es: "Buscar",
    en: "Search",
    pt: "Procurar",
    fr: "Rechercher",
    de: "Suchen",
    zh: "搜索",
  };

  return map[locale] ?? map.en;
}

const config: DocsThemeConfig = {
  darkMode: true,
  search: {
    placeholder: SearchPlaceholder,
  },
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={"/opire_logo.svg"} style={{ width: "36px", height: "36px" }} />

      <span>Opire</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/Opire/docs/blob/main",
  project: {
    link: "https://github.com/opire/docs",
  },
  chat: {
    link: "https://discord.gg/Rfq8CMZH4b",
  },
  useNextSeoProps() {
    return {
      titleTemplate:
        "Opire Docs - The Rewards Platform for Software Developers",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      <meta
        name="title"
        content="Opire - The Rewards Platform for Software Developers"
      />
      <meta
        name="description"
        content="With Opire, anyone can create rewards for open source projects and grow their community, while developers can solve issues and earn the associated rewards."
      />
      <meta
        name="keywords"
        content="opire, opiredev, reward, bounty, money, open source, software, programmer, community, dev, developement, issue, git, github, gitlab, pr, mr, pull request, merge request"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Opire - The Rewards Platform for Software Developers"
      />
      <meta
        property="og:description"
        content="With Opire, anyone can create rewards for open source projects and grow their community, while developers can solve issues and earn the associated rewards."
      />

      <link
        rel="canonical"
        href="https://docs.opire.dev/overview/introduction"
      />
      <link rel="shortcut icon" href="/opire_logo.svg" />
    </>
  ),
  primaryHue: {
    dark: 190,
    light: 215,
  },
  // banner: {
  //   dismissible: true,
  //   key: 'example-banner',
  //   text: ''
  // },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: false,
    titleComponent: ({ title, type, route }) => {
      return <>{title}</>;
    },
  },
  gitTimestamp: "",
  footer: {
    text: "Opire with 💙",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
    { locale: "pt", text: "Portuguese" },
    { locale: "fr", text: "Français" },
    { locale: "de", text: "Deutsch" },
    { locale: "zh", text: "简体中文" },
  ],
};

export default config;
