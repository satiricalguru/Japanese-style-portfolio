import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, '../src/data/github.json');

async function fetchGitHubData() {
  console.log('[GitHub Telemetry] Fetching live repository data for @satiricalguru...');

  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'satiricalguru-portfolio-build-script',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    console.log('[GitHub Telemetry] Authenticated GitHub request via GITHUB_TOKEN');
    headers['Authorization'] = `token ${token}`;
  } else {
    console.log('[GitHub Telemetry] Unauthenticated GitHub request (rate limit applies)');
  }

  try {
    const response = await fetch('https://api.github.com/users/satiricalguru/repos?per_page=100&sort=updated', {
      headers,
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}: ${response.statusText}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      throw new Error('Expected array of repositories from GitHub API');
    }

    const mapped = repos.map((repo) => ({
      name: repo.name,
      description: repo.description || '',
      language: repo.language || 'Code',
      topics: Array.isArray(repo.topics) ? repo.topics : [],
      stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
      forks: typeof repo.forks_count === 'number' ? repo.forks_count : 0,
      url: repo.html_url,
      homepage: repo.homepage || '',
      updatedAt: repo.updated_at,
      isFork: Boolean(repo.fork),
    }));

    mapped.sort((a, b) => b.stars - a.stars);

    fs.writeFileSync(outputPath, JSON.stringify(mapped, null, 2), 'utf-8');
    console.log(`[GitHub Telemetry] Successfully compiled ${mapped.length} public repositories to src/data/github.json`);
  } catch (err) {
    console.warn(`[GitHub Telemetry] Warning: Could not update live GitHub data: ${err.message}`);
    if (fs.existsSync(outputPath)) {
      console.log('[GitHub Telemetry] Preserving existing cached src/data/github.json for static build.');
    } else {
      console.error('[GitHub Telemetry] No fallback data found! Creating minimal fallback array.');
      fs.writeFileSync(outputPath, '[]', 'utf-8');
    }
  }
}

fetchGitHubData();
