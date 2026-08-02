import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function resolvePackageManagerCommand() {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const preset = process.argv[2];

if (!preset) {
  console.error('Usage: node scripts/build-with-preset.mjs <netlify|vercel>');
  process.exit(1);
}

if (!['netlify', 'vercel'].includes(preset)) {
  console.error(`Unsupported preset: ${preset}`);
  process.exit(1);
}

const env = { ...process.env, NITRO_PRESET: preset };
const args = ['run', 'build'];
const npmCommand = resolvePackageManagerCommand();

const child = spawn(npmCommand, args, {
  cwd: repoRoot,
  env,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  if (code !== 0) {
    process.exit(code ?? 1);
  }
});
