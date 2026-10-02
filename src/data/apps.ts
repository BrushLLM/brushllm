/**
 * BrushLLM desktop apps — the three open-source tools on
 * github.com/BrushLLM. Shared metadata for the homepage Apps section and
 * the per-app product pages (/studio, /video-studio, /player).
 */
import imageStudioIcon from '../assets/apps/image-studio.png?url';
import videoStudioIcon from '../assets/apps/video-studio.png?url';
import playerIcon from '../assets/apps/player.png?url';
import imageStudioShot from '../assets/apps/image-studio-shot.png?url';
import videoStudioShot from '../assets/apps/video-studio-shot.png?url';
import playerShot from '../assets/apps/player-shot.png?url';

export interface SiteApp {
  /** slug, also the icon filename */
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** product page path */
  href: string;
  /** GitHub repository */
  repo: string;
  /** GitHub Releases download page */
  releases: string;
  platforms: string[];
  license?: string;
  /** short chips shown on cards */
  highlights: string[];
  /** app icon URL (256px PNG) */
  icon: string;
  /** official app screenshot URL */
  screenshot: string;
}

export const apps: SiteApp[] = [
  {
    id: 'image-studio',
    name: 'Image Studio',
    tagline: 'Local-first AI image toolbox',
    description:
      'A free desktop image toolbox. Everyday edits — convert, compress, crop, watermark, EXIF — run entirely on your device; AI features like background removal and generative fill route through the BrushLLM gateway, billed per image.',
    href: '/studio',
    repo: 'https://github.com/BrushLLM/brushllm-image-studio',
    releases: 'https://github.com/BrushLLM/brushllm-image-studio/releases',
    platforms: ['macOS (Apple Silicon)', 'Windows 11 (x64 / ARM64)'],
    highlights: ['25+ local tools', 'AI edits via BrushLLM API', '9 languages', 'Zero telemetry'],
    icon: imageStudioIcon,
    screenshot: imageStudioShot,
  },
  {
    id: 'video-studio',
    name: 'Video Studio',
    tagline: 'Local video, audio & subtitle toolbox',
    description:
      'A free, offline toolbox for video, audio and subtitle processing. Convert, compress, merge, trim, normalize loudness, fix subtitle encodings — 100% local processing, zero network requests.',
    href: '/video-studio',
    repo: 'https://github.com/BrushLLM/brushllm-video-studio',
    releases: 'https://github.com/BrushLLM/brushllm-video-studio/releases',
    platforms: ['macOS (Apple Silicon)', 'Windows 11 (x64 / ARM64)'],
    highlights: ['25+ tools', '100% local processing', '9 languages', 'Zero network requests'],
    icon: videoStudioIcon,
    screenshot: videoStudioShot,
  },
  {
    id: 'player',
    name: 'Player',
    tagline: 'Open media player built on mpv',
    description:
      'An open-source, cross-platform media player. Every format mpv plays, plus streaming from WebDAV, SMB, FTP, Emby and Jellyfin — with HDR output, hardware decoding and a 9-language UI.',
    href: '/player',
    repo: 'https://github.com/BrushLLM/brushllm-player',
    releases: 'https://github.com/BrushLLM/brushllm-player/releases',
    platforms: ['macOS (Apple Silicon)', 'Windows 10/11 (x64 / ARM64)'],
    license: 'GPL-3.0',
    highlights: ['Every format via mpv', 'WebDAV · SMB · Emby · Jellyfin', 'HDR & hardware decode', '9 languages'],
    icon: playerIcon,
    screenshot: playerShot,
  },
];

export const appById = (id: string) => apps.find((a) => a.id === id);
