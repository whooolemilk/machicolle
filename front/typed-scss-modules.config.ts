import type { ConfigOptions } from 'typed-scss-modules/dist/lib/core/types'

export const config: Partial<ConfigOptions> = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  aliasPrefixes: {
    '@/': './src/'
  },
}
