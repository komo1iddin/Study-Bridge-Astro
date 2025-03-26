// Image size presets for different use cases
export const imageSizes = {
  hero: {
    desktop: 1920,
    tablet: 1024,
    mobile: 640
  },
  card: {
    desktop: 400,
    tablet: 320,
    mobile: 280
  },
  thumbnail: {
    desktop: 200,
    tablet: 160,
    mobile: 120
  },
  avatar: {
    default: 96,
    small: 48,
    large: 128
  }
};

// Quality presets
export const imageQualities = {
  high: 90, // For hero images and important visuals
  medium: 80, // Default quality for most images
  low: 70 // For thumbnails and previews
};

// Generate srcset sizes
export function generateSrcset(baseWidth: number): string {
  const sizes = [0.5, 1, 1.5, 2].map(scale => Math.round(baseWidth * scale));
  return sizes.map(size => `${size}w`).join(', ');
}

// Generate sizes attribute
export function generateSizes(options: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const { mobile = '100vw', tablet = '100vw', desktop = '100vw' } = options;
  return `
    (max-width: 640px) ${mobile},
    (max-width: 1024px) ${tablet},
    ${desktop}
  `.trim();
}

// Image format support detection
export function supportsAvif(): boolean {
  if (typeof document === 'undefined') return false;
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
}

export function supportsWebp(): boolean {
  if (typeof document === 'undefined') return false;
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}