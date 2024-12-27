import withNextIntl from 'next-intl/plugin';

const nextIntl = withNextIntl();

const isDev = process.argv.indexOf('dev') !== -1;
const isBuild = process.argv.indexOf('build') !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1';
  const { build } = await import('velite');
  await build({ watch: isDev, clean: !isDev });
}

const config = {};

/** @type {import('next').NextConfig} */
export default nextIntl(config);
