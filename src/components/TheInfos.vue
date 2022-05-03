<script setup>
import InfoItem from './InfoItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <InfoItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    TranslateCrz’s
    <RouterLink to="/docs">official documentation</RouterLink>
    provides you with all information you need to get started.
  </InfoItem>

  <InfoItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Our goal</template>
    The simplest tool for code localization and globalization !<br />
    We aim to make life easy for developers and all workers in charge of
    translating websites around the world.
  </InfoItem>

  <InfoItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    We have developed some tools to do so :
    <ul>
      <li>
        An ergonomic Back Office with automatic translation using
        <a target="_blank" href="https://www.deepl.com/en/translator">DeepL</a>
      </li>
      <li>
        A simple Javascript package that comes as a React component and a CLI
        tool
        <a target="_blank" href="https://github.com/TranslateCrz/localize"
          >read more here</a
        >
      </li>
    </ul>
  </InfoItem>

  <InfoItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a
    >.
    <br />
    You should also see our
    <a target="_blank" href="https://github.com/TranslateCrz">GitHub</a>.
  </InfoItem>

  <InfoItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Register now </template>

    <RouterLink to="/register">Click here</RouterLink> and start using our great
    tool.
  </InfoItem>
</template>
