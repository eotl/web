export const SpoilerLevels = {
  none: {
    id: 'none',
    level: 0,
    label: "None",
    color: '#90a4ae',
  },
  newbie: {
    id: 'newbie',
    level: 10,
    label: "Newbie",
    color: '#7cb342',
  },
  regular: {
    id: 'regular',
    level: 20,
    label: "Regular",
    color: '#ffb300',
  },
  veteran: {
    id: 'veteran',
    level: 30,
    label: "Veteran",
    color: '#e53935',
  },
  wizard: {
    id: 'wizard',
    level: 40,
    label: "Wizard",
    color: '#00acc1',
  },
};

export function getLevelArray() {
  return Object.keys(SpoilerLevels)
    .map(k => SpoilerLevels[k])
    .sort((a, b) => a.level > b.level);
}

export function isMarkdownSpoiler(markdown, spoilerLevel) {
  if (!markdown.frontMatter.spoilerLevel) {
    markdown.frontMatter.spoilerLevel = 'none';
  }
  return isSpoiler(markdown.frontMatter.spoilerLevel, spoilerLevel);
}

export function isSpoiler(level, spoilerLevel) {
  if (!(level in SpoilerLevels)) {
    level = 'none';
  }
  return SpoilerLevels[spoilerLevel].level < SpoilerLevels[level].level;
}
