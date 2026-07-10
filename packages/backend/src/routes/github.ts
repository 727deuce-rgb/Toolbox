import express from 'express';
import { Octokit } from 'octokit';

const router = express.Router();

// TODO: Initialize Octokit with user token

// Get user repos
router.get('/repos', async (req, res) => {
  res.json({ repos: [] });
});

// Get repo details
router.get('/repo/:owner/:repo', async (req, res) => {
  const { owner, repo } = req.params;
  res.json({ repo: { owner, repo } });
});

export default router;
