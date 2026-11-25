import { octokit } from '@/lib/octokit';

export const getLastCommitDate = async () => {
  try {
    const { data } = await octokit.rest.repos.getBranch({
      owner: 'josephchay',
      repo: 'dennis-snellberg-recreate',
      branch: 'main',
    });

    const date = data?.commit?.commit?.committer?.date ?? '2024-06-23T05:05:54Z';

    return new Date(date);
  } catch (error) {
    console.error('Error fetching the last commit date:', error);
    return new Date('2024-06-23T05:05:54Z');
  }
};
